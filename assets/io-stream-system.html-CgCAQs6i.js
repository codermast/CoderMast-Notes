import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o,c as l,b as e,e as t,d as s,w as r,a as c}from"./app-C0jj9iru.js";const p="/assets/2024-04-12-14-38-03-HPIShNIi.png",d="/assets/2024-04-12-14-39-41-D6pQNNiE.png",m="/assets/2024-04-19-11-12-30-CEE7lTO9.png",g="/assets/2024-04-19-11-14-55-Ch9qfp5Q.png",h="/assets/2024-04-19-11-15-09-D1S0ZLbs.png",u="/assets/2024-04-19-11-15-27-Dp0AE6Dl.png",f="/assets/2024-04-19-11-15-33-D57y48lG.png",_={},I=e("h1",{id:"java-io-io流概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-io-io流概述"},[e("span",null,"Java IO - IO流概述")])],-1),v={class:"hint-container warning"},O=e("p",{class:"hint-container-title"},"为什么学习了 File 还要学习 IO 流呢？",-1),y=e("p",null,"这听起来似乎很矛盾，只能对文件本身进行操作，为什么又不能对里面的内容进行操作呢？",-1),x=e("p",null,"这里的意思是指，你只能对该文件的一些基本属性进行操作，例如文件名、文件大小、文件格式等等，而不能对文件的内容进行操作。想要对文件内容进行更改，就得通过 IO 流来进行。",-1),b=c('<h2 id="什么是-io-流" tabindex="-1"><a class="header-anchor" href="#什么是-io-流"><span>什么是 IO 流？</span></a></h2><p>IO 流，即输入/输出流（Input/Output Stream），是计算机程序中用于处理输入和输出操作的抽象概念。在 Java 编程语言中，IO 流提供了一种灵活且强大的方式来读取和写入数据。</p><p>这些流可以代表多种不同类型的数据源和目标，例如文件、网络连接、内存缓冲区等。通过IO流，Java 程序可以读取或写入数据，实现与外部系统的通信和数据交换。</p><p>在 Java 中输入和输出是以程序为主体，程序从文件中读数据时为输入，程序向文件中写数据时为输出。</p><h2 id="io流的分类" tabindex="-1"><a class="header-anchor" href="#io流的分类"><span>IO流的分类</span></a></h2><ul><li>以流的方向分类：输入流、输出流</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>以操作的文件类型分类：字节流、字符流</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>字节流能处理任意格式的文件，而字符流只能处理纯文本文件。纯文本文件是指能够直接通过记事本打开的文本文件。</p><p>txt、md等格式的文件，是纯文本文件，而 word、xls 等格式的文件就不是纯文本文件。只有纯文本文件才能通过字符流处理。</p><div class="hint-container warning"><p class="hint-container-title">既然字节流能处理任何格式的文件，那么字符流还有存在的意义吗？</p><p>答案很显然，当然是有用的，字符流在处理的时候每次以字符大小为单位进行读取，在处理纯文本文件时，字符流的处理效率比字节流的效率高很多，故其存在是有意义的。</p><p>这里再多说一点，仅做了解即可。在计算机中存储自然字符，其实是根据一张字符映射表来存储对应的二进制数，起初只考虑的英文字母、数字和一些标点符号，所以每个字符需要的容量比较小，但是随着不断发展，需要加入的字符数越来越多，导致原来的一个字符的空间，存不下这么多的字符，就需要扩大每个字符的字节数，故编码方式也会有变化，也就是字符映射表会有变化，故字节数也会有变化，故在字符读取时就需要根据不同的编码方式来读，字符流一次能读一个字符，封装了底层。</p><ul><li>「GBK」 编码中，中文字符占 2 个字节，英文字符占 1 个字节；</li><li>「UTF-8」 编码中，中文字符占 3 个字节，英文字符占 1 个字节；</li><li>「UTF-16be」 编码中，中文字符和英文字符都占 2 个字节。</li></ul></div><h2 id="io流体系" tabindex="-1"><a class="header-anchor" href="#io流体系"><span>IO流体系</span></a></h2><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="字节流" tabindex="-1"><a class="header-anchor" href="#字节流"><span>字节流</span></a></h3><ul><li>字节输入流</li></ul><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>字节输出流</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="字符流" tabindex="-1"><a class="header-anchor" href="#字符流"><span>字符流</span></a></h3><ul><li>字符输入流</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>字符输出流</li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',24);function F(w,J){const i=n("RouteLink");return o(),l("div",null,[I,e("div",v,[O,e("p",null,[t("在上一节「"),s(i,{to:"/java/io/file.html"},{default:r(()=>[t("Java IO - File 类")]),_:1}),t("」中，我们了解了 File 类的常用 API，以及演示了如何去使用这些 API，但是 File 对象只能表示系统中的文件或者文件夹的路径，只能对文件本身进行操作，不能对里面的内容进行操作。")]),y,x]),b])}const z=a(_,[["render",F],["__file","io-stream-system.html.vue"]]),A=JSON.parse('{"path":"/java/io/io-stream-system.html","title":"Java IO - IO流概述","lang":"zh-CN","frontmatter":{"order":2,"description":"Java IO - IO流概述 为什么学习了 File 还要学习 IO 流呢？ 在上一节「」中，我们了解了 File 类的常用 API，以及演示了如何去使用这些 API，但是 File 对象只能表示系统中的文件或者文件夹的路径，只能对文件本身进行操作，不能对里面的内容进行操作。 这听起来似乎很矛盾，只能对文件本身进行操作，为什么又不能对里面的内容进行操...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/java/io/io-stream-system.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Java IO - IO流概述"}],["meta",{"property":"og:description","content":"Java IO - IO流概述 为什么学习了 File 还要学习 IO 流呢？ 在上一节「」中，我们了解了 File 类的常用 API，以及演示了如何去使用这些 API，但是 File 对象只能表示系统中的文件或者文件夹的路径，只能对文件本身进行操作，不能对里面的内容进行操作。 这听起来似乎很矛盾，只能对文件本身进行操作，为什么又不能对里面的内容进行操..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T12:17:49.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-04-20T12:17:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java IO - IO流概述\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-20T12:17:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是 IO 流？","slug":"什么是-io-流","link":"#什么是-io-流","children":[]},{"level":2,"title":"IO流的分类","slug":"io流的分类","link":"#io流的分类","children":[]},{"level":2,"title":"IO流体系","slug":"io流体系","link":"#io流体系","children":[{"level":3,"title":"字节流","slug":"字节流","link":"#字节流","children":[]},{"level":3,"title":"字符流","slug":"字符流","link":"#字符流","children":[]}]}],"git":{"createdTime":1713494812000,"updatedTime":1713615469000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":3.23,"words":969},"filePathRelative":"java/io/io-stream-system.md","localizedDate":"2024年4月19日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">为什么学习了 File 还要学习 IO 流呢？</p>\\n<p>在上一节「<a href=\\"/java/io/file.html\\" target=\\"_blank\\">Java IO - File 类</a>」中，我们了解了 File 类的常用 API，以及演示了如何去使用这些 API，但是 File 对象只能表示系统中的文件或者文件夹的路径，只能对文件本身进行操作，不能对里面的内容进行操作。</p>\\n<p>这听起来似乎很矛盾，只能对文件本身进行操作，为什么又不能对里面的内容进行操作呢？</p>\\n<p>这里的意思是指，你只能对该文件的一些基本属性进行操作，例如文件名、文件大小、文件格式等等，而不能对文件的内容进行操作。想要对文件内容进行更改，就得通过 IO 流来进行。</p>\\n</div>"}');export{z as comp,A as data};