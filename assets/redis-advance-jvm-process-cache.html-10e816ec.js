const e=JSON.parse('{"key":"v-10b5d72d","path":"/database/redis/redis-advance-jvm-process-cache.html","title":"Redis进阶 - JVM进程缓存","lang":"zh-CN","frontmatter":{"order":17,"description":"传统缓存的问题 传统的缓存策略一般是请求到达 Tomcat 后，先查询 Redis ，如果未命中则查询数据库，存在下面的问题： 请求要经过 Tomcat 处理，Tomcat 的性能成为整个系统的瓶颈; Redis 缓存失效时，会对数据库产生冲击; 多级缓存方案 多级缓存就是充分利用请求处理的每个环节，分别添加缓存，减轻 Tomcat 压力，提升服务性能...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-advance-jvm-process-cache.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis进阶 - JVM进程缓存"}],["meta",{"property":"og:description","content":"传统缓存的问题 传统的缓存策略一般是请求到达 Tomcat 后，先查询 Redis ，如果未命中则查询数据库，存在下面的问题： 请求要经过 Tomcat 处理，Tomcat 的性能成为整个系统的瓶颈; Redis 缓存失效时，会对数据库产生冲击; 多级缓存方案 多级缓存就是充分利用请求处理的每个环节，分别添加缓存，减轻 Tomcat 压力，提升服务性能..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-26T12:20:04.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2023-08-26T12:20:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶 - JVM进程缓存\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-26T12:20:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"本地进程缓存","slug":"本地进程缓存","link":"#本地进程缓存","children":[]},{"level":2,"title":"Caffeine","slug":"caffeine","link":"#caffeine","children":[]},{"level":2,"title":"Caffeine示例","slug":"caffeine示例","link":"#caffeine示例","children":[]},{"level":2,"title":"Caffeine缓存驱逐策略","slug":"caffeine缓存驱逐策略","link":"#caffeine缓存驱逐策略","children":[]}],"git":{"createdTime":1687512750000,"updatedTime":1693052404000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":5}]},"readingTime":{"minutes":4.04,"words":1211},"filePathRelative":"database/redis/redis-advance-jvm-process-cache.md","localizedDate":"2023年6月23日","autoDesc":true,"excerpt":""}');export{e as data};
