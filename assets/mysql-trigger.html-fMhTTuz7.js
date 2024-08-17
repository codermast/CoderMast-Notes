import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as t}from"./app-BGiMPO_O.js";const n={},e=t(`<h1 id="mysql进阶-触发器" tabindex="-1"><a class="header-anchor" href="#mysql进阶-触发器"><span>MySQL进阶 - 触发器</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>触发器是于表有关的数据库对象，指在insert、update、delete之前或者之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以与协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。</p><p>使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触发，不支持语句级触发。</p><div class="hint-container note"><p class="hint-container-title">举例</p><p>语句级触发：执行一次SQL，触发器会触发一次，无论影响多少行。<br> 行级触发：如一个SQL语句更新了3行数据，则触发器会触发三次。</p></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h2><table><thead><tr><th style="text-align:center;">触发器类型</th><th style="text-align:center;">NEW和OLD</th></tr></thead><tbody><tr><td style="text-align:center;">INSERT型触发器</td><td style="text-align:center;">NEW表示将要或者已经新增的数据</td></tr><tr><td style="text-align:center;">UPDATE型触发器</td><td style="text-align:center;">OLD表示修改之前的数据，NEW表示将要或已经修改后的数据</td></tr><tr><td style="text-align:center;">DELETE型触发器</td><td style="text-align:center;">OLD表示将要或者已经删除的数据</td></tr></tbody></table><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><ul><li>创建</li></ul><blockquote><p>MySQL目前只支持行级触发器</p></blockquote><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> trigger_name</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">BEFORE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AFTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> INSERT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DELETE</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tbl_name </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EACH </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ROW</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> -- 行级触发器</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    -- 触发器语句</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    trigger_stmt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">END</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">SHOW TRIGGERS;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>删除</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 如果没有指定schema_name，默认为当前数据库</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DROP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> [schema_name.]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">trigger_name;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><h3 id="插入触发器" tabindex="-1"><a class="header-anchor" href="#插入触发器"><span>插入触发器</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> user_insert_trigger</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AFTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> INSERT</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EACH </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ROW</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    -- user表中数据插入时，则向日志表中插入一条数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user_logs(id,operate_type,excute_sql) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;INSERT&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">concat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;SQL:INSERT INTO user(id,username,password) VALUE (&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">END</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新触发器" tabindex="-1"><a class="header-anchor" href="#更新触发器"><span>更新触发器</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> user_update_trigger</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AFTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> UPDATE</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EACH </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ROW</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    -- user表中数据更新时，则向日志表中插入一条数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user_logs(id,operate_type,excute_sql) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UPDATE&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">concat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;SQL:INSERT INTO user(id,username,password) VALUE (&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">END</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除触发器" tabindex="-1"><a class="header-anchor" href="#删除触发器"><span>删除触发器</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TRIGGER</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> user_delete_trigger</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AFTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DELETE</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FOR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EACH </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ROW</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    -- user表中数据删除时，则向日志表中插入一条数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> user_logs(id,operate_type,excute_sql) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;DELETE&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">concat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;SQL:INSERT INTO user(id,username,password) VALUE (&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">END</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">小知识</p><p>在触发器内所执行的SQL中，我们可以使用NEW和OLD两个关键字来调用执行后和执行前的数据。</p></div>`,23),l=[e];function h(k,p){return a(),i("div",null,l)}const A=s(n,[["render",h],["__file","mysql-trigger.html.vue"]]),g=JSON.parse('{"path":"/database/mysql/mysql-trigger.html","title":"MySQL进阶 - 触发器","lang":"zh-CN","frontmatter":{"order":18,"description":"MySQL进阶 - 触发器 介绍 触发器是于表有关的数据库对象，指在insert、update、delete之前或者之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以与协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。 使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/mysql/mysql-trigger.html"}],["meta",{"property":"og:site_name","content":"友人的编程指南"}],["meta",{"property":"og:title","content":"MySQL进阶 - 触发器"}],["meta",{"property":"og:description","content":"MySQL进阶 - 触发器 介绍 触发器是于表有关的数据库对象，指在insert、update、delete之前或者之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以与协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。 使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T13:14:10.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2023-06-13T13:14:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL进阶 - 触发器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-13T13:14:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"插入触发器","slug":"插入触发器","link":"#插入触发器","children":[]},{"level":3,"title":"更新触发器","slug":"更新触发器","link":"#更新触发器","children":[]},{"level":3,"title":"删除触发器","slug":"删除触发器","link":"#删除触发器","children":[]}]}],"git":{"createdTime":1681489050000,"updatedTime":1686662050000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"database/mysql/mysql-trigger.md","localizedDate":"2023年4月14日","autoDesc":true,"excerpt":"\\n<h2>介绍</h2>\\n<p>触发器是于表有关的数据库对象，指在insert、update、delete之前或者之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以与协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。</p>\\n<p>使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触发，不支持语句级触发。</p>\\n<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">举例</p>\\n<p>语句级触发：执行一次SQL，触发器会触发一次，无论影响多少行。<br>\\n行级触发：如一个SQL语句更新了3行数据，则触发器会触发三次。</p>\\n</div>"}');export{A as comp,g as data};
