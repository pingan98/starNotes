import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c as o,e as r,a as e,b as l,d as p,f as a}from"./app-qWlhaRFc.js";const c={},d=a('<h1 id="篇章8" tabindex="-1"><a class="header-anchor" href="#篇章8"><span>篇章8</span></a></h1><h2 id="ssr实现原理" tabindex="-1"><a class="header-anchor" href="#ssr实现原理"><span>SSR实现原理</span></a></h2><p>vue.js的ssR是一种在服务器上预渲染Vue.js应用程序的技术。</p><ul><li>服务器接收请求：当服务器接收一个请求时，它会创建一个新的Vue实例。</li><li>创建渲染器：使用vue-server-renderer包创建一个渲染器。</li><li>渲染页面：服务器使用渲染器将Vue实例渲染为Html字符串。</li><li>发送响应：服务器将渲染后的Html字符串作为响应发送给客户端。</li><li>客户端接收响应：客户端接收到服务器的响应后，将HTML字符串解析为DOM并显示给用户。</li><li>激活(Hydration): Vue在客户端创建一个新的Vue实例，将其挂载到服务器收到的Dom上</li></ul><h2 id="ssr渲染流程是什么样" tabindex="-1"><a class="header-anchor" href="#ssr渲染流程是什么样"><span>SSR渲染流程是什么样？</span></a></h2><ul><li>客户端发送URL请求到服务端</li><li>服务端查询数据库</li><li>拿到数据,组合好页面</li><li>服务端返回整个DOM结构给客户端</li></ul><h2 id="从-url-输入地址到最终网页渲染-中间发生了什么-浏览器从输入到渲染的过程经历哪些过" tabindex="-1"><a class="header-anchor" href="#从-url-输入地址到最终网页渲染-中间发生了什么-浏览器从输入到渲染的过程经历哪些过"><span>从 url 输入地址到最终网页渲染，中间发生了什么 / 浏览器从输入到渲染的过程经历哪些过</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li>DNS解析（查询）：将域名地址解析成ip地址 <ul><li>浏览器DNS解析</li><li>计算机DNS解析</li><li>路由器DNS解析</li><li>网络运行商DNS解析</li><li>递归查询</li></ul></li><li>TCP链接： TCP三次握手 <ul><li>客户端发送服务端：我准备好了，请你准备一下</li><li>服务端发送客户端：我也准备好了，请你确认一下</li><li>客户端发送服务端： 确认完毕</li></ul></li><li>发送请求 <ul><li>将请求报文发送过去</li></ul></li><li>返回响应 <ul><li>将响应报文发送过来</li></ul></li><li>渲染页面 <ul><li>遇到HTML，调用HTML解析器，解析成DOM树</li><li>遇到CSS，调用CSS解析器，解析成CSSOM树</li><li>遇到JS,调用JS解析器（JS引擎），解析JS代码 <ul><li>可能要修改元素节点，重新调用HTML解析器，解析成新的DOM树</li><li>可能要修改样式节点，重新调用CSS解析器，解析成新的CSSOM树</li></ul></li><li>将DOM + CSSOM = render树（渲染树）</li><li>layout布局：计算元素位置和大小信息 render渲染：将颜色渲染上去</li></ul></li><li>断开链接：TCP四次挥手 <ul><li><p>断开请求链接2次</p></li><li><p>断开响应链接2次</p></li><li><p>客户端发送服务端：请求数据发送完毕，可以断开了</p></li><li><p>服务端发送客户端：请求数据接收完毕，可以断开了</p></li><li><p>服务端发送客户端：响应数据发送完毕，可以断开了</p></li><li><p>客户端发送服务端：响应数据接收完毕，可以断开了</p></li></ul></li></ul></div>',8),h=a('<h2 id="说说网络错误码有哪些-分别代表什么意思" tabindex="-1"><a class="header-anchor" href="#说说网络错误码有哪些-分别代表什么意思"><span>说说网络错误码有哪些？ 分别代表什么意思</span></a></h2><h4 id="网络错误码-以下前缀开发头代表不同的错误" tabindex="-1"><a class="header-anchor" href="#网络错误码-以下前缀开发头代表不同的错误"><span>网络错误码：以下前缀开发头代表不同的错误</span></a></h4><ul><li>1 开头表示消息</li><li>2 开头 表示成功</li><li>3 表示重定向</li><li>4 表示客户端错误</li><li>4 表示服务器错误</li></ul><h5 id="_1xx段-表示请求已被接受-需要继续处理。这类响应是临时响应-只包含状态行和某些可选的响应头信息" tabindex="-1"><a class="header-anchor" href="#_1xx段-表示请求已被接受-需要继续处理。这类响应是临时响应-只包含状态行和某些可选的响应头信息"><span>1XX段：表示请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息</span></a></h5><p>常见的有：</p><ul><li>100(客户端继续发送请求，这是临时响应)</li><li>101(服务器根据客户请求切换协议)</li></ul><h5 id="_2xx段-表示请求已成功被服务器接收、理解、并接受" tabindex="-1"><a class="header-anchor" href="#_2xx段-表示请求已成功被服务器接收、理解、并接受"><span>2xx段： 表示请求已成功被服务器接收、理解、并接受</span></a></h5><p>常见的有：</p><ul><li>200（成功）： 请求已成功，并且返回所希望的响应头和数据体</li><li>201 (已创建): 请求成功并且服务器创建了新的资源</li><li>202 （已创建）： 服务器已接收请求，但是尚未处理完成</li><li>203（非授权信息）: 服务器已成功处理请求,但返回的信息可能来自另一来源</li><li>204(无内容)： 服务器成功处理请求，但无返回内容</li><li>205(重置内容)： 服务器成功处理请求，但没有任何返回内容</li><li>206(部分内容)： 表示服务器成功处理了部分请求，通常在断电续传或者分块下载使用</li></ul><h5 id="_3xx段-表示完成请求-需要进一步操作。" tabindex="-1"><a class="header-anchor" href="#_3xx段-表示完成请求-需要进一步操作。"><span>3xx段： 表示完成请求，需要进一步操作。</span></a></h5><p>常见的有：</p><ul><li>300（多种选择）：针对请求，服务器可执行多种操作</li><li>301(永久移动)： 请求的页面已永久移动到新位置</li><li>302(临时移动): 服务器目前从不同位置的页面响应请求</li><li>303(查看其它位置)： 请求者应对不同的位置单独使用get请求来检索响应</li><li>304(协商缓存)： 服务器通过状态304可以告诉客户端请求资源成功</li><li>305 （使用代理）： 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理</li><li>307 （临时重定向）： 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求</li></ul><h5 id="_4xx段-表示服务器无法处理请求-客户端错误" tabindex="-1"><a class="header-anchor" href="#_4xx段-表示服务器无法处理请求-客户端错误"><span>4xx段： 表示服务器无法处理请求，客户端错误</span></a></h5><p>常见的有：</p><ul><li>400（错误请求）： 服务器不理解请求的语法</li><li>401（未授权）： 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。</li><li>403（禁止）： 服务器拒绝请求</li><li>404（未找到）： 请求的资源不存在</li><li>405（方法禁用）： 禁用请求中指定的方法</li><li>406（不接受）： 无法使用请求的内容特性响应请求的网页</li><li>407（需要代理授权）： 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理</li><li>408（请求超时）： 服务器等候请求时发生超时</li></ul><h5 id="_5xx段-表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生" tabindex="-1"><a class="header-anchor" href="#_5xx段-表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生"><span>5xx段： 表示服务器无法完成明显有效的请求。这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生</span></a></h5><p>常见的有：</p><ul><li>500（服务器内部错误）：服务器遇到错误，无法完成请求</li><li>501（尚未实施）：服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码</li><li>502（错误网关）： 服务器作为网关或代理，从上游服务器收到无效响应</li><li>503（服务不可用）： 服务器目前无法使用（由于超载或停机维护）</li><li>504（网关超时）： 服务器作为网关或代理，但是没有及时从上游服务器收到请求</li><li>505（HTTP 版本不受支持）： 服务器不支持请求中所用的 HTTP 协议版本</li></ul><h2 id="如何解决页面刷新丢失数据的问题" tabindex="-1"><a class="header-anchor" href="#如何解决页面刷新丢失数据的问题"><span>如何解决页面刷新丢失数据的问题？</span></a></h2><ul><li>通过本地储存解决 localStorage 或 sessionStorage 存储</li><li>或通过插件 vuex-persistedstate 解决</li></ul><h2 id="后台系统中权限是实现到什么等级-具体怎么实现的" tabindex="-1"><a class="header-anchor" href="#后台系统中权限是实现到什么等级-具体怎么实现的"><span>后台系统中权限是实现到什么等级? 具体怎么实现的</span></a></h2><h4 id="目前大多数是实现到按钮级-实现的方法是通过自定义指令" tabindex="-1"><a class="header-anchor" href="#目前大多数是实现到按钮级-实现的方法是通过自定义指令"><span>目前大多数是实现到按钮级,实现的方法是通过自定义指令</span></a></h4><h5 id="具体流程如下" tabindex="-1"><a class="header-anchor" href="#具体流程如下"><span>具体流程如下:</span></a></h5><ul><li>从服务器获取一个对象,对象里包含了所有按钮的权限,</li><li>给按钮添加自定义指令,并且为每个按钮传递不同参数</li><li>通过自定义指令的bind生命周期 设置按钮的display 控制是否展示按钮或者直接删除元素</li></ul><h2 id="图片预加载-图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片预加载-图片懒加载"><span>图片预加载 图片懒加载</span></a></h2><div class="hint-container info"><p class="hint-container-title">图片预加载 图片懒加载</p><p>图片预加载： 顾名思义，图片预加载就是在网页全部加载之前， 提前加载图片。 当用户需要查看时可直接从本地缓存中渲染， 以提供给用户更好的体验，减少等待的时间。否则，如果一个页面的内容过于庞大，没有使用预加载技术的页面就会长时间的展现为一片空白，这样浏览者可能以为图片预览慢而没兴趣浏览，把网页关掉，这时，就需要图片预加载。 当然这种做法实际上牺牲了服务器的性能换取了更好的用户体验。</p><p>图片懒加载（缓载 ）： 延迟加载图片或符合某些条件时才加载某些图片。这样做的好处是减少不必要的访问数据库或延迟访问数据库的次数，因为每次访问数据库都是比较耗时的即只有真正使用该对象的数据时才会创建。 懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。</p></div><h2 id="图片预加载" tabindex="-1"><a class="header-anchor" href="#图片预加载"><span>图片预加载</span></a></h2>',27),u={href:"https://blog.csdn.net/weixin_42530606/article/details/129089128",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="前端图片懒加载的原理" tabindex="-1"><a class="header-anchor" href="#前端图片懒加载的原理"><span>前端图片懒加载的原理</span></a></h2><p>tips：核心原理是通过 判断图片元素是否显示在视图中，如果显示在视图中即显示图片。</p><ul><li><p>第一种是纯粹的延迟加载，使用setTimeOut或setInterval进行加载延迟，如果用户在加载前就离开了页面，那么就不会加载。</p></li><li><p>第二种是条件加载，符合某些条件，或触发了某些事件才开始异步下载。</p></li><li><p>第三种是可视区加载，即仅加载用户可以看到的区域，这个主要由监控滚动条来实现，一般会在距用户看到某图片前一定距离遍开始加载，这样能保证用户拉下时正好能看到图片</p></li></ul><h4 id="具体步骤如下" tabindex="-1"><a class="header-anchor" href="#具体步骤如下"><span>具体步骤如下：</span></a></h4><ul><li>声明img标签但是src属性为空，我们可以另外设置一个自定义属性data-src用来赋值图片url</li><li>然后就是监听scroll事件，同时scroll事件可以加上 节流，减少资源浪费</li><li>判断当前图片是否有在可视范围内，判断方法有多种，例如： offsetTop+offsetHeight &gt; scrollTop或者 getBoundingClientRect判断 top和left小于视窗高度(clientHeight)</li><li>如果是的情况下我们获取这个img元素的data-src然后把属性赋值src即可</li></ul><h2 id="如何让你在数组中查找元素你会如何实现" tabindex="-1"><a class="header-anchor" href="#如何让你在数组中查找元素你会如何实现"><span>如何让你在数组中查找元素你会如何实现</span></a></h2><p>如果是基础类型的数组 考虑使用 indexOf进行查找 如果是对象数组 则使用findIndex进行查找</p><h2 id="浏览器用过哪些缓存" tabindex="-1"><a class="header-anchor" href="#浏览器用过哪些缓存"><span>浏览器用过哪些缓存</span></a></h2><ul><li>1、http缓存是基于HTTP协议的浏览器文件级缓存机制。</li><li>2、websql这种方式只有较新的chrome浏览器支持，并以一个独立规范形式出现</li><li>3、indexDB是一个为了能够在客户端存储可观数量的结构化数据，并且在这些数据上使用索引进行高性能检索的 API</li><li>4、Cookie一般网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（通常经过加密）</li><li>5、Localstorage html5的一种新的本地缓存方案，目前用的比较多，一般用来存储ajax返回的数据，加快下次页面打开时的渲染速度</li><li>6、Sessionstorage和localstorage类似，但是浏览器关闭则会全部删除，api和localstorage相同，实际项目中使用较少。</li><li>7、application cache是将大部分图片资源、js、css等静态资源放在manifest文件配置中</li><li>8、cacheStorage是在ServiceWorker的规范中定义的，可以保存每个serverWorker申明的cache对象</li><li>9、flash缓存这种方式基本不用，这一方法主要基于flash有读写浏览器端本地目录的功能</li></ul><div class="hint-container info"><p class="hint-container-title">Localstorage / Sessionstorage / Cookie 区别</p><h3 id="可针对于前端所用localstorage-sessionstorage-cookie描述相同点和不同点" tabindex="-1"><a class="header-anchor" href="#可针对于前端所用localstorage-sessionstorage-cookie描述相同点和不同点"><span>可针对于前端所用Localstorage / Sessionstorage / Cookie描述相同点和不同点</span></a></h3><ul><li>（1）存储大小 cookie数据大小不能超过4k ； sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大；</li><li>（2）有效时间 localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； sessionStorage 数据在当前浏览器窗口关闭后自动删除； cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭；</li><li>（3）数据与服务器之间的交互方式 cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端； sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存；</li><li>（4）作用域 localStorage的作用域限制在文档源的； localStorage同源的文档之间可以相互访问和修改相同名称的数据； localStorage受浏览器厂商的限制，chrome下存储的数据，360浏览器下不可访问； 会得到‘Invalid Date’； sessionStorage在localStorage的同源策略基础之上，还有更严格的限制： 他还被限制在窗口中，意思是同一个窗口或标签页的不同页面之间可以共享sessionStorage； 但是不同的窗口或标签页之间不能共享sessionStorage，即便他们是同一个页面地址； 这里的窗口是顶级窗口，如果里面有多个iframe，他们之间共享sessionStorage；</li></ul></div><h2 id="浏览器的宏任务与微任务是什么" tabindex="-1"><a class="header-anchor" href="#浏览器的宏任务与微任务是什么"><span>浏览器的宏任务与微任务是什么</span></a></h2><p>微任务优先于宏任务</p><ul><li>宏任务 宏任务是由浏览器发起的任务，通常包括整体代码、setTimeout、setInterval、I/O 操作等。宏任务会被添加到宏任务队列中，等待浏览器的执行 宏任务执行完毕后，会清空微任务队列</li><li>微任务 微任务是在宏任务执行完毕后立即执行的任务。微任务通常包括 Promise 的回调、MutationObserver 等 微任务队列有自己的执行时机，在每个宏任务执行完毕后，会检查微任务队列并执行其中的所有任务。</li></ul><h2 id="堆和栈" tabindex="-1"><a class="header-anchor" href="#堆和栈"><span>堆和栈</span></a></h2><ul><li>堆（堆内存） 用于动态分配内区的区域，用于存储引用类型，如对象和数组 （在堆中分配的内存不会自动释放，需要通过垃圾回收机制来回收不再使用的内存。堆的大小通常比栈大，并且可以动态增长和收缩。）</li><li>栈 同于管理函数执行上下文和存储基本类型值的一种数据结构 （每当执行一个函数时，都会在栈中创建一个新的执行上下文，包括函数的参数、局部变量和函数的返回地址。当函数执行完成后， 对应的执行上下文会被销毁，栈会自动释放相关的内存。栈的大小通常比较小且固定，内存分配由系统自动管理。）</li></ul><p>区别 - 存储内容：堆用于存储引用类型的数据，如对象和数组；栈用于存储基本类型的数据，如布尔值、数值和字符串，以及函数执行的上下文。 - 分配方式：堆通过动态分配内存来存储数据；栈通过在执行上下文中的栈帧上分配固定大小的内存来存储数据。 - 大小和生长性：堆的大小通常比栈大，可以动态增长和收缩；栈的大小通常比较小且固定，由系统自动管理。 - 管理方式：堆的内存管理需要使用垃圾回收机制来回收不再使用的内存；栈的内存管理由系统自动处理，通过栈指针的移动来分配和释放内存。 - 生命周期：堆中分配的内存不会自动释放，需要通过垃圾回收来回收内存；栈中的内存由系统自动管理，在函数执行完成后自动释放。</p><h2 id="什么是柯里化函数-你对柯里化了解多少" tabindex="-1"><a class="header-anchor" href="#什么是柯里化函数-你对柯里化了解多少"><span>什么是柯里化函数，你对柯里化了解多少？</span></a></h2><h4 id="柯里化-柯里化是一个高阶函数-它可以将多个形参的函数转成单一的形参的函数" tabindex="-1"><a class="header-anchor" href="#柯里化-柯里化是一个高阶函数-它可以将多个形参的函数转成单一的形参的函数"><span>柯里化： 柯里化是一个高阶函数,它可以将多个形参的函数转成单一的形参的函数</span></a></h4><h4 id="代码实现-其实柯里化函数的核心点主要在args-length和fn-length的判断-当传入的参数个小小于原始函数的参数个数-则继续柯里化" tabindex="-1"><a class="header-anchor" href="#代码实现-其实柯里化函数的核心点主要在args-length和fn-length的判断-当传入的参数个小小于原始函数的参数个数-则继续柯里化"><span>代码实现:其实柯里化函数的核心点主要在args.length和fn.length的判断，当传入的参数个小小于原始函数的参数个数，则继续柯里化</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> _args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>params<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        	<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>_args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        	<span class="token keyword">return</span> <span class="token function">curry</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token operator">...</span>_args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom"><span>虚拟dom</span></a></h2><p>虚拟dom是用来表现真实dom结果的javaScript对象树，是构建在浏览器真实dom上的抽象层，虚拟dom是可以直接在内存中操作的，可以通过diff算法来对比新旧dom 差异，将最终变化应用到真实dom上</p><h2 id="diff算法原理" tabindex="-1"><a class="header-anchor" href="#diff算法原理"><span>diff算法原理</span></a></h2><p>diff算法又称虚拟Dom的周界算法，vue的diff算法是通过深度优先、先序遍历的方式进行的，它将前后两个虚拟Dom树进行逐层比较，当找到某一层不一样的节点时，停止下降，然后比较这些节点的子节点，当所有的子节点都完成比较之后，算法会由下至上进行回溯，此过程被称为执行patch操作。在执行patch操作时，Vue对于不同类型的节点的更新方式也不同，对于元素节点可以更新他的属性和子节点；对于文本节点，只能更新它的文本内容；对于每个子节点，如果key值相同，可以进行复用或者重新排序，或者将其他的节点移动到这个位置。</p><p>diff算法主要采用深度优先算法，逐层进行比较，具体实现如下</p><ul><li>首先会有两个虚拟DOM树，分为新的子节点集合，旧子节点集合</li><li>同时会有4个索引分别指向，新子节点的首尾，旧的子节点首尾4个（这里以oldS,oldE,newS,newE）代表</li><li>比较的话 就是oldS和oldE 分别对newS、newE进行比较就有四种情况了</li></ul><p>####相等情况分为4种</p><ul><li>oldS（旧节点的头）和newS （新节点的头）相等，那么oldS 和 newS 分别索引+1</li><li>oldS（旧节点的头）和newE （新节点的尾）相等，那么就是oldS +1 然后newE -1</li><li>oldE（旧节点的尾）和newS （新节点的尾）相等，那么oldE 和 newE 分别索引 +1</li><li>oldE（旧节点的尾）和newS （新节点的头）相等，那么就是oldE -1 然后 newS +1</li></ul><p>最后会出现一种情况，就是如果存在不相等的节点的时候 会有两种结果</p><ul><li>new的子节点集合大于 旧的子节点集合，添加新的子节点</li><li>旧的节点集合大于新的节点集合，那么就会真实DOM中（不是在旧节点）删除多余的子节点</li></ul>`,30);function g(k,f){const n=i("ExternalLinkIcon");return t(),o("div",null,[d,r(` #### 详细步骤如下
  - DNS查询服务器IP
  - TCP 三次握手
  - TLS 协商
  - 发送GET请求HTML文件
  - 将HTML内容构建DOM树
  - 将CSS内容构建CSSOM树
  - 将DOM树和CSSOM树合成渲染树
  - 根据渲染树进行页面元素布局
  - 绘制到页面 `),h,e("p",null,[l("常用的是new Image();，设置其src来实现预载，再使用onload方法回调预载完成事件。 引用"),e("a",u,[l("骨架屏"),p(n)])]),m])}const x=s(c,[["render",g],["__file","08.篇章8.html.vue"]]),b=JSON.parse('{"path":"/posts/Study/08.%E7%AF%87%E7%AB%A08.html","title":"篇章8","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-04-02T08:00:00.000Z","category":["篇章4"],"tag":["拓展"],"star":true,"description":"篇章8 SSR实现原理 vue.js的ssR是一种在服务器上预渲染Vue.js应用程序的技术。 服务器接收请求：当服务器接收一个请求时，它会创建一个新的Vue实例。 创建渲染器：使用vue-server-renderer包创建一个渲染器。 渲染页面：服务器使用渲染器将Vue实例渲染为Html字符串。 发送响应：服务器将渲染后的Html字符串作为响应发送...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/starNotes/posts/Study/08.%E7%AF%87%E7%AB%A08.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"篇章8"}],["meta",{"property":"og:description","content":"篇章8 SSR实现原理 vue.js的ssR是一种在服务器上预渲染Vue.js应用程序的技术。 服务器接收请求：当服务器接收一个请求时，它会创建一个新的Vue实例。 创建渲染器：使用vue-server-renderer包创建一个渲染器。 渲染页面：服务器使用渲染器将Vue实例渲染为Html字符串。 发送响应：服务器将渲染后的Html字符串作为响应发送..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-03T07:43:42.000Z"}],["meta",{"property":"article:author","content":"平安"}],["meta",{"property":"article:tag","content":"拓展"}],["meta",{"property":"article:published_time","content":"2024-04-02T08:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-03T07:43:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"篇章8\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-02T08:00:00.000Z\\",\\"dateModified\\":\\"2024-04-03T07:43:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"平安\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"SSR实现原理","slug":"ssr实现原理","link":"#ssr实现原理","children":[]},{"level":2,"title":"SSR渲染流程是什么样？","slug":"ssr渲染流程是什么样","link":"#ssr渲染流程是什么样","children":[]},{"level":2,"title":"从 url 输入地址到最终网页渲染，中间发生了什么 / 浏览器从输入到渲染的过程经历哪些过","slug":"从-url-输入地址到最终网页渲染-中间发生了什么-浏览器从输入到渲染的过程经历哪些过","link":"#从-url-输入地址到最终网页渲染-中间发生了什么-浏览器从输入到渲染的过程经历哪些过","children":[]},{"level":2,"title":"说说网络错误码有哪些？ 分别代表什么意思","slug":"说说网络错误码有哪些-分别代表什么意思","link":"#说说网络错误码有哪些-分别代表什么意思","children":[]},{"level":2,"title":"如何解决页面刷新丢失数据的问题？","slug":"如何解决页面刷新丢失数据的问题","link":"#如何解决页面刷新丢失数据的问题","children":[]},{"level":2,"title":"后台系统中权限是实现到什么等级? 具体怎么实现的","slug":"后台系统中权限是实现到什么等级-具体怎么实现的","link":"#后台系统中权限是实现到什么等级-具体怎么实现的","children":[]},{"level":2,"title":"图片预加载 图片懒加载","slug":"图片预加载-图片懒加载","link":"#图片预加载-图片懒加载","children":[]},{"level":2,"title":"图片预加载","slug":"图片预加载","link":"#图片预加载","children":[]},{"level":2,"title":"前端图片懒加载的原理","slug":"前端图片懒加载的原理","link":"#前端图片懒加载的原理","children":[]},{"level":2,"title":"如何让你在数组中查找元素你会如何实现","slug":"如何让你在数组中查找元素你会如何实现","link":"#如何让你在数组中查找元素你会如何实现","children":[]},{"level":2,"title":"浏览器用过哪些缓存","slug":"浏览器用过哪些缓存","link":"#浏览器用过哪些缓存","children":[]},{"level":2,"title":"浏览器的宏任务与微任务是什么","slug":"浏览器的宏任务与微任务是什么","link":"#浏览器的宏任务与微任务是什么","children":[]},{"level":2,"title":"堆和栈","slug":"堆和栈","link":"#堆和栈","children":[]},{"level":2,"title":"什么是柯里化函数，你对柯里化了解多少？","slug":"什么是柯里化函数-你对柯里化了解多少","link":"#什么是柯里化函数-你对柯里化了解多少","children":[]},{"level":2,"title":"虚拟dom","slug":"虚拟dom","link":"#虚拟dom","children":[]},{"level":2,"title":"diff算法原理","slug":"diff算法原理","link":"#diff算法原理","children":[]}],"git":{"createdTime":1712027625000,"updatedTime":1712130222000,"contributors":[{"name":"chengongtao","email":"chengongtao@unicheers.com","commits":3}]},"readingTime":{"minutes":15.6,"words":4681},"filePathRelative":"posts/Study/08.篇章8.md","localizedDate":"2024年4月2日","excerpt":"\\n<h2>SSR实现原理</h2>\\n<p>vue.js的ssR是一种在服务器上预渲染Vue.js应用程序的技术。</p>\\n<ul>\\n<li>服务器接收请求：当服务器接收一个请求时，它会创建一个新的Vue实例。</li>\\n<li>创建渲染器：使用vue-server-renderer包创建一个渲染器。</li>\\n<li>渲染页面：服务器使用渲染器将Vue实例渲染为Html字符串。</li>\\n<li>发送响应：服务器将渲染后的Html字符串作为响应发送给客户端。</li>\\n<li>客户端接收响应：客户端接收到服务器的响应后，将HTML字符串解析为DOM并显示给用户。</li>\\n<li>激活(Hydration): Vue在客户端创建一个新的Vue实例，将其挂载到服务器收到的Dom上</li>\\n</ul>","autoDesc":true}');export{x as comp,b as data};
