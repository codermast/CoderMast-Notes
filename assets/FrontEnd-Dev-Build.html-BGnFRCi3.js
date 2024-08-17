import{_ as s}from"./2024-03-03-11-41-05-C9jI7ckA.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as i,a as e}from"./app-BGiMPO_O.js";const l="/assets/2024-03-03-12-33-06-YInP5l-1.png",p={},t=e('<h1 id="前端环境搭建" tabindex="-1"><a class="header-anchor" href="#前端环境搭建"><span>前端环境搭建</span></a></h1><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h2><div class="hint-container tip"><p class="hint-container-title">视频教程</p><p><a href="https://www.bilibili.com/video/BV1TP411v7v6/?p=5" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1TP411v7v6/?p=5</a></p></div><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>MacOs</span></a></h2><ol><li>前端资料下载</li></ol><div class="hint-container tip"><p class="hint-container-title">前端资料</p><p>下载地址：<a href="https://pan.baidu.com/s/1ga3Cy_CPANj7dTDLFni7mw?pwd=6cyn0" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1ga3Cy_CPANj7dTDLFni7mw?pwd=6cyn0</a><br> 提取码: 6cyn</p></div><p>点击上面的前端资料下载链接，即可下载。下载之后解压，解压完成以后的文件如下。</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>安装 Nginx 服务</li></ol><p>在 MacOs 上安装 Nginx 服务，主要使用 Homebrew 工具进行安装。</p><ul><li>安装 brew</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>使用 brew 安装 nginx</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>配置 Nginx</li></ol><ul><li>更改 nginx 配置文件</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/etc/nginx/nginx.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将其中的内容删除，然后替换为</p><details class="hint-container details"><summary>代码详情</summary><div class="language-conf line-numbers-mode" data-highlighter="shiki" data-ext="conf" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#user  nobody;</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#error_log  logs/error.log;</span></span>
<span class="line"><span>#error_log  logs/error.log  notice;</span></span>
<span class="line"><span>#error_log  logs/error.log  info;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #access_log  logs/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #keepalive_timeout  0;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	map $http_upgrade $connection_upgrade{</span></span>
<span class="line"><span>		default upgrade;</span></span>
<span class="line"><span>		&#39;&#39; close;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	upstream webservers{</span></span>
<span class="line"><span>	  server 127.0.0.1:8080 weight=90 ;</span></span>
<span class="line"><span>	  #server 127.0.0.1:8088 weight=10 ;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root   html/sky;</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 反向代理,处理管理端发送的请求</span></span>
<span class="line"><span>        location /api/ {</span></span>
<span class="line"><span>			proxy_pass   http://localhost:8080/admin/;</span></span>
<span class="line"><span>            #proxy_pass   http://webservers/admin/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		# 反向代理,处理用户端发送的请求</span></span>
<span class="line"><span>        location /user/ {</span></span>
<span class="line"><span>            proxy_pass   http://webservers/user/;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		# WebSocket</span></span>
<span class="line"><span>		location /ws/ {</span></span>
<span class="line"><span>            proxy_pass   http://webservers/ws/;</span></span>
<span class="line"><span>			proxy_http_version 1.1;</span></span>
<span class="line"><span>			proxy_read_timeout 3600s;</span></span>
<span class="line"><span>			proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>			proxy_set_header Connection &quot;$connection_upgrade&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>将 sky 文件夹移动至 <code>/usr/local/var/www</code> 目录下</li></ul><p>可以使用如下指令打开对应的文件夹，然后拖动即可。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">open</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/var/www</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>启动 Nginx</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> services</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>访问项目</li></ol><p>访问 localhost:80 即可，默认为 80 端口，也可以直接访问 localhost</p><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27),r=[t];function d(c,o){return i(),a("div",null,r)}const u=n(p,[["render",d],["__file","FrontEnd-Dev-Build.html.vue"]]),b=JSON.parse('{"path":"/project/sky-take-out/FrontEnd-Dev-Build.html","title":"前端环境搭建","lang":"zh-CN","frontmatter":{"description":"前端环境搭建 Windows 视频教程 https://www.bilibili.com/video/BV1TP411v7v6/?p=5 MacOs 前端资料下载 前端资料 下载地址：https://pan.baidu.com/s/1ga3Cy_CPANj7dTDLFni7mw?pwd=6cyn0 提取码: 6cyn 点击上面的前端资料下载链接，即可下...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/project/sky-take-out/FrontEnd-Dev-Build.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"前端环境搭建"}],["meta",{"property":"og:description","content":"前端环境搭建 Windows 视频教程 https://www.bilibili.com/video/BV1TP411v7v6/?p=5 MacOs 前端资料下载 前端资料 下载地址：https://pan.baidu.com/s/1ga3Cy_CPANj7dTDLFni7mw?pwd=6cyn0 提取码: 6cyn 点击上面的前端资料下载链接，即可下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T09:10:12.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-03-03T09:10:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端环境搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T09:10:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":2,"title":"MacOs","slug":"macos","link":"#macos","children":[]}],"git":{"createdTime":1709441781000,"updatedTime":1709457012000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"project/sky-take-out/FrontEnd-Dev-Build.md","localizedDate":"2024年3月3日","autoDesc":true,"excerpt":"\\n<h2>Windows</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">视频教程</p>\\n<p><a href=\\"https://www.bilibili.com/video/BV1TP411v7v6/?p=5\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.bilibili.com/video/BV1TP411v7v6/?p=5</a></p>\\n</div>\\n<h2>MacOs</h2>\\n<ol>\\n<li>前端资料下载</li>\\n</ol>"}');export{u as comp,b as data};
