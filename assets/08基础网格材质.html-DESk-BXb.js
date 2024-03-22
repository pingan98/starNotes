import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Ct-Jaoij.js";const e={},p=t(`<h1 id="基础网格材质" tabindex="-1"><a class="header-anchor" href="#基础网格材质"><span>基础网格材质</span></a></h1><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/addons/controls/OrbitControls.js&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// 创建场景</span>
  <span class="token comment">// 场景能够让你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。</span>
  <span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 添加背景颜色</span>
  scene<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0x666666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 01 (左) 02（右） 03（上）04（下）05（后） 06（前）</span>
  <span class="token comment">// 04 01 05 02  06 03</span>

  <span class="token comment">// 创建纹理</span>
  <span class="token comment">// const textures = new THREE.CubeTextureLoader().setPath(&#39;/textures/&#39;).load([</span>
  <span class="token comment">//   &#39;04.jpg&#39;, &#39;01.jpg&#39;,</span>
  <span class="token comment">//   &#39;05.jpg&#39;, &#39;02.jpg&#39;,</span>
  <span class="token comment">//   &#39;06.jpg&#39;, &#39;03.jpg&#39;</span>
  <span class="token comment">// ])</span>

  <span class="token keyword">const</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span> <span class="token string">&quot;textures/02-map.jpg&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// public文件夹下的</span>
  <span class="token comment">// texture.wrapS = THREE.RepeatWrapping;</span>
  <span class="token comment">// texture.wrapT = THREE.RepeatWrapping;</span>
  <span class="token comment">// texture.repeat.set( 4, 4 );</span>

  <span class="token comment">// 添加背景图片</span>
  <span class="token comment">// scene.background = textures</span>


  <span class="token comment">// // 添加雾</span>
  <span class="token comment">// scene.fog = new THREE.Fog(0xcccccc, 10, 15);</span>

  <span class="token comment">// 创建相机</span>
  <span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">PerspectiveCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建立方体</span>
  <span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
    map<span class="token operator">:</span> texture
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建球体</span>
  <span class="token comment">// const sphere = new THREE.SphereGeometry(1)</span>
  <span class="token comment">// const material1 = new THREE.MeshBasicMaterial({ </span>
  <span class="token comment">//   envMap: textures,</span>
  <span class="token comment">//   color: 0xf40404,</span>
  <span class="token comment">//   map: texture</span>
  <span class="token comment">// });</span>

  <span class="token comment">// 网格</span>
  <span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
  cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 网格</span>
  <span class="token comment">// const cube1 = new THREE.Mesh(sphere, material1);</span>
  <span class="token comment">// cube1.position.set(0, 0, 0);</span>
  <span class="token comment">// scene.add(cube1);</span>

  <span class="token comment">// 添加网格地面</span>
  <span class="token comment">// const gridHelper = new THREE.GridHelper(10, 10);</span>
  <span class="token comment">// scene.add(gridHelper);</span>

  <span class="token comment">// 添加坐标轴</span>
  <span class="token comment">// const axesHelper = new THREE.AxesHelper( 5 );</span>
  <span class="token comment">// axesHelper.position.y = 3</span>
  <span class="token comment">// scene.add( axesHelper );</span>


  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建渲染器</span>
    <span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将渲染器添加到页面</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 进行渲染</span>
    <span class="token comment">// renderer.render(scene, camera);</span>
    <span class="token comment">// 添加轨道控制器</span>
    <span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span>camera<span class="token punctuation">,</span> renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
    <span class="token comment">// 让立方体动起来</span>
    <span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</span>
      <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
      cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
      <span class="token comment">// 轨道控制器更新</span>
      controls<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","08基础网格材质.html.vue"]]),d=JSON.parse('{"path":"/posts/Three/08%E5%9F%BA%E7%A1%80%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.html","title":"基础网格材质","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-03-21T00:00:00.000Z","category":["three.js"],"tag":["基础网格材质"],"star":true,"description":"基础网格材质","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/starNotes/posts/Three/08%E5%9F%BA%E7%A1%80%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"基础网格材质"}],["meta",{"property":"og:description","content":"基础网格材质"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-22T03:02:43.000Z"}],["meta",{"property":"article:author","content":"平安"}],["meta",{"property":"article:tag","content":"基础网格材质"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-22T03:02:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础网格材质\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-22T03:02:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"平安\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1711076563000,"updatedTime":1711076563000,"contributors":[{"name":"chengongtao","email":"chengongtao@unicheers.com","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"posts/Three/08基础网格材质.md","localizedDate":"2024年3月21日","excerpt":"\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>container<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};
