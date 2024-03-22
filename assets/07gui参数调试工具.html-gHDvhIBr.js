import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Ct-Jaoij.js";const p={},e=t(`<h1 id="gui参数调试工具" tabindex="-1"><a class="header-anchor" href="#gui参数调试工具"><span>gui参数调试工具</span></a></h1><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three/addons/controls/OrbitControls.js&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> dat <span class="token keyword">from</span> <span class="token string">&#39;dat.gui&#39;</span>

  <span class="token comment">// 创建控制对象</span>
  <span class="token keyword">const</span> controlData <span class="token operator">=</span> <span class="token punctuation">{</span>
    rotationSpeed<span class="token operator">:</span> <span class="token number">0.01</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;#66ccff&#39;</span><span class="token punctuation">,</span>
    wireframe<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 创建实例</span>
  <span class="token keyword">const</span> gui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dat</span><span class="token punctuation">.</span><span class="token constant">GUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> f <span class="token operator">=</span> gui<span class="token punctuation">.</span><span class="token function">addFolder</span><span class="token punctuation">(</span><span class="token string">&#39;配置&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// f.add(controlData, &quot;rotationSpeed&quot;, 0.01, 0.1, 0.01)</span>

  f<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>controlData<span class="token punctuation">,</span> <span class="token string">&quot;rotationSpeed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">step</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span>
  <span class="token comment">// 颜色选择器</span>
  f<span class="token punctuation">.</span><span class="token function">addColor</span><span class="token punctuation">(</span>controlData<span class="token punctuation">,</span> <span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span>
  <span class="token comment">// checkbox</span>
  f<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>controlData<span class="token punctuation">,</span> <span class="token string">&quot;wireframe&quot;</span><span class="token punctuation">)</span>

  f<span class="token punctuation">.</span>domElement<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&quot;gui&quot;</span>

  f<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


  <span class="token comment">// 创建场景</span>
  <span class="token comment">// 场景能够让你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。</span>
  <span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 创建相机</span>
  <span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">PerspectiveCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建立方体</span>
  <span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token number">0x00ff00</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 网格</span>
  <span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
  cube<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 添加网格地面</span>
  <span class="token keyword">const</span> gridHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">GridHelper</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>gridHelper<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建渲染器</span>
    <span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将gui添加到页面</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
    <span class="token comment">// 将渲染器添加到页面</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加轨道控制器</span>
    <span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span>camera<span class="token punctuation">,</span> renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加阻尼</span>
    controls<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    controls<span class="token punctuation">.</span>dampingFactor <span class="token operator">=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>

    <span class="token comment">// 自动旋转</span>
    <span class="token comment">// controls.autoRotate = true;</span>
    <span class="token comment">// controls.autoRotateSpeed = 0.5;</span>

    <span class="token comment">// 进行渲染</span>
    <span class="token comment">// renderer.render(scene, camera);</span>

    <span class="token comment">// 让立方体动起来</span>
    <span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。</span>
      <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// cube.rotation.x += 0.01;</span>
      <span class="token comment">// cube.rotation.y += 0.01;</span>

      cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">+=</span> controlData<span class="token punctuation">.</span>rotationSpeed
      cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">+=</span>controlData<span class="token punctuation">.</span>rotationSpeed

      cube<span class="token punctuation">.</span>material<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Color</span><span class="token punctuation">(</span>controlData<span class="token punctuation">.</span>color<span class="token punctuation">)</span>
      material<span class="token punctuation">.</span>wireframe <span class="token operator">=</span> controlData<span class="token punctuation">.</span>wireframe

      <span class="token comment">// 轨道控制器更新</span>
      controls<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-style line-numbers-mode" data-ext="style" data-title="style"><pre class="language-style"><code>&lt;style&gt;
#gui {
  position: absolute;
  right: 0;
  width: 300px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","07gui参数调试工具.html.vue"]]),d=JSON.parse('{"path":"/posts/Three/07gui%E5%8F%82%E6%95%B0%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7.html","title":"gui参数调试工具","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-03-21T00:00:00.000Z","category":["three.js"],"tag":["gui参数调试工具"],"star":true,"description":"gui参数调试工具","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/starNotes/posts/Three/07gui%E5%8F%82%E6%95%B0%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"gui参数调试工具"}],["meta",{"property":"og:description","content":"gui参数调试工具"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-22T03:02:43.000Z"}],["meta",{"property":"article:author","content":"平安"}],["meta",{"property":"article:tag","content":"gui参数调试工具"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-22T03:02:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gui参数调试工具\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-22T03:02:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"平安\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1711076563000,"updatedTime":1711076563000,"contributors":[{"name":"chengongtao","email":"chengongtao@unicheers.com","commits":1}]},"readingTime":{"minutes":1.47,"words":441},"filePathRelative":"posts/Three/07gui参数调试工具.md","localizedDate":"2024年3月21日","excerpt":"\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>container<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};
