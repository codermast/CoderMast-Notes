import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as l,o as e}from"./app-B57ZAt7d.js";const n={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[l(`<h1 id="java核心-基础概念及语法" tabindex="-1"><a class="header-anchor" href="#java核心-基础概念及语法"><span>Java核心 - 基础概念及语法</span></a></h1><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><ol><li>单行注释</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 单行注释</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>多行注释</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    多行注释</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> */</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>文档注释</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">*   文档注释</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">*   通常包含 类、方法、字段的描述信息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">小知识</p><p>注释仅在编写阶段可见，编译后注释会被编译器完全去除。</p></div><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范"><span>命名规范</span></a></h2><ol><li><p>局部变量命名：小驼峰命名法</p></li><li><p>全局变量命名：小驼峰命名法</p></li><li><p>常量命名：全部大写，蛇形命名法</p></li><li><p>方法命名：小驼峰命名法</p></li><li><p>类命名：大驼峰命名法</p></li></ol><div class="hint-container warning"><p class="hint-container-title">命名要求</p><ul><li>不能以保留关键字为名称</li><li>不能以数字开头</li><li>不能以特殊字符开头</li><li>严格区分大小写</li><li>仅能包括合法的特殊字符</li></ul></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2><p>Java 中数据类型分 基础数据类型 和 引用数据类型 两种类型。</p><p>其中基础数据类型主要有boolean(1B)、byte(1B)、char(2B)、short(2B)、int(4B)、long(8B)、float(8B)、double(16B)，最常见的引用数据类型就是 String 字符串类型和数组类型，自定义的类型多为引用数据类型。</p><p>Java 给基本数据类型提供了对应的包装类，基本数据类型与其包装类型之间的赋值使用自动装箱和拆箱完成，例如：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 源代码</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 装箱</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 拆箱</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 反编译</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">valueOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">intValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">装箱拆箱</p><ul><li>拆箱：包装类型——&gt;基础类型</li><li>装箱：基础类型——&gt;包装类型<br> 所谓自动拆箱装箱，就是JDK帮我们在 基础类型 和 引用类型 之间进行转化，本质就是自动调一些方法。</li></ul></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h2><ul><li>算术运算符：<code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>、<code>%</code>、<code>++</code>、<code>--</code>等</li><li>关系运算符：<code>==</code>、<code>&gt;=</code>、<code>&lt;=</code>、<code>&gt;</code>、<code>&lt;</code>、<code>!=</code></li><li>位运算符：<code>&amp;</code>、<code>|</code>、<code>^</code>、<code>~</code>、<code>&lt;&lt;</code>、<code>&gt;&gt;</code>、<code>&gt;&gt;&gt;</code></li><li>逻辑运算符：<code>&amp;&amp;</code>、<code>||</code>、<code>!</code></li><li>赋值运算符：<code>=</code>、<code>+=</code>、<code>-=</code>、<code>*=</code>、<code>/=</code>、<code>%=</code>、<code>&lt;&lt;=</code>、<code>&gt;&gt;</code>=、<code>＆=</code>、<code>^=</code>、<code>|=</code></li><li>其他运算符：<code>instanceof</code>、<code>，</code></li></ul><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句"><span>条件语句</span></a></h2><h3 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句"><span>if语句</span></a></h3><ol><li>if</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (布尔表达式) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 布尔表达式为真时，执行这里的语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>if...else...</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (布尔表达式) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 布尔表达式为真时，执行这里的语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 布尔表达式为否时，执行这里的语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>if...else if...else</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (布尔表达式 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // 布尔表达式 1的值为 true 执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (布尔表达式 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // 如果布尔表达式 2的值为true执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (布尔表达式 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // 如果布尔表达式 3的值为true执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // 如果以上布尔表达式都不为true执行这里的代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>if 语句可以无限嵌套使用，if...else if...else...也可以无限个条件使用。</p></div><h3 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句"><span>switch语句</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">switch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (表达式) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> value1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       // 表达式的值 == value1，则执行这里的语句</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">       break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //可选</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> value2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       // 表达式的值 == value2，则执行这里的语句</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">       break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // case 语句无限使用</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    default</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //可选</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">       // 如果都不匹配的话，则执行这里的语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里要注意的是，如果不在每个 case 语句中的最后一行写上 break 语句，那么执行完不会退出 switch 语句，而是从该位置继续往后执行。</p></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句"><span>循环语句</span></a></h2><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环"><span>for循环</span></a></h3><ol><li>基本 for 循环</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ( 初始化语句</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 条件语句</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 更新语句</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 这里是循环要执行的语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>增强 for 循环</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ElemType</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> elem </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> 集合){</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 这里是循环要执行的语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>增强的 for 循环只适用于遍历集合。</p></div><h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环"><span>while循环</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (布尔表达式) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 布尔表达式的值为 true，则循环执行这里的语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="do-while循环" tabindex="-1"><a class="header-anchor" href="#do-while循环"><span>do...while循环</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 循环体内要执行的语句。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (布尔表达式)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该循环执行时，会先执行一次循环体内的语句，然后才进行判断循环。</p><div class="hint-container tip"><p class="hint-container-title">关键字说明</p><ul><li>break; 退出当前循环</li><li>continue; 继续当前循环</li></ul></div>`,45)]))}const r=s(n,[["render",t],["__file","basic-grammar.html.vue"]]),p=JSON.parse('{"path":"/java/core/basic-grammar.html","title":"Java核心 - 基础概念及语法","lang":"zh-CN","frontmatter":{"order":2,"description":"Java核心 - 基础概念及语法 注释 单行注释 多行注释 文档注释 小知识 注释仅在编写阶段可见，编译后注释会被编译器完全去除。 命名规范 局部变量命名：小驼峰命名法 全局变量命名：小驼峰命名法 常量命名：全部大写，蛇形命名法 方法命名：小驼峰命名法 类命名：大驼峰命名法 命名要求 不能以保留关键字为名称 不能以数字开头 不能以特殊字符开头 严格区分...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/java/core/basic-grammar.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"Java核心 - 基础概念及语法"}],["meta",{"property":"og:description","content":"Java核心 - 基础概念及语法 注释 单行注释 多行注释 文档注释 小知识 注释仅在编写阶段可见，编译后注释会被编译器完全去除。 命名规范 局部变量命名：小驼峰命名法 全局变量命名：小驼峰命名法 常量命名：全部大写，蛇形命名法 方法命名：小驼峰命名法 类命名：大驼峰命名法 命名要求 不能以保留关键字为名称 不能以数字开头 不能以特殊字符开头 严格区分..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-22T04:33:38.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-03-22T04:33:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java核心 - 基础概念及语法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-22T04:33:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"运算符","slug":"运算符","link":"#运算符","children":[]},{"level":2,"title":"条件语句","slug":"条件语句","link":"#条件语句","children":[{"level":3,"title":"if语句","slug":"if语句","link":"#if语句","children":[]},{"level":3,"title":"switch语句","slug":"switch语句","link":"#switch语句","children":[]}]},{"level":2,"title":"循环语句","slug":"循环语句","link":"#循环语句","children":[{"level":3,"title":"for循环","slug":"for循环","link":"#for循环","children":[]},{"level":3,"title":"while循环","slug":"while循环","link":"#while循环","children":[]},{"level":3,"title":"do...while循环","slug":"do-while循环","link":"#do-while循环","children":[]}]}],"git":{"createdTime":1710497546000,"updatedTime":1711082018000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":3.31,"words":994},"filePathRelative":"java/core/basic-grammar.md","localizedDate":"2024年3月15日","autoDesc":true,"excerpt":"\\n<h2>注释</h2>\\n<ol>\\n<li>单行注释</li>\\n</ol>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 单行注释</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,p as data};