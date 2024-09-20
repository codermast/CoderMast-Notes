import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as s,o as a}from"./app-E-nNMN4m.js";const r={};function n(o,e){return a(),t("div",null,e[0]||(e[0]=[s(`<h1 id="docker-仓库管理" tabindex="-1"><a class="header-anchor" href="#docker-仓库管理"><span>Docker - 仓库管理</span></a></h1><p>仓库是集中存放资源的地方，代码仓库是存放代码的，那么Docker 中的仓库就是存放 Docker 镜像的。</p><p>和 GitHub 类似，Docker Hub 是 Docker 官方维护的一个免费的公共仓库，不但可以下载需要的镜像，而且还可以上传自己的镜像。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本文主要以 Docker Hub 为例子进行说明，其他仓库同理。</p></div><h2 id="登录和退出" tabindex="-1"><a class="header-anchor" href="#登录和退出"><span>登录和退出</span></a></h2><p>在需要使用 Docker Hub 中管理自己的镜像时，需要先进行登录。</p><ul><li>登录</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> login</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>退出登录</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="推送镜像" tabindex="-1"><a class="header-anchor" href="#推送镜像"><span>推送镜像</span></a></h2><p>用户登录后，可以通过 docker push 命令将自己的镜像推送到 Docker Hub。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu:20.04</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast/ubuntu:20.04</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codermast/ubuntu:20.04</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>codermast 改为你的 username 便于管理</p>`,14)]))}const d=i(r,[["render",n],["__file","docker-warehouse.html.vue"]]),h=JSON.parse('{"path":"/dev-tools/docker/docker-warehouse.html","title":"Docker - 仓库管理","lang":"zh-CN","frontmatter":{"order":8,"description":"Docker - 仓库管理 仓库是集中存放资源的地方，代码仓库是存放代码的，那么Docker 中的仓库就是存放 Docker 镜像的。 和 GitHub 类似，Docker Hub 是 Docker 官方维护的一个免费的公共仓库，不但可以下载需要的镜像，而且还可以上传自己的镜像。 提示 本文主要以 Docker Hub 为例子进行说明，其他仓库同理。 ...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/dev-tools/docker/docker-warehouse.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"Docker - 仓库管理"}],["meta",{"property":"og:description","content":"Docker - 仓库管理 仓库是集中存放资源的地方，代码仓库是存放代码的，那么Docker 中的仓库就是存放 Docker 镜像的。 和 GitHub 类似，Docker Hub 是 Docker 官方维护的一个免费的公共仓库，不但可以下载需要的镜像，而且还可以上传自己的镜像。 提示 本文主要以 Docker Hub 为例子进行说明，其他仓库同理。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-18T16:29:41.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-01-18T16:29:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker - 仓库管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-18T16:29:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"登录和退出","slug":"登录和退出","link":"#登录和退出","children":[]},{"level":2,"title":"推送镜像","slug":"推送镜像","link":"#推送镜像","children":[]}],"git":{"createdTime":1705595381000,"updatedTime":1705595381000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"dev-tools/docker/docker-warehouse.md","localizedDate":"2024年1月18日","autoDesc":true,"excerpt":"\\n<p>仓库是集中存放资源的地方，代码仓库是存放代码的，那么Docker 中的仓库就是存放 Docker 镜像的。</p>\\n<p>和 GitHub 类似，Docker Hub 是 Docker 官方维护的一个免费的公共仓库，不但可以下载需要的镜像，而且还可以上传自己的镜像。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>本文主要以 Docker Hub 为例子进行说明，其他仓库同理。</p>\\n</div>\\n<h2>登录和退出</h2>\\n<p>在需要使用 Docker Hub 中管理自己的镜像时，需要先进行登录。</p>"}');export{d as comp,h as data};
