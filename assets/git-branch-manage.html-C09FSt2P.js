import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,a}from"./app-BrwDqZ3V.js";const t="/assets/2024-04-04-13-22-51-DSxYhfjs.png",n="/assets/2024-04-04-23-16-20-CJd1B56S.png",l="/assets/2024-04-04-23-24-36-2aB_RJTG.png",h={},d=a('<h1 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理"><span>Git 分支管理</span></a></h1><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在 Git 中，分支是指向提交对象（commits）的可变指针。它们是一系列提交的引用，其中的每个提交都包含了一组文件的状态以及指向其父提交的指针。主要的分支通常是 master 或 main，其他分支可以基于主分支或其他分支创建。</p><p>几乎每一种版本控制系统都以某种形式支持分支，一个分支代表一条独立的开发线。使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。</p><p>Git 分支实际上是指向更改快照的指针。</p><h2 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支"><span>创建分支</span></a></h2><p>使用该指令可创建一个名为 branchname 的分支</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branchnam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>创建分支时，一定要先有一个分支，这个分支一般在 git init 时已经帮我们创建好了，一般名称为 <code>main</code> 或 <code>master</code>，创建的分支内容和当前所在的分支内容相同，因为是基于当前分支的分支，故一定和当前分支一致。</p></div><h2 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支"><span>切换分支</span></a></h2><ul><li>切换到已有分支</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branchnam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>创建并切换分支</li></ul><p>一般情况下切换分支时需要先创建分支，然后再切换，但是为了提高效率，可以使用如下指令，一步增加并切换分支。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">new-branch-nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>切换到前一个分支</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当你切换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目录的内容，所以多个分支不需要多个目录。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>但是，需要注意的是，如果在切换分支之前对当前分支的工作目录做了一些修改，但没有提交这些更改，那么这些更改将会被暂存或者丢弃，而不会被应用到切换后的目标分支。只有在提交后，这些更改才会成为该分支的一部分，然后在切换到其他分支时，Git 才会自动更新工作目录以匹配目标分支的状态。</p><p>总而言之，就是只会恢复到最后一次提交时候的工作目录状态。</p></div><h2 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支"><span>删除分支</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branchnam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该指令的功能是删除名为 <code>branchname</code> 的分支。</p><h2 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支"><span>查看分支</span></a></h2><ul><li>查看本地分支</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看所有分支</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在未加任何参数的时候，默认查看所有的分支。 带 <code>*</code> 的分支是当前分支。</p><h2 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支"><span>合并分支</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。</p><div class="hint-container info"><p class="hint-container-title">分支合并说明</p><p>对于分支合并，举一个简单的例子。目前一个项目内有 <code>main</code> 和 <code>dev</code> 两个分支，现在需要将 <code>dev</code> 分支合并到 <code>main</code> 分支，即将 <code>dev</code> 中修改和添加的功能加入到 <code>main</code> 分支，这时需要先切换到 <code>main</code> 分支，然后执行 <code>git merge dev</code> 指令。</p></div><h2 id="合并冲突" tabindex="-1"><a class="header-anchor" href="#合并冲突"><span>合并冲突</span></a></h2><div class="hint-container caution"><p class="hint-container-title">为什么会发生冲突？</p><p>当两个分支对同一个文件进行操作，当这两个分支合并的时候，Git 陷入了两难境地，并不知道以哪个分支为准，于是就发生了冲突。</p></div><p>分支的合并并不是简单的文件添加、移除等操作，其 Git 也会合并修改。</p><h3 id="冲突发生" tabindex="-1"><a class="header-anchor" href="#冲突发生"><span>冲突发生</span></a></h3><p>当在合并分支时，提示如下信息，即发生了合并冲突</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Auto-merging hello.txt</span></span>
<span class="line"><span>CONFLICT (content): Merge conflict in hello.txt</span></span>
<span class="line"><span>Automatic merge failed; fix conflicts and then commit the result.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时信息告诉我们在合并 hello.txt 文件时发生了冲突，处理冲突以后提交结果，这时处于合并的中间态。</p><div class="hint-container tip"><p class="hint-container-title">合并中间态</p><p>即能够成功合并的文件全部合并，发生冲突的文件产生冲突。</p><p>与事务有所区别，事务是一旦发生错误，则全部回滚。而合并中间态是尽可能的进行合并，合并不了的抛出。</p></div><h3 id="冲突查看" tabindex="-1"><a class="header-anchor" href="#冲突查看"><span>冲突查看</span></a></h3><p>当冲突发生后可以使用 <code>git status</code> 来查看冲突信息</p><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>“You have unmerged paths”：我们现在正处于合并的中间状态，有一些没有合并的文件；</li><li>“Changes to be committed deleted: test.txt”：要提交的更改已经被删除</li><li>“Unmerged paths”：未合并的路径，可以看到 hello.txt 没有被合并，因为两个分支都修改了它</li></ul><p>现在我们查看冲突，用编辑器打开没有被合并的文件，查看其内容会发现（可以使用vim查看，也可以使用 <code>cat &lt;filename&gt;</code>）</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>里面多了三行我们看不懂的记号：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></span>
<span class="line"><span>=======</span></span>
<span class="line"><span>&gt;&gt;&gt;&gt;&gt;&gt;&gt; dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD和=======之间的内容：是 main 分支修改的内容（准确来说是HEAD指针指向的分支修改的内容，一般是指当前使用的分支）；</p></li><li><p>=======和&gt;&gt;&gt;&gt;&gt;&gt;&gt; dev 之间的内容：是 dev 分支修改的内容；</p></li><li><p>分割线之外的内容：是两个分支都没有改动的内容。</p></li></ul><h3 id="冲突解决" tabindex="-1"><a class="header-anchor" href="#冲突解决"><span>冲突解决</span></a></h3><p>解决冲突的本质其实就是 Git 把这个两难问题的决定权交给我们，需要我们对冲突文件进行操作，主要有以下步骤：</p><ol><li>编辑冲突文件，决定要保留的内容。</li><li><code>git add</code> 将冲突文件添加到暂存区</li><li><code>git commit</code> 提交</li></ol><p>这里我们编辑后的内容，Git 会原封不动的提交，因为 Git 认为我们已经成功的解决了冲突。一般情况下都会删除这三条线，保留我们所需要的文本即可。</p><p>另外，常常遇到当冲突发生后，其实是我们自己没有做好控制，这时需要撤回合并，即冲突发生后退出合并的中间状态。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --abort</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该指令会回到分支合并之前的状态，即成功合并的部分文件也会进行回退。</p>`,56),r=[d];function p(c,o){return s(),e("div",null,r)}const m=i(h,[["render",p],["__file","git-branch-manage.html.vue"]]),b=JSON.parse('{"path":"/dev-tools/git/git-branch-manage.html","title":"Git 分支管理","lang":"zh-CN","frontmatter":{"order":5,"description":"Git 分支管理 在 Git 中，分支是指向提交对象（commits）的可变指针。它们是一系列提交的引用，其中的每个提交都包含了一组文件的状态以及指向其父提交的指针。主要的分支通常是 master 或 main，其他分支可以基于主分支或其他分支创建。 几乎每一种版本控制系统都以某种形式支持分支，一个分支代表一条独立的开发线。使用分支意味着你可以从开发主...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/dev-tools/git/git-branch-manage.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"Git 分支管理"}],["meta",{"property":"og:description","content":"Git 分支管理 在 Git 中，分支是指向提交对象（commits）的可变指针。它们是一系列提交的引用，其中的每个提交都包含了一组文件的状态以及指向其父提交的指针。主要的分支通常是 master 或 main，其他分支可以基于主分支或其他分支创建。 几乎每一种版本控制系统都以某种形式支持分支，一个分支代表一条独立的开发线。使用分支意味着你可以从开发主..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-04T15:43:40.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-04-04T15:43:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 分支管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-04T15:43:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"创建分支","slug":"创建分支","link":"#创建分支","children":[]},{"level":2,"title":"切换分支","slug":"切换分支","link":"#切换分支","children":[]},{"level":2,"title":"删除分支","slug":"删除分支","link":"#删除分支","children":[]},{"level":2,"title":"查看分支","slug":"查看分支","link":"#查看分支","children":[]},{"level":2,"title":"合并分支","slug":"合并分支","link":"#合并分支","children":[]},{"level":2,"title":"合并冲突","slug":"合并冲突","link":"#合并冲突","children":[{"level":3,"title":"冲突发生","slug":"冲突发生","link":"#冲突发生","children":[]},{"level":3,"title":"冲突查看","slug":"冲突查看","link":"#冲突查看","children":[]},{"level":3,"title":"冲突解决","slug":"冲突解决","link":"#冲突解决","children":[]}]}],"git":{"createdTime":1712245420000,"updatedTime":1712245420000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":5.07,"words":1522},"filePathRelative":"dev-tools/git/git-branch-manage.md","localizedDate":"2024年4月4日","autoDesc":true,"excerpt":"\\n<figure><figcaption></figcaption></figure>\\n<p>在 Git 中，分支是指向提交对象（commits）的可变指针。它们是一系列提交的引用，其中的每个提交都包含了一组文件的状态以及指向其父提交的指针。主要的分支通常是 master 或 main，其他分支可以基于主分支或其他分支创建。</p>\\n<p>几乎每一种版本控制系统都以某种形式支持分支，一个分支代表一条独立的开发线。使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。</p>\\n<p>Git 分支实际上是指向更改快照的指针。</p>\\n<h2>创建分支</h2>\\n<p>使用该指令可创建一个名为 branchname 的分支</p>"}');export{m as comp,b as data};