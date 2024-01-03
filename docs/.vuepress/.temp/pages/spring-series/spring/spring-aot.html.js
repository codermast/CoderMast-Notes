export const data = JSON.parse("{\"key\":\"v-5a9eefa2\",\"path\":\"/spring-series/spring/spring-aot.html\",\"title\":\"Spring - AOT提前编译\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":13,\"description\":\"Spring - AOT提前编译 AOT概述 JIT与AOT的区别 JIT和AOT 这个名词是指两种不同的编译方式，这两种编译方式的主要区别在于是否在“运行时”进行编译 （1）JIT， Just-in-time,动态(即时)编译，边运行边编译； 在程序运行时，根据算法计算出热点代码，然后进行 JIT 实时编译，这种方式吞吐量高，有运行时性能加成，可以跑得更快，并可以做到动态生成代码等，但是相对启动速度较慢，并需要一定时间和调用频率才能触发 JIT 的分层机制。JIT 缺点就是编译需要占用运行时资源，会导致进程卡顿。\"},\"headers\":[{\"level\":2,\"title\":\"AOT概述\",\"slug\":\"aot概述\",\"link\":\"#aot概述\",\"children\":[{\"level\":3,\"title\":\"JIT与AOT的区别\",\"slug\":\"jit与aot的区别\",\"link\":\"#jit与aot的区别\",\"children\":[]},{\"level\":3,\"title\":\"Graalvm\",\"slug\":\"graalvm\",\"link\":\"#graalvm\",\"children\":[]},{\"level\":3,\"title\":\"Native Image\",\"slug\":\"native-image\",\"link\":\"#native-image\",\"children\":[]}]}],\"readingTime\":{\"minutes\":5.17,\"words\":1550},\"filePathRelative\":\"spring-series/spring/spring-aot.md\",\"excerpt\":\"<h1> Spring - AOT提前编译</h1>\\n<h2> AOT概述</h2>\\n<h3> JIT与AOT的区别</h3>\\n<p>JIT和AOT 这个名词是指两种不同的编译方式，这两种编译方式的主要区别在于是否在“运行时”进行编译</p>\\n<p><strong>（1）JIT， Just-in-time,动态(即时)编译，边运行边编译；</strong></p>\\n<p>在程序运行时，根据算法计算出热点代码，然后进行 JIT 实时编译，这种方式吞吐量高，有运行时性能加成，可以跑得更快，并可以做到动态生成代码等，但是相对启动速度较慢，并需要一定时间和调用频率才能触发 JIT 的分层机制。JIT 缺点就是编译需要占用运行时资源，会导致进程卡顿。</p>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
