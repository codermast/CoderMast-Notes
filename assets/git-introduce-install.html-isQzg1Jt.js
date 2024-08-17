import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,a as l}from"./app-BGiMPO_O.js";const o="/assets/2024-04-03-11-39-45-OMcMS_1f.png",n={},a=l('<h1 id="git-介绍和安装" tabindex="-1"><a class="header-anchor" href="#git-介绍和安装"><span>Git 介绍和安装</span></a></h1><h2 id="git介绍" tabindex="-1"><a class="header-anchor" href="#git介绍"><span>Git介绍</span></a></h2><p>Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</p><p>Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</p><p>官网地址为：<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">https://git-scm.com/</a></p><p><strong>Git特点</strong></p><ul><li><p>优点：</p><ul><li>适合分布式开发，强调个体；</li><li>公共服务器压力和数据量都不会太大；</li><li>速度快、灵活；</li><li>任意两个开发者之间可以很容易的解决冲突；</li><li>离线工作。</li></ul></li><li><p>缺点：</p><ul><li>代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息；</li><li>权限控制不友好；如果需要对开发者限制各种权限的建议使用SVN。</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">SVN和Git都是版本控制系统，但它们有以下区别</p><ul><li>分布式 vs 集中式：Git 是一种分布式版本控制系统，而 SVN 是一种集中式版本控制系统。在 Git 中，每个开发者都拥有本地代码库的完整副本，可以离线工作并在不同的工作流程之间自由转换。而在 SVN 中，所有开发者共享同一个中央代码库，并且需要有网络连接才能进行版本控制操作。</li><li>分支管理：Git 在分支管理方面比 SVN 更加强大和灵活。Git 的分支非常轻量级，创建和合并分支也很容易，因此可以轻松实现多人协作和并行开发。而在 SVN 中，分支比较重量级（即创建和合并分支需要花费相对更多的时间和资源），因此往往只用于重要的版本分支。</li><li>版本号：Git 使用 SHA-1 哈希值来标识每个提交，而 SVN 采用递增的数字版本号来标识每个提交。SHA-1 哈希值保证了每个提交的唯一性，而递增版本号则简化了版本控制过程。</li><li>整体性：由于 SVN 是一种集中式版本控制系统，因此所有数据都存储在中央代码库中。如果中央代码库损坏或丢失，可能会导致数据丢失或无法恢复。而 Git 是一种分布式版本控制系统，每个开发者都拥有完整的代码库副本，保证了代码的整体性和可靠性。</li><li>性能：Git 比 SVN 更快，特别是在处理大型仓库、分支合并以及比较代码差异时。Git 使用基于内容的哈希算法来检测文件是否修改，而 SVN 则需要检查文件的元数据（如时间戳和文件大小）来确定是否修改。</li></ul></div><h2 id="git安装" tabindex="-1"><a class="header-anchor" href="#git安装"><span>Git安装</span></a></h2><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>MacOS</span></a></h3><ul><li><p>Homebrew安装：执行 <code>brew install git</code> 即可开始安装。</p></li><li><p>MacPorts安装【MacOS官方维护】：执行 <code>sudo port install git</code> 即可安装</p></li><li><p>下载安装：下载 <a href="https://sourceforge.net/projects/git-osx-installer/" target="_blank" rel="noopener noreferrer">https://sourceforge.net/projects/git-osx-installer/</a> 运行安装程序后，点击下一步即可安装。</p></li></ul><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><ul><li><p>Debian/Ubuntu：执行 <code>apt-get install git</code> 即可安装</p></li><li><p>Arch Linux：执行 <code>pacman -S git</code> 即可安装</p></li></ul><h2 id="windows安装" tabindex="-1"><a class="header-anchor" href="#windows安装"><span>Windows安装</span></a></h2><ul><li>官方安装：</li></ul><ol><li>访问官方下载页面</li></ol><p><a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">https://git-scm.com/download/win</a></p><ol start="2"><li>选择自己电脑适配的版本</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li><p>打开安装程序</p></li><li><p>一直下一步即可完成安装</p></li></ol><div class="hint-container tip"><p class="hint-container-title">其他系统可参考官方下载文档</p><p><a href="https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git" target="_blank" rel="noopener noreferrer">https://git-scm.com/book/zh/v2/起步-安装-Git</a></p></div>',21),r=[a];function s(c,p){return e(),i("div",null,r)}const m=t(n,[["render",s],["__file","git-introduce-install.html.vue"]]),g=JSON.parse('{"path":"/dev-tools/git/git-introduce-install.html","title":"Git 介绍和安装","lang":"zh-CN","frontmatter":{"order":1,"description":"Git 介绍和安装 Git介绍 Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。 Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。 官网地址为：https://git-...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/dev-tools/git/git-introduce-install.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"Git 介绍和安装"}],["meta",{"property":"og:description","content":"Git 介绍和安装 Git介绍 Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。 Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。 官网地址为：https://git-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-04T17:25:48.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-04-04T17:25:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 介绍和安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-04T17:25:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"Git介绍","slug":"git介绍","link":"#git介绍","children":[]},{"level":2,"title":"Git安装","slug":"git安装","link":"#git安装","children":[{"level":3,"title":"MacOS","slug":"macos","link":"#macos","children":[]},{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]}]},{"level":2,"title":"Windows安装","slug":"windows安装","link":"#windows安装","children":[]}],"git":{"createdTime":1712141964000,"updatedTime":1712251548000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":3.05,"words":914},"filePathRelative":"dev-tools/git/git-introduce-install.md","localizedDate":"2024年4月3日","autoDesc":true,"excerpt":"\\n<h2>Git介绍</h2>\\n<p>Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</p>\\n<p>Git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</p>\\n<p>官网地址为：<a href=\\"https://git-scm.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://git-scm.com/</a></p>\\n<p><strong>Git特点</strong></p>"}');export{m as comp,g as data};
