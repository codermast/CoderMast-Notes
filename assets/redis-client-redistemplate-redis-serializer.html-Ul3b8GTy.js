import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-BGiMPO_O.js";const n="/assets/2023-05-17-21-11-35-CHxBOPBg.png",l="/assets/2023-05-17-21-11-13-oWPDJVJU.png",t="/assets/2023-05-17-22-23-46-BOR-hCu2.png",h="/assets/2023-05-17-22-31-37-CjobSUAX.png",p={},k=e('<h1 id="redis客户端-redisserializer" tabindex="-1"><a class="header-anchor" href="#redis客户端-redisserializer"><span>Redis客户端 - RedisSerializer</span></a></h1><div class="hint-container note"><p class="hint-container-title">前景回顾</p><p>在上一篇中，我们实现了一个简单的案例，操作一个 String 类型的数据，插入了一个 name = codermast 的数据到Redis。</p></div><p>使用redis-cli客户端连接对应的Redis服务器后，按道理来讲<code>get name</code>这个指令的返回结果应该是 <code>codermast</code></p><figure><img src="'+n+'" alt="redis-cli客户端查看" tabindex="0" loading="lazy"><figcaption>redis-cli客户端查看</figcaption></figure><p>返回的结果是无，这是为什么呢？使用可视化工具查看一下，看看到底数据是否存储在Redis服务器中。</p><figure><img src="'+l+`" alt="使用可视化工具查看" tabindex="0" loading="lazy"><figcaption>使用可视化工具查看</figcaption></figure><p>可以明显的看到，所存储的 key 之前加上了一段字符，但是从代码中看，存储的 key 为 &quot;name&quot;，但是实际存储的 key 是 <code>\\xac\\xed\\x00\\x05t\\x00\\x04name</code>，而且里面的 value 也做了同样的处理 <code>\\xac\\xed\\x00\\x05t\\x00\\x09codermast</code></p><p>出现这种现象的原因是什么呢？这是因为 RedisTemplate 在底层将数据序列化处理以后，才存储到 Redis 服务器中。</p><p>RedisTemplate 可以接收任意 Object 作为值写入 Redis ，只不过在写入之前会把 Object 序列化成为字节形式，默认是采用 JDK 序列化，得到的结果就如图所示。</p><div class="hint-container warning"><p class="hint-container-title">缺点</p><ul><li>可读性差</li><li>资源占用高</li></ul></div><p>既然这样可读性又差，资源占用又高，那么如何解决这些问题呢？我们可以通过自定义 RedisTemplate 序列化的方式来解决。</p><h2 id="编写一个-redisconfig-配置类" tabindex="-1"><a class="header-anchor" href="#编写一个-redisconfig-配置类"><span>编写一个 RedisConfig 配置类</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RedisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RedisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RedisConnectionFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> factory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 1.创建RedisTemplate对象</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        RedisTemplate</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> ,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RedisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 2.设置连接⼯⼚</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setConnectionFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(factory);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 3.创建序列化对象</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        StringRedisSerializer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stringRedisSerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> StringRedisSerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        GenericJackson2JsonRedisSerializer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> genericJackson2JsonRedisSerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> GenericJackson2JsonRedisSerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 4.设置 key 和 hashKey 采⽤ String 的序列化⽅式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setKeySerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stringRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setHashKeySerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(stringRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 5.设置 value 和 hashValue 采⽤ json的 序列化⽅式</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setValueSerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(genericJackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setHashValueSerializer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(genericJackson2JsonRedisSerializer);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> redisTemplate;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我们自定义的配置类中，使用到了 Jackson 序列化类，所以在使用之前需要导入 jackson-datebind 这个依赖项。</p><div class="language-xml" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;!-- jackson-databind 依赖 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;com.fasterxml.jackson.core&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;jackson-databind&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></div><h2 id="自定义序列化方式" tabindex="-1"><a class="header-anchor" href="#自定义序列化方式"><span>自定义序列化方式</span></a></h2><p>自定义的序列化方式也加进去了对引用类型的序列化，我们来实际测试一下。</p><ul><li>编写一个 User 类</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Data</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> User{</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>类中属性需要给出 set 和 get方法</p></blockquote><ul><li>将 User 对象存储至 Redis</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Test</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> testObject</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(){</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    User</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> user </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> User</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setAge</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;codermast&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 插入一条 Object 类型的数据</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">opsForValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;user&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,user);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 获取一条 Object 类型的数据</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    User</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> user_coder </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (User)</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">redisTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">opsForValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;user&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(user_coder);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>虽然 JSON 的序列化方式可以满足我们存储对象的需求，为了在反序列化时知道对象的类型，将对象的类路径地址也序列化进 JSON 结果中，存入 Redis ，会带来额外的资源消耗。</p><p>针对如图所示的特殊情况，类路径地址比我们真实的数据内容还大，造成了极大的资源浪费。</p><h2 id="优化自定义序列化" tabindex="-1"><a class="header-anchor" href="#优化自定义序列化"><span>优化自定义序列化</span></a></h2><p>为了节省内存空间，通常情况下不会使用 JSON 序列化器来处理 Value ，而是统一使用 String 序列化器，要求只能存储 String 类型的 key 和 value。当要存储 Java 对象时，手动完成对象的序列化和反序列化。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Spring 默认提供了一个 StringRedisTemplate 类，它的 key 和 value 的序列化方式默认就是 String 方式，省去了我们自定义的 RedisTemplate 的过程。</p><p>现在在存储数据之前需要进行手动序列化，在获取数据以后，需要手动反序列化对象。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>RedisTemplate 的两种序列化实践方案</p><ol><li>方案一 <ul><li>自定义RedisTemplate</li><li>修改RedisTemplate 的序列化器为 GenericJackson2JsonRedisSerializer</li></ul></li><li>方案二 <ul><li>使用 StringRedisTemplate</li><li>写入 Redis 之前，将对象手动序列化为 JSON</li><li>读取数据以后，将 JSON 手动反序列化为对象</li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上述仅说明了操作 String 类型的数据，操作 Hash、List、Set、SortedSet类型时，使用对应的 ops 对象即可操作。</p></div>',33),r=[k];function d(c,g){return a(),s("div",null,r)}const A=i(p,[["render",d],["__file","redis-client-redistemplate-redis-serializer.html.vue"]]),y=JSON.parse('{"path":"/database/redis/client/redis-client-redistemplate-redis-serializer.html","title":"Redis客户端 - RedisSerializer","lang":"zh-CN","frontmatter":{"order":12,"description":"Redis客户端 - RedisSerializer 前景回顾 在上一篇中，我们实现了一个简单的案例，操作一个 String 类型的数据，插入了一个 name = codermast 的数据到Redis。 使用redis-cli客户端连接对应的Redis服务器后，按道理来讲get name这个指令的返回结果应该是 codermast redis-cli...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/client/redis-client-redistemplate-redis-serializer.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"Redis客户端 - RedisSerializer"}],["meta",{"property":"og:description","content":"Redis客户端 - RedisSerializer 前景回顾 在上一篇中，我们实现了一个简单的案例，操作一个 String 类型的数据，插入了一个 name = codermast 的数据到Redis。 使用redis-cli客户端连接对应的Redis服务器后，按道理来讲get name这个指令的返回结果应该是 codermast redis-cli..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T07:38:39.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-05-31T07:38:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis客户端 - RedisSerializer\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T07:38:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"编写一个 RedisConfig 配置类","slug":"编写一个-redisconfig-配置类","link":"#编写一个-redisconfig-配置类","children":[]},{"level":2,"title":"自定义序列化方式","slug":"自定义序列化方式","link":"#自定义序列化方式","children":[]},{"level":2,"title":"优化自定义序列化","slug":"优化自定义序列化","link":"#优化自定义序列化","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1684334547000,"updatedTime":1717141119000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":3.46,"words":1039},"filePathRelative":"database/redis/client/redis-client-redistemplate-redis-serializer.md","localizedDate":"2023年5月17日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">前景回顾</p>\\n<p>在上一篇中，我们实现了一个简单的案例，操作一个 String 类型的数据，插入了一个 name = codermast 的数据到Redis。</p>\\n</div>\\n<p>使用redis-cli客户端连接对应的Redis服务器后，按道理来讲<code>get name</code>这个指令的返回结果应该是 <code>codermast</code></p>\\n<figure><figcaption>redis-cli客户端查看</figcaption></figure>"}');export{A as comp,y as data};
