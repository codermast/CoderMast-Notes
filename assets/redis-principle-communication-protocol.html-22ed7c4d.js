const e=JSON.parse('{"key":"v-6dc1af78","path":"/database/redis/redis-principle-communication-protocol.html","title":"Redis原理 - 通信协议RESP","lang":"zh-CN","frontmatter":{"order":30,"description":"RESP协议 Redis 是一个 CS 架构的软件，通信一般分两步（不包括pipeline 和 PubSub）： 1. 客户端（client）向服务端（server）发送一条命令 2. 服务端解析并执行命令，返回响应结果给客户端 因此客户端发送命令的格式、服务端响应结果的格式必须有一个规范，这个规范就是通信协议。 CS架构 CS架构一般指服务器-客户机...","head":[["meta",{"property":"og:url","content":"https://www.codermast.com/database/redis/redis-principle-communication-protocol.html"}],["meta",{"property":"og:site_name","content":"CoderMast编程桅杆"}],["meta",{"property":"og:title","content":"Redis原理 - 通信协议RESP"}],["meta",{"property":"og:description","content":"RESP协议 Redis 是一个 CS 架构的软件，通信一般分两步（不包括pipeline 和 PubSub）： 1. 客户端（client）向服务端（server）发送一条命令 2. 服务端解析并执行命令，返回响应结果给客户端 因此客户端发送命令的格式、服务端响应结果的格式必须有一个规范，这个规范就是通信协议。 CS架构 CS架构一般指服务器-客户机..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-23T09:32:30.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2023-06-23T09:32:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis原理 - 通信协议RESP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-23T09:32:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\",\\"email\\":\\"codermast@163.com\\"}]}"]]},"headers":[{"level":2,"title":"RESP协议","slug":"resp协议","link":"#resp协议","children":[]},{"level":2,"title":"自定义客户端","slug":"自定义客户端","link":"#自定义客户端","children":[]}],"git":{"createdTime":1687505989000,"updatedTime":1687512750000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":2}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"database/redis/redis-principle-communication-protocol.md","localizedDate":"2023年6月23日","autoDesc":true,"excerpt":""}');export{e as data};
