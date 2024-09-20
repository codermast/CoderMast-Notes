import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as t}from"./app-E-nNMN4m.js";const n="/assets/2024-01-18-23-56-11-DlyJ0VYs.png",l="/assets/2024-01-18-23-57-39-DknyH_Xw.png",r="/assets/2024-01-19-00-01-10-Daj30vDv.png",h="/assets/2024-01-19-00-06-45-CqbwGExI.png",d="/assets/2024-01-19-00-15-23-Dkt45gHp.png",k="/assets/2024-01-19-00-15-28-COubemnw.png",o={};function p(c,i){return t(),e("div",null,i[0]||(i[0]=[a('<h1 id="docker-容器互联" tabindex="-1"><a class="header-anchor" href="#docker-容器互联"><span>Docker - 容器互联</span></a></h1><p>在上一个章节中我们学习了 Docker 容器的端口映射，可以将 Docker 容器和本地以及网络中的端口进行连接起来。</p><p>但端口映射并不是唯一把 Docker 连接到另一个容器的方法，Docker 有一个连接系统允许将多个容器连接在一起，共享连接信息。</p><h2 id="容器命名" tabindex="-1"><a class="header-anchor" href="#容器命名"><span>容器命名</span></a></h2><p>在创建一个容器的时候，Docker 会自动为其进行命名，也可以使用 <code>--name</code> 来自定义 Docker 容器的名称。</p><ul><li>创建时自定义名称</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> training/webapp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>创建后修改名称</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rename</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> focused_boyd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中 <code>focused_boyd</code> 为原容器名，<code>codermast1</code> 为要自定义的名称。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络"><span>创建网络</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bridge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast-test-net</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>-d：参数指定 Docker 网络类型，有 bridge、overlay。</li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="连接容器" tabindex="-1"><a class="header-anchor" href="#连接容器"><span>连接容器</span></a></h2><ol><li>创建一个容器并连接到该网络</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -itd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast_test_net1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast-test-net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu:20.04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>创建另一个容器并连接到该网络</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -itd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast_test_net2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast-test-net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu:20.04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>验证该网络下的两个容器建立了联系</li></ol><p>使用 ping 指令检测，在执行之前请确保安装了该指令工具，如果未安装，执行下列指令安装即可。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iputils-ping</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样，<code>codermast_test_net1</code> 容器和 <code>codermast_test_net2</code> 容器建立了互联关系。</p><p>如果有多个容器之间需要互相连接，推荐使用 <code>Docker Compose</code>，在后续的章节中会进行详细说明，这里不再赘述。</p>',29)]))}const u=s(o,[["render",p],["__file","docker-container-connection.html.vue"]]),y=JSON.parse('{"path":"/dev-tools/docker/docker-container-connection.html","title":"Docker - 容器互联","lang":"zh-CN","frontmatter":{"order":7,"description":"Docker - 容器互联 在上一个章节中我们学习了 Docker 容器的端口映射，可以将 Docker 容器和本地以及网络中的端口进行连接起来。 但端口映射并不是唯一把 Docker 连接到另一个容器的方法，Docker 有一个连接系统允许将多个容器连接在一起，共享连接信息。 容器命名 在创建一个容器的时候，Docker 会自动为其进行命名，也可以使...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/dev-tools/docker/docker-container-connection.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"Docker - 容器互联"}],["meta",{"property":"og:description","content":"Docker - 容器互联 在上一个章节中我们学习了 Docker 容器的端口映射，可以将 Docker 容器和本地以及网络中的端口进行连接起来。 但端口映射并不是唯一把 Docker 连接到另一个容器的方法，Docker 有一个连接系统允许将多个容器连接在一起，共享连接信息。 容器命名 在创建一个容器的时候，Docker 会自动为其进行命名，也可以使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-18T16:19:20.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-01-18T16:19:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker - 容器互联\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-18T16:19:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"容器命名","slug":"容器命名","link":"#容器命名","children":[]},{"level":2,"title":"创建网络","slug":"创建网络","link":"#创建网络","children":[]},{"level":2,"title":"连接容器","slug":"连接容器","link":"#连接容器","children":[]}],"git":{"createdTime":1705593159000,"updatedTime":1705594760000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"dev-tools/docker/docker-container-connection.md","localizedDate":"2024年1月18日","autoDesc":true,"excerpt":"\\n<p>在上一个章节中我们学习了 Docker 容器的端口映射，可以将 Docker 容器和本地以及网络中的端口进行连接起来。</p>\\n<p>但端口映射并不是唯一把 Docker 连接到另一个容器的方法，Docker 有一个连接系统允许将多个容器连接在一起，共享连接信息。</p>\\n<h2>容器命名</h2>\\n<p>在创建一个容器的时候，Docker 会自动为其进行命名，也可以使用 <code>--name</code> 来自定义 Docker 容器的名称。</p>\\n<ul>\\n<li>创建时自定义名称</li>\\n</ul>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> run</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -d</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -P</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --name</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> codermast</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> training/webapp</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> python</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> app.py</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{u as comp,y as data};
