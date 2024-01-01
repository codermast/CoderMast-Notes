export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$6/0FzDPy8HETLAKbvHzXL.0BXOdBvy44pdNiM8l2pR/pk.RYbVflG\"]}},\"headerDepth\":2,\"footer\":\"<a href=\\\"https://beian.miit.gov.cn/\\\" rel=\\\"nofollow\\\">陕ICP备20010345号-5</a>\",\"displayFooter\":true,\"author\":{\"name\":\"CoderMast\",\"url\":\"https://www.codermast.com\",\"email\":\"codermast@163.com\"},\"logo\":\"/logo.svg\",\"repo\":\"https://github.com/codermast/codermast-notes\",\"docsDir\":\"src\",\"docsBranch\":\"main\",\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"文章\",\"articleList\":\"文章列表\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间轴\",\"timelineTitle\":\"昨日不在\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"收藏\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"首页\",\"icon\":\"iconfont icon-home\",\"link\":\"/\"},{\"text\":\"Java\",\"icon\":\"iconfont icon-java\",\"prefix\":\"/java\",\"children\":[{\"text\":\"基础知识\",\"link\":\"/base\"},{\"text\":\"集合框架\",\"link\":\"/collection\"},{\"text\":\"面向对象\",\"link\":\"/oop\"},{\"text\":\"线程并发\",\"link\":\"/thread\"},{\"text\":\"JVM虚拟机\",\"link\":\"/jvm\"}]},{\"text\":\"Spring\",\"icon\":\"iconfont icon-light\",\"prefix\":\"/spring-series\",\"children\":[{\"text\":\"Spring\",\"link\":\"/spring\"},{\"text\":\"Spring Boot\",\"link\":\"/springboot\"},{\"text\":\"Spring MVC\",\"link\":\"/springmvc\"},{\"text\":\"Spring Cloud\",\"link\":\"/springcloud\"}]},{\"text\":\"数据库\",\"icon\":\"iconfont icon-mysql\",\"prefix\":\"/database\",\"children\":[{\"text\":\"SQL数据库\",\"children\":[{\"text\":\"MySQL\",\"link\":\"/mysql\"}]},{\"text\":\"NoSQL数据库\",\"children\":[{\"text\":\"Redis\",\"link\":\"/redis\"},{\"text\":\"MongoDB\",\"link\":\"/mongodb\"},{\"text\":\"ElaticSearch\",\"link\":\"/elaticsearch\"}]}]},{\"text\":\"计算机基础\",\"icon\":\"iconfont icon-computer\",\"prefix\":\"/computer\",\"children\":[{\"text\":\"数据结构\",\"link\":\"/ds\"},{\"text\":\"组成原理\",\"link\":\"/co\"},{\"text\":\"操作系统\",\"link\":\"/os\"},{\"text\":\"计算机网络\",\"link\":\"/cn\"}]},{\"text\":\"前端\",\"icon\":\"iconfont icon-mysql\",\"prefix\":\"/front\",\"children\":[{\"text\":\"前端基础\",\"children\":[{\"text\":\"HTML\",\"link\":\"/html\"},{\"text\":\"CSS\",\"link\":\"/css\"},{\"text\":\"JavaScript\",\"link\":\"/js\"}]},{\"text\":\"前端框架\",\"prefix\":\"/frame\",\"children\":[{\"text\":\"Vue3\",\"link\":\"/vue3\"},{\"text\":\"Element UI\",\"link\":\"/element-ui\"},{\"text\":\"BootStrap\",\"link\":\"/bootstrap\"}]}]},{\"text\":\"算法题解\",\"icon\":\"iconfont icon-like\",\"prefix\":\"/\",\"children\":[{\"text\":\"算法\",\"link\":\"/algorithm\"},{\"text\":\"题解\",\"link\":\"/problems\"}]}],\"sidebar\":{\"/java/\":\"structure\",\"/database/\":\"structure\",\"/computer/\":\"structure\",\"/algorithm/\":\"structure\",\"/problems/\":\"structure\",\"/spring-series\":\"structure\"}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
