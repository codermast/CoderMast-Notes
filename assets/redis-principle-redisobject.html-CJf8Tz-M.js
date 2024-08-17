import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as d,b as t,d as i,e as s,a as n,o as r}from"./app-BGiMPO_O.js";const c="/assets/2023-06-16-12-37-00-BYjuzn06.png",p={},h=n(`<h1 id="redis原理-redisobject对象机制" tabindex="-1"><a class="header-anchor" href="#redis原理-redisobject对象机制"><span>Redis原理 - RedisObject对象机制</span></a></h1><h2 id="为什么会设计redisobject" tabindex="-1"><a class="header-anchor" href="#为什么会设计redisobject"><span>为什么会设计RedisObject</span></a></h2><p>在 Redis 中，我们的操作都是使用指令进行，而这些的命令中，用于对键处理的命令占据一大部分。有些指令只能针对某些特定的类型，而有些指令却能够针对所有的类型。但是要正确实现这些命令，必须为不同类型的键设置不同的处理方式。比如删除一个列表键和删除一个字符串键的操作过程是不一样的，在底层就需要调用不同的视线方式。</p><p>集合类型有字典和整数集合两种不同的底层实现方式，而用户在对集合进行操作时，并不想关心具体的底层实现是什么样的，只要 Redis 能根据自己的指令，完成对应的功能即可，比如对元素进行添加、删除等操作，具体的实现底层对用户来说是透明的，不可见的。</p><p>所以 Redis 必须让每个键都带有类型信息, 并且带有其底层的编码方式，拥有这两个信息时，Redis 才能够准确无误的实现用户的指令。那么 RedisObject 对象起码就应该包含3个属性，类型信息、编码方式、实际数据。</p><h2 id="redisobject" tabindex="-1"><a class="header-anchor" href="#redisobject"><span>RedisObject</span></a></h2><p>Redis 中的任意数据类型的键和值都会被封装为一个 RedisObject，也叫做 Redis 对象，在<code>/src/server.h</code>文件中实现如下：</p><div class="language-c" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> redisObject {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    unsigned</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> type:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;        </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    unsigned</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> encoding:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 共有 11 种编码方式，占据 4 个比特位</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    unsigned</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lru:LRU_BITS;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /* LRU 表示该对象最后一次被访问的时间，其占用 24 个 bit 位，</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                               便于判断空闲时间太久的key */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> refcount;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">           // 对象引用计数器，计数器为 0 则说明对象无人引用，可以被回收。</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ptr;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">              // 指针，指向数据的真实存储空间地址。一般为 8 个字节</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">} robj;</span></span></code></pre></div>`,8),o=n('<h2 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式"><span>编码方式</span></a></h2><p>Redis 中会根据存储的数据类型不同，选择不同的编码方式，共包含 11 种不同类型：</p><table><thead><tr><th style="text-align:center;">编号</th><th style="text-align:center;">编码方式</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">OBJ ENCODING RAW</td><td style="text-align:center;">raw编码动态字符串</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">OBJ ENCODING INT</td><td style="text-align:center;">Long类型的整数的字符串</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">OBJ_ENCODING_HT</td><td style="text-align:center;">hash表(字典dict)</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">OBJ ENCODING ZIPMAP</td><td style="text-align:center;">已废弃</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">OBJ_ENCODING_LINKEDLIST</td><td style="text-align:center;">双端链表</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;">OBJ ENCODING ZIPLIST</td><td style="text-align:center;">压缩列表</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:center;">OBJ_ENCODING INTSET</td><td style="text-align:center;">整数集合</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:center;">OBJ ENCODING SKIPLIST</td><td style="text-align:center;">跳表</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:center;">OBJ_ENCODING EMBSTR</td><td style="text-align:center;">embstr的动态字符串</td></tr><tr><td style="text-align:center;">10</td><td style="text-align:center;">OBJ_ENCODING QUICKLIST</td><td style="text-align:center;">快速列表</td></tr><tr><td style="text-align:center;">11</td><td style="text-align:center;">OBJENCODING STREAM</td><td style="text-align:center;">Stream流</td></tr></tbody></table><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2><p>Redis 中根据存储的数据类型不同，选择不同的编码方式。每种数据类型使用的编码方式如下：</p><table><thead><tr><th style="text-align:center;">数据类型</th><th style="text-align:center;">编码方式</th><th style="text-align:center;">编号</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">OBJ_STRING</td><td style="text-align:center;">int、embstr、raw</td><td style="text-align:center;">0</td><td style="text-align:center;">字符串</td></tr><tr><td style="text-align:center;">OBJ_LIST</td><td style="text-align:center;">LinkedList和ZipList(3.2以前)、QuickList(3.2以后)</td><td style="text-align:center;">1</td><td style="text-align:center;">列表</td></tr><tr><td style="text-align:center;">OBJ_SET</td><td style="text-align:center;">intset、HT</td><td style="text-align:center;">2</td><td style="text-align:center;">集合</td></tr><tr><td style="text-align:center;">OBJ_ZSET</td><td style="text-align:center;">ZipList、HT、SkipList</td><td style="text-align:center;">3</td><td style="text-align:center;">有序集</td></tr><tr><td style="text-align:center;">OBJ_HASH</td><td style="text-align:center;">ZipList、HT</td><td style="text-align:center;">4</td><td style="text-align:center;">哈希表</td></tr></tbody></table><div class="hint-container note"><p class="hint-container-title">注意</p><p>这里只有 5 种基本类型，而没有提到 3 种特殊类型，是因为这三种特殊类型的底层是使用<code>OBJ_STRING</code>来实现的，并没有新的底层实现方式。</p></div><h2 id="命令处理" tabindex="-1"><a class="header-anchor" href="#命令处理"><span>命令处理</span></a></h2><p>通过前面的描述，Redis 在执行命令时，需要判断所执行的数据类型和编码方式，则 Redis 执行一个处理数据类型命令的时候，Redis 执行以下步骤：</p><ol><li>根据给定的key，在数据库字典中查找和他相对应的redisObject，如果没找到，就返回NULL</li><li>检查redisObject的type属性和执行命令所需的类型是否相符，如果不相符，返回类型错误</li><li>根据redisObject的encoding属性所指定的编码，选择合适的操作函数来处理底层的数据结构</li><li>返回数据结构的操作结果作为命令的返回值</li></ol><p><strong>比如现在执行LPOP命令：</strong><br><img src="'+c+'" alt="" loading="lazy"></p><h2 id="对象共享" tabindex="-1"><a class="header-anchor" href="#对象共享"><span>对象共享</span></a></h2><p>Redis 一般会把一些常见的值放到一个共享对象中，这样可使程序避免了重复分配的麻烦，也节约了一些CPU时间。</p><p><strong>Redis预分配的值对象如下</strong></p><ul><li>各种命令的返回值，比如成功时返回的OK，错误时返回的ERROR，命令入队事务时返回的QUEUE，等等</li><li>包括0 在内，小于REDIS_SHARED_INTEGERS的所有整数（REDIS_SHARED_INTEGERS的默认值是10000）</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>共享对象只能被字典和双向链表这类能带有指针的数据结构使用，只有指针才能够指向任意的地址。而整数集合和压缩列表这些只能保存字符串、整数等实际数据的类型，则无法共享。</p></div><p><strong>为什么redis不共享列表对象、哈希对象、集合对象、有序集合对象，只共享字符串对象？</strong></p><ul><li>列表对象、哈希对象、集合对象、有序集合对象，本身可以包含字符串对象，复杂度较高。</li><li>如果共享对象是保存字符串对象，那么验证操作的复杂度为O(1)</li><li>如果共享对象是保存字符串值的字符串对象，那么验证操作的复杂度为O(N)</li><li>如果共享对象是包含多个值的对象，其中值本身又是字符串对象，即其它对象中嵌套了字符串对象，比如列表对象、哈希对象，那么验证操作的复杂度将会是O(N的平方)</li><li>如果对复杂度较高的对象创建共享对象，需要消耗很大的CPU，用这种消耗去换取内存空间，是不合适的。并且对象的复杂度过高，说明对象的个性较大，共性较少，则使用到该对象的次数和频率都会很低。</li></ul><h2 id="引用计数器" tabindex="-1"><a class="header-anchor" href="#引用计数器"><span>引用计数器</span></a></h2><p>RedisObject 中有 refcount 属性，为对象引用计数器，用于记录对象引用数量。</p><p>当计数器为 0 时，则代表该对象没有被引用，则就不会再被使用，那么说明该对象可以被删除销毁。</p><p>当新创建一个对象时，它的refcount属性被设置为1。</p><p>当对一个对象进行共享时，Redis 将这个对象的 refcount 加一。</p><p>当使用完一个对象后，或者消除对一个对象的引用之后，程序将对象的refcount减一。</p>',24);function g(y,k){const e=a("Badge");return r(),d("div",null,[h,t("ul",null,[t("li",null,[i(e,{text:"unsigned type:4",type:"tip",vertical:"middle"}),s("占 4 个 bit 位，分别是 string、list、set、zset、hash 对应 0 1 2 3 4")]),t("li",null,[i(e,{text:"unsigned encoding:4",type:"danger",vertical:"middle"}),s("共有 11 种编码方式，占据 4 个比特位")]),t("li",null,[i(e,{text:"unsigned lru:LRU_BITS",type:"warning",vertical:"middle"}),s("LRU 表示该对象最后一次被访问的时间，其占用 24 个bit 位，便于判断空闲时间太久的key ")]),t("li",null,[i(e,{text:"int refcount",type:"note",vertical:"middle"}),s("对象引用计数器，计数器为 0 则说明对象无人引用，可以被回收。")]),t("li",null,[i(e,{text:"void *ptr",type:"info",vertical:"middle"}),s("指针，指向数据的真实存储空间地址。一般为 8 个字节")])]),o])}const A=l(p,[["render",g],["__file","redis-principle-redisobject.html.vue"]]),m=JSON.parse('{"path":"/database/redis/principle/redis-principle-redisobject.html","title":"Redis原理 - RedisObject对象机制","lang":"zh-CN","frontmatter":{"order":25,"description":"Redis原理 - RedisObject对象机制 为什么会设计RedisObject 在 Redis 中，我们的操作都是使用指令进行，而这些的命令中，用于对键处理的命令占据一大部分。有些指令只能针对某些特定的类型，而有些指令却能够针对所有的类型。但是要正确实现这些命令，必须为不同类型的键设置不同的处理方式。比如删除一个列表键和删除一个字符串键的操作过...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/principle/redis-principle-redisobject.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"Redis原理 - RedisObject对象机制"}],["meta",{"property":"og:description","content":"Redis原理 - RedisObject对象机制 为什么会设计RedisObject 在 Redis 中，我们的操作都是使用指令进行，而这些的命令中，用于对键处理的命令占据一大部分。有些指令只能针对某些特定的类型，而有些指令却能够针对所有的类型。但是要正确实现这些命令，必须为不同类型的键设置不同的处理方式。比如删除一个列表键和删除一个字符串键的操作过..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T07:38:39.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-05-31T07:38:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis原理 - RedisObject对象机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T07:38:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"为什么会设计RedisObject","slug":"为什么会设计redisobject","link":"#为什么会设计redisobject","children":[]},{"level":2,"title":"RedisObject","slug":"redisobject","link":"#redisobject","children":[]},{"level":2,"title":"编码方式","slug":"编码方式","link":"#编码方式","children":[]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"命令处理","slug":"命令处理","link":"#命令处理","children":[]},{"level":2,"title":"对象共享","slug":"对象共享","link":"#对象共享","children":[]},{"level":2,"title":"引用计数器","slug":"引用计数器","link":"#引用计数器","children":[]}],"git":{"createdTime":1686890893000,"updatedTime":1717141119000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":5.87,"words":1762},"filePathRelative":"database/redis/principle/redis-principle-redisobject.md","localizedDate":"2023年6月16日","autoDesc":true,"excerpt":"\\n<h2>为什么会设计RedisObject</h2>\\n<p>在 Redis 中，我们的操作都是使用指令进行，而这些的命令中，用于对键处理的命令占据一大部分。有些指令只能针对某些特定的类型，而有些指令却能够针对所有的类型。但是要正确实现这些命令，必须为不同类型的键设置不同的处理方式。比如删除一个列表键和删除一个字符串键的操作过程是不一样的，在底层就需要调用不同的视线方式。</p>\\n<p>集合类型有字典和整数集合两种不同的底层实现方式，而用户在对集合进行操作时，并不想关心具体的底层实现是什么样的，只要 Redis 能根据自己的指令，完成对应的功能即可，比如对元素进行添加、删除等操作，具体的实现底层对用户来说是透明的，不可见的。</p>"}');export{A as comp,m as data};
