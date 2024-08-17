import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-BGiMPO_O.js";const n="/assets/2024-04-29-09-32-43-B873YvmW.png",t={},l=e('<h1 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式"><span>适配器模式</span></a></h1><p>适配器模式是一种结构型模式，可以将一个类的接口转换成客户端所期望的另一种接口，适配器模式可以帮助开发人员在不修改现有代码的情况下，将不兼容的类组合在一起。</p><figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>举个例子，我们经常使用到的水管的适配器，当两根水管的直径、材质等都不相同时，很难直接将其进行连接，如果使用适配器就很容易将其进行连接。</p><p>适配器模式中主要包含以下几个组成部分：</p><ul><li>目标接口（Target Interface）：客户端期望的接口。</li><li>适配器（Adapter）：充当两个不兼容的接口之间的桥梁，使得他们可以互相通信。</li><li>适配者（Adaptee）：需要被适配的对象，它的接口和客户端期望的目标接口不兼容。</li><li>客户端（Client）：使用目标接口的对象</li></ul><h2 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想"><span>设计思想</span></a></h2><p>适配器模式就是编程思想中面向切面典型的加一层，即在两层不兼容的切面中间加一层，对下层提供的接口进行封装，包装后提供给上层服务。</p><ul><li><p>当需要将一个已有的类或接口与另一个不兼容的类或接口进行协同工作时。</p></li><li><p>当需要对一个已有的类或接口进行修改，以满足客户端的需求时，但是不希望修改该类或接口的源代码。</p></li><li><p>当需要重新使用一个已有的类或接口，但是不能直接使用该类或接口的方法时。</p></li></ul><h2 id="实现案例" tabindex="-1"><a class="header-anchor" href="#实现案例"><span>实现案例</span></a></h2><ul><li>目标接口 Target</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不兼容的适配者 Adaptee</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> specificRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Adaptee specificRequest.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>适配器 Adapter</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Adapter</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Adaptee</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Adapter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> adaptee;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">specificRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> AdapterPatternDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Adaptee</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Adaptee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Target</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> target</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Adapter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(adaptee);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        target</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>适配器模式是一种非常有用的设计模式，在 JDK、操作系统 中被广泛应用，可以向上提供一致的接口</p><ol><li><p>Java IO 流是一个常见的适配器模式的例子，他提供了一组标准的接口来访问各种类型的数据源，包括文件、网络连接、内存等，每个数据源都有自己的接口，但是 Java IO 流可以将这些不同的接口转换为标准的接口，从而提供一致的访问方式。</p></li><li><p>Java Servlet API 也是一个常见的适配器模式的例子。它定义了一组接口来处理 HTTP 请求和响应，包括 doGet()、doPost()、doPut() 等等。每个 Servlet 都必须实现这些接口，但是用户只需要实现其中的一部分即可。这些 Servlet 之间的适配工作由 Servlet 容器完成。</p></li><li><p>操作系统中对外设的管理，不同的外设有不同的接口，操作系统根据其功能的划分，对这些外设提供的接口进行封装，向用户提供了统一的接口。</p></li></ol>`,21),h=[l];function p(k,r){return a(),s("div",null,h)}const g=i(t,[["render",p],["__file","adapter-pattern.html.vue"]]),A=JSON.parse('{"path":"/dev-idea/design-patterns/structural-patterns/adapter-pattern.html","title":"适配器模式","lang":"zh-CN","frontmatter":{"description":"适配器模式 适配器模式是一种结构型模式，可以将一个类的接口转换成客户端所期望的另一种接口，适配器模式可以帮助开发人员在不修改现有代码的情况下，将不兼容的类组合在一起。 举个例子，我们经常使用到的水管的适配器，当两根水管的直径、材质等都不相同时，很难直接将其进行连接，如果使用适配器就很容易将其进行连接。 适配器模式中主要包含以下几个组成部分： 目标接口（...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/dev-idea/design-patterns/structural-patterns/adapter-pattern.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"适配器模式"}],["meta",{"property":"og:description","content":"适配器模式 适配器模式是一种结构型模式，可以将一个类的接口转换成客户端所期望的另一种接口，适配器模式可以帮助开发人员在不修改现有代码的情况下，将不兼容的类组合在一起。 举个例子，我们经常使用到的水管的适配器，当两根水管的直径、材质等都不相同时，很难直接将其进行连接，如果使用适配器就很容易将其进行连接。 适配器模式中主要包含以下几个组成部分： 目标接口（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-29T13:18:57.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-04-29T13:18:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"适配器模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-29T13:18:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"设计思想","slug":"设计思想","link":"#设计思想","children":[]},{"level":2,"title":"实现案例","slug":"实现案例","link":"#实现案例","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1714396737000,"updatedTime":1714396737000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":2.61,"words":784},"filePathRelative":"dev-idea/design-patterns/structural-patterns/adapter-pattern.md","localizedDate":"2024年4月29日","autoDesc":true,"excerpt":"\\n<p>适配器模式是一种结构型模式，可以将一个类的接口转换成客户端所期望的另一种接口，适配器模式可以帮助开发人员在不修改现有代码的情况下，将不兼容的类组合在一起。</p>\\n<figure><figcaption></figcaption></figure>\\n<p>举个例子，我们经常使用到的水管的适配器，当两根水管的直径、材质等都不相同时，很难直接将其进行连接，如果使用适配器就很容易将其进行连接。</p>\\n<p>适配器模式中主要包含以下几个组成部分：</p>\\n<ul>\\n<li>目标接口（Target Interface）：客户端期望的接口。</li>\\n<li>适配器（Adapter）：充当两个不兼容的接口之间的桥梁，使得他们可以互相通信。</li>\\n<li>适配者（Adaptee）：需要被适配的对象，它的接口和客户端期望的目标接口不兼容。</li>\\n<li>客户端（Client）：使用目标接口的对象</li>\\n</ul>"}');export{g as comp,A as data};
