const e=JSON.parse('{"key":"v-cf98b46c","path":"/database/redis/redis-pub-sub.html","title":"Redis入门 - 发布订阅","lang":"zh-CN","frontmatter":{"order":5,"description":"Redis入门 - 发布订阅 Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。 此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息， Redis 客户端可以订阅任意数量的频道。 下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系： 当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-pub-sub.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis入门 - 发布订阅"}],["meta",{"property":"og:description","content":"Redis入门 - 发布订阅 Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。 此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息， Redis 客户端可以订阅任意数量的频道。 下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系： 当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T13:22:27.000Z"}],["meta",{"property":"article:author","content":"CoderMast"}],["meta",{"property":"article:modified_time","content":"2023-06-13T13:22:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis入门 - 发布订阅\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-13T13:22:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"CoderMast\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1686662050000,"updatedTime":1686662547000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"database/redis/redis-pub-sub.md","localizedDate":"2023年6月13日","excerpt":"<h1> Redis入门 - 发布订阅</h1>\\n<p>Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。</p>\\n<p>此种模式下，消息发布者和订阅者不进行直接通信，发布者客户端向指定的频道（channel） 发布消息，订阅该频道的每个客户端都可以收到该消息，</p>\\n<p>Redis 客户端可以订阅任意数量的频道。</p>\\n<p>下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系：\\n</p>\\n<p>当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：</p>","autoDesc":true}');export{e as data};