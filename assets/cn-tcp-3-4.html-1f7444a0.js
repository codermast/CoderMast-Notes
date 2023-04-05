import{_ as a,W as e,X as i,Y as t}from"./framework-a0cce298.js";const s="/assets/2023-04-05-16-18-39-f0efe25e.png",c="/assets/2023-04-05-16-18-59-d3556df6.png",l="/assets/2023-04-05-16-19-20-9c4dbdda.png",o={},n=t('<h1 id="tcp三次握手和四次挥手图文详解" tabindex="-1"><a class="header-anchor" href="#tcp三次握手和四次挥手图文详解" aria-hidden="true">#</a> TCP三次握手和四次挥手图文详解</h1><figure><img src="'+s+'" alt="tcp连接" tabindex="0" loading="lazy"><figcaption>tcp连接</figcaption></figure><h2 id="什么是tcp连接" tabindex="-1"><a class="header-anchor" href="#什么是tcp连接" aria-hidden="true">#</a> 什么是TCP连接？</h2><p>TCP是一种面向连接的、可靠的、基于字节流的传输层通信协议。在简化的计算机网络OSI模型中，它完成第四层传输层所指定的功能，用户数据报协议是同一层内另一个重要的传输协议。在因特网协议族中，TCP层是位于IP层之上，应用层之下的中间层。不同主机的应用层之间经常需要可靠的、像管道一样的连接，但是IP层不提供这样的流机制，而是提供不可靠的包交换。</p><h2 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h2><p>三次握手是发生在TCP的连接过程中的，具体的步骤如下：</p><ol><li>客户端向服务端发起连接请求，发送请求报文段，将SYN同步位置为1，并且选择一个初始序列号seq=x，此时客户端由CLOSED(连接关闭)状态变为SYN-SENT(同步已发送状态)</li><li>服务端接收到客户端发来的连接请求，此时同意进行连接时，向客户端发送确认报文段并且将SYN同步位和ACK都置为1，确认号ack=x+1，并且为自己也选一个初始序列号seq=y，确认报文段不携带数据，但是仍要占用一个序号，发送报文段的同时为该TCP连接分配对应的缓存和变量。此时服务端从LISTEN(监听)状态转变为SYN-RCVD(同步收到)状态。</li><li>此时客户端接受到服务端发来的确认报文段，为了表示自己成功接受到报文段，还需要向服务端发送一个报文段，此时报文段的ACK位置为1，seq = x + 1，ack = y + 1，这里确认报文段也不携带数据，但是也要占用一个序号，此时发送报文段的同时为该TCP连接分配对应的缓存和变量。此时客户端从SYN-SENT(同步发送状态)转变为ESTABLISHED(已连接状态)。</li><li>此时连接建立，TCP连接提供的是全双工信道，双方都可以进行数据的发送。此时服务端从SYN-RVCD(同步收到)状态转变为ESTABLISHED(已连接状态)。</li></ol><blockquote><p>由于服务端的资源是在第二次握手时创建的，而客户端的资源是在第三次握手时创建的。这就使得服务器容易遭受SYN洪范攻击，即收到大量的连接请求而占用资源，导致正常的连接请求无法响应或者缓慢响应。 <img src="'+c+'" alt="三次握手" loading="lazy"></p></blockquote><h2 id="为什么需要三次握手而不是两次-或者四次" tabindex="-1"><a class="header-anchor" href="#为什么需要三次握手而不是两次-或者四次" aria-hidden="true">#</a> 为什么需要三次握手而不是两次？或者四次？</h2><ol><li><p>我们知道TCP连接是可靠的，但是网络信道并不可靠，即发送的数据有可能存在丢失或者延迟发送的可能，那么我们必须建立一套完整的机制保证数据能够可靠发送。</p></li><li><p>假如是两次握手时，即客户端发送连接请求，服务端接受连接请求。这两次握手，那么就存在当客户端发送的连接请求报文段阻塞时，客户端久久未收到来自服务端的确认报文段，以为报文段丢失，则进行超时重传，再发一个连接请求报文段，如若第二次服务端接收到了请求，则做出响应，同意连接，发送确认报文段，并且建立连接。而此时网络信道恢复，第一次发送的报文段，成功传输到了服务端，服务端以为客户端建立了新的连接请求，则再次发送确认报文段，再次建立连接。而客户端收到重复的确认报文段以为是失效报文段，不以理睬。则现在客户端只有一个连接，服务端却有两个连接，让服务端的资源白白浪费。</p><blockquote><p>如果网络信道非常差，可能客户端发送很多请求以后，才能成功连接一次，但突然恢复以后，服务端又会收到大量的连接请求，会创建更多的连接，浪费更多的资源。</p></blockquote></li><li><p>如果是四次握手，那么对比于三次握手，肯定是更加的安全和可靠，但是三次握手已经足够保证连接可靠，四次握手将会导致连接时间变长，连接过程更加复杂，则浪费更多的资源。</p><blockquote><p>4次及4次以上，同理即可。</p></blockquote></li></ol><h2 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h2><p>四次挥手是发生在TCP的连接释放过程中，具体的步骤如下：</p><ol><li>在客户端传送完数据以后，需要进行连接的释放，此时由客户端发送<strong>连接释放报文段</strong>，将FIN位置为1，表示请求连接断开，序号seq= u，u为此前传输数据包的报文段的序号 + 1，并且将客户端的TCP连接断开，则此时客户端就不能够再发送数据，但是服务端还可以向客户端发送数据，FIN报文段即使不携带任何数据，也要消耗掉一个序号。</li><li>服务端收到来自客户端的连接释放报文段，表示同意断开连接，则立刻发送<strong>确认报文段</strong>，将ACK位置为1，表示同意断开连接，序号seq = v，v为服务端最后一次传输成功的报文段的序号 + 1，ack = u + 1，连接释放报文段也要消耗一个序号。此时仅仅只有客户端向服务端方向的连接断开，但是TCP连接是全双工的，服务端还可以向客户端发送数据，客户端也可以接受到数据。</li><li>若服务端还有数据未完成传输，则可以继续进行传输数据，待数据传输完成以后，向客户端发送<strong>连接释放报文段</strong>，将FIN置为1，ACK置为1，seq = w，w为服务端成功传输最后一个数据包的序号 + 1，ack = u + 1，连接释放报文段也要占用一个序号。此时将服务端到客户端方向的连接断开。</li><li>客户端收到来自服务端的连接释放报文段，需要做出回应，发送<strong>确认报文段</strong>，将其ACK位置为1，确认号ack = w + 1，seq = u + 1。此时TCP连接还未释放，需要经过时间等待计时器设置的时间后，客户端才进入连接关闭状态。 <img src="'+l+'" alt="四次挥手" loading="lazy"></li></ol><div class="hint-container tip"><p class="hint-container-title">小结</p><p>综上所述，TCP连接的3次握手和4次挥手归根结底是在保证连接可靠的情况下尽可能的减少资源的浪费。</p></div>',14),r=[n];function d(p,h){return e(),i("div",null,r)}const C=a(o,[["render",d],["__file","cn-tcp-3-4.html.vue"]]);export{C as default};
