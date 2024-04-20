import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as o,b as e,e as t,d as i,w as c,a as n}from"./app-C0jj9iru.js";const p="/assets/2023-05-16-15-07-53-BqQGcM8_.png",h="/assets/2023-05-16-15-13-08-BrM_S0nU.png",u="/assets/2023-05-16-15-30-14-D8ZCY6Y6.png",g="/assets/2023-05-16-15-30-50-PN33abk6.png",m="/assets/2023-05-16-15-58-50-BSWsg_m3.png",v="/assets/2023-05-17-00-15-17-C9KQvdkf.png",b={},_=n('<h1 id="redis入门-redis概念和基础" tabindex="-1"><a class="header-anchor" href="#redis入门-redis概念和基础"><span>Redis入门 - Redis概念和基础</span></a></h1><h2 id="什么是nosql" tabindex="-1"><a class="header-anchor" href="#什么是nosql"><span>什么是NoSQL</span></a></h2><ul><li>NoSQL，泛指非关系型的数据库。</li><li>NoSQL最常见的解释是 &quot;non-relational&quot;， 很多人也说它是&quot;Not Only SQL&quot;</li><li>NoSQL仅仅是一个概念，泛指<strong>非关系型的数据库</strong></li><li>区别于关系数据库，它们不保证关系数据的ACID特性</li><li>NoSQL是一项全新的数据库革命性运动，提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入</li><li>常见的NoSQL数据库有：<code>Redis</code>、<code>MemCache</code>、<code>MongoDB</code>等</li></ul><h2 id="nosql与sql" tabindex="-1"><a class="header-anchor" href="#nosql与sql"><span>NoSQL与SQL</span></a></h2><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">SQL</th><th style="text-align:center;">NoSQL</th></tr></thead><tbody><tr><td style="text-align:center;">数据结构</td><td style="text-align:center;">结构化</td><td style="text-align:center;">非结构化</td></tr><tr><td style="text-align:center;">数据关联</td><td style="text-align:center;">关联</td><td style="text-align:center;">无关联</td></tr><tr><td style="text-align:center;">查询方式</td><td style="text-align:center;">SQL查询</td><td style="text-align:center;">非SQL查询</td></tr><tr><td style="text-align:center;">事务特性</td><td style="text-align:center;">ACID</td><td style="text-align:center;">BASE</td></tr><tr><td style="text-align:center;">存储方式</td><td style="text-align:center;">磁盘</td><td style="text-align:center;">内存</td></tr><tr><td style="text-align:center;">扩展性</td><td style="text-align:center;">垂直</td><td style="text-align:center;">水平</td></tr><tr><td style="text-align:center;">使用场景</td><td style="text-align:center;">1.数据结构固定<br>2.相关业务对数据安全性、一致性要求较高</td><td style="text-align:center;">1.数据结构不固定<br> 2.对一致性、安全性要求不高 <br>3.对性能要求高</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">NoSQL数据库的常见种类</p><ol><li>键值类型（Redis）</li><li>文档类型（MongoDB）</li><li>列类型（HBase）</li><li>Graph类型（Neo4j）</li></ol></div><h2 id="认识redis" tabindex="-1"><a class="header-anchor" href="#认识redis"><span>认识Redis</span></a></h2><p>Redis诞生于2009年，全称为 Remote Dictionary Server，远程字典服务器，是一个基于内存的键值型的NoSQL数据库。</p><p>Redis特征</p>',9),f=e("li",null,"键值型（Key-Value），value支持多种不同的数据结构，功能丰富。",-1),x=e("li",null,"单线程，每个命令具备原子性。Redis6.0开始对网络请求启用多线程，但是对命令的执行依然是单线程。",-1),y=e("li",null,"支持数据持久化",-1),R=e("li",null,"支持主从集群、分片集群",-1),k=e("li",null,"支持多语言客户端（C语言、Java、C++、Python等）",-1),S=n(`<h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis"><span>安装Redis</span></a></h2><p>由于Redis的作者仅编写了Linux环境下的版本，且在生产环境时大多数使用的Linux系统，故我们在Centos操作系统内进行安装。</p><p>安装Redis</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="Redis安装" tabindex="0" loading="lazy"><figcaption>Redis安装</figcaption></figure>',5),L={class:"hint-container note"},N=e("p",{class:"hint-container-title"},"其他安装",-1),Q={href:"https://redis.io/docs/getting-started/installation/",target:"_blank",rel:"noopener noreferrer"},q=n('<h2 id="redis启动的三种方式" tabindex="-1"><a class="header-anchor" href="#redis启动的三种方式"><span>Redis启动的三种方式</span></a></h2><h3 id="前台启动" tabindex="-1"><a class="header-anchor" href="#前台启动"><span>前台启动</span></a></h3><p>安装完Redis以后，在任意目录下输入<code>redis-server</code>命令即可启动Redis。</p><figure><img src="'+h+`" alt="前台启动Redis" tabindex="0" loading="lazy"><figcaption>前台启动Redis</figcaption></figure><p>前台启动Redis后，就是如上界面，此时命令终端会一直响应Redis服务，而无法进行其他操作，要进行其他指令操作时，则必须关闭Redis服务，很不方便，此时我们可以使用后台启动。</p><h3 id="后台启动" tabindex="-1"><a class="header-anchor" href="#后台启动"><span>后台启动</span></a></h3><p>如果要让Redis以后台方式启动，则必须修改Redis配置文件，配置文件所在目录就是Redis安装目录。</p><p>修改Redis配置文件<code>redis.conf</code>文件中的配置项。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0
<span class="token comment"># 守护进程，修改为yes后即为后台运行</span>
daemonize <span class="token function">yes</span> 
<span class="token comment"># 密码，设置后访问Redis必须输入密码，此时密码即为 codermast</span>
requirepass codermast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时启动Redis时需要加上配置文件，即可后台启动redis。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>redis-server redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="Redis后台启动" tabindex="0" loading="lazy"><figcaption>Redis后台启动</figcaption></figure><h3 id="开机启动" tabindex="-1"><a class="header-anchor" href="#开机启动"><span>开机启动</span></a></h3><ol><li>要实现开机启动，需要配置一个系统服务文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/systemd/system/redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>将以下内容作为文件内容：</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[Unit]
Description=redis-server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/bin/redis-server /usr/local/src/redis-6.2.6/redis.conf
PrivateTmp=true

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>重载系统服务</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>开启redis开机自启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">操作Redis指令</p><ul><li>启动：<code>systemctl start redis</code></li><li>停止：<code>systemctl stop redis</code></li><li>重启：<code>systemctl restart redis</code></li><li>查看状态：<code>systemctl status redis</code></li></ul></div><h2 id="redis客户端" tabindex="-1"><a class="header-anchor" href="#redis客户端"><span>Redis客户端</span></a></h2><p>Redis本身仅有一个基于命令行的客户端，但是这种方式在我们使用过程中不太直观，所以市面上就出现了很多的客户端，但主要分为三种类型：命令行客户端、图形化客户端、编程语言客户端。</p><h3 id="命令行客户端" tabindex="-1"><a class="header-anchor" href="#命令行客户端"><span>命令行客户端</span></a></h3><p>Redis安装完成后就自带了命令行客户端：redis-cli，使用方式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>redis-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>commonds<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>这里options为选项，commonds为命令，加上[]为可选项。这也是一种常见的文档编写规范。</p></blockquote><figure><img src="`+g+'" alt="Redis命令行连接" tabindex="0" loading="lazy"><figcaption>Redis命令行连接</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里要注意的是，在使用redis-cli客户端连接redis服务时，需要保证redis服务是开启的，无论是在远程连接或者本地连接，这是新手阶段容易忽视的一点。</p></div><p>其中常见的options有：</p><ul><li>h 127.0.0.1：指定要连接的redis节点的IP地址，默认是127.0.0.1</li><li>p 6379：指定要连接的redis节点的端口，默认是6379</li><li>a 132537：指定redis的访问密码</li></ul><p>其中的commonds就是Redis的操作命令，例如：</p><ul><li>ping：与redis服务端做心跳测试，服务端正常会返回pong</li><li>不指定commond时，会进入redis-cli的交互控制台。</li></ul><h3 id="图形化客户端" tabindex="-1"><a class="header-anchor" href="#图形化客户端"><span>图形化客户端</span></a></h3><p>图形化客户端，顾名思义就是通过可视化的软件，来对redis数据库进⾏操作。<br> 图形化界⾯的客户端种类很多，可以选择⾃⼰喜欢的⼀款就可以，这⾥我选择的是Another Redis Desktop Manager这款，⽀持Mac、Linux、Windows系统，更重要的是还免<br> 费。</p><blockquote><p>笔者的电脑系统为macos，故就演示Mac环境下的图形化客户端，windows系统下的客户端种类很多，网络上的资源也很多，这里就不赘述。</p></blockquote><figure><img src="'+m+'" alt="Redis图形化客户端-Another redis desktop manager" tabindex="0" loading="lazy"><figcaption>Redis图形化客户端-Another redis desktop manager</figcaption></figure>',38),C={href:"https://github.com/qishibo/AnotherRedisDesktopManager/releases/tag/v1.5.9",target:"_blank",rel:"noopener noreferrer"},D={href:"https://gitee.com/qishibo/AnotherRedisDesktopManager/releases/tag/v1.5.8",target:"_blank",rel:"noopener noreferrer"},M=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("p",null,"对于Github访问慢的⽤户，可以直接在国内的Gitee中下载安装，⼀般来说两者都没有什么差别，唯⼀的区别就在于Github上的更新⽐较及时。")],-1),A=e("h3",{id:"编程语言客户端",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编程语言客户端"},[e("span",null,"编程语言客户端")])],-1),w=e("p",null,"编程语言客户端也有很多种，如Java语言的Jedis客户端，Go语言的Go-Redis客户端等。",-1),B={href:"https://redis.io/docs/clients/",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,"几个Java语言的客户端展示。",-1),z=e("figure",null,[e("img",{src:v,alt:"Java语言的Redis客户端",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Java语言的Redis客户端")],-1);function G(T,J){const l=a("font"),s=a("ExternalLinkIcon");return r(),o("div",null,[_,e("ul",null,[f,x,e("li",null,[t("低延迟，速度快（"),i(l,{color:"red"},{default:c(()=>[t("基于内存")]),_:1}),t("、IO多路复用、良好的编码）")]),y,R,k]),S,e("div",L,[N,e("p",null,[t("除了上述安装方式以外还有很多安装方式，这里不再赘述。各种环境的安装方式，可以参考Redis官方的安装文档，地址："),e("a",Q,[t("https://redis.io/docs/getting-started/installation/"),i(s)])])]),q,e("p",null,[t("Github地址："),e("a",C,[t("https://github.com/qishibo/AnotherRedisDesktopManager/releases/tag/v1.5.9"),i(s)])]),e("p",null,[t("Gitee地址："),e("a",D,[t("https://gitee.com/qishibo/AnotherRedisDesktopManager/releases/tag/v1.5.8"),i(s)])]),M,A,w,e("p",null,[t("具体的可以参考Redis官方提供的文档，地址："),e("a",B,[t("https://redis.io/docs/clients/"),i(s)])]),I,z])}const E=d(b,[["render",G],["__file","redis-introduction-concept-fundamental.html.vue"]]),V=JSON.parse('{"path":"/database/redis/redis-introduction-concept-fundamental.html","title":"Redis入门 - Redis概念和基础","lang":"zh-CN","frontmatter":{"order":1,"description":"Redis入门 - Redis概念和基础 什么是NoSQL NoSQL，泛指非关系型的数据库。 NoSQL最常见的解释是 \\"non-relational\\"， 很多人也说它是\\"Not Only SQL\\" NoSQL仅仅是一个概念，泛指非关系型的数据库 区别于关系数据库，它们不保证关系数据的ACID特性 NoSQL是一项全新的数据库革命性运动，提倡运用非关...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-introduction-concept-fundamental.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis入门 - Redis概念和基础"}],["meta",{"property":"og:description","content":"Redis入门 - Redis概念和基础 什么是NoSQL NoSQL，泛指非关系型的数据库。 NoSQL最常见的解释是 \\"non-relational\\"， 很多人也说它是\\"Not Only SQL\\" NoSQL仅仅是一个概念，泛指非关系型的数据库 区别于关系数据库，它们不保证关系数据的ACID特性 NoSQL是一项全新的数据库革命性运动，提倡运用非关..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-23T07:39:49.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2023-06-23T07:39:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - Redis概念和基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-23T07:39:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是NoSQL","slug":"什么是nosql","link":"#什么是nosql","children":[]},{"level":2,"title":"NoSQL与SQL","slug":"nosql与sql","link":"#nosql与sql","children":[]},{"level":2,"title":"认识Redis","slug":"认识redis","link":"#认识redis","children":[]},{"level":2,"title":"安装Redis","slug":"安装redis","link":"#安装redis","children":[]},{"level":2,"title":"Redis启动的三种方式","slug":"redis启动的三种方式","link":"#redis启动的三种方式","children":[{"level":3,"title":"前台启动","slug":"前台启动","link":"#前台启动","children":[]},{"level":3,"title":"后台启动","slug":"后台启动","link":"#后台启动","children":[]},{"level":3,"title":"开机启动","slug":"开机启动","link":"#开机启动","children":[]}]},{"level":2,"title":"Redis客户端","slug":"redis客户端","link":"#redis客户端","children":[{"level":3,"title":"命令行客户端","slug":"命令行客户端","link":"#命令行客户端","children":[]},{"level":3,"title":"图形化客户端","slug":"图形化客户端","link":"#图形化客户端","children":[]},{"level":3,"title":"编程语言客户端","slug":"编程语言客户端","link":"#编程语言客户端","children":[]}]}],"git":{"createdTime":1684229502000,"updatedTime":1687505989000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":5.39,"words":1616},"filePathRelative":"database/redis/redis-introduction-concept-fundamental.md","localizedDate":"2023年5月16日","autoDesc":true,"excerpt":"\\n<h2>什么是NoSQL</h2>\\n<ul>\\n<li>NoSQL，泛指非关系型的数据库。</li>\\n<li>NoSQL最常见的解释是 \\"non-relational\\"， 很多人也说它是\\"Not Only SQL\\"</li>\\n<li>NoSQL仅仅是一个概念，泛指<strong>非关系型的数据库</strong></li>\\n<li>区别于关系数据库，它们不保证关系数据的ACID特性</li>\\n<li>NoSQL是一项全新的数据库革命性运动，提倡运用非关系型的数据存储，相对于铺天盖地的关系型数据库运用，这一概念无疑是一种全新的思维的注入</li>\\n<li>常见的NoSQL数据库有：<code>Redis</code>、<code>MemCache</code>、<code>MongoDB</code>等</li>\\n</ul>"}');export{E as comp,V as data};