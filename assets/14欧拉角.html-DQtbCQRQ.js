import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Ct-Jaoij.js";const e={},p=t(`<h1 id="欧拉角" tabindex="-1"><a class="header-anchor" href="#欧拉角"><span>欧拉角</span></a></h1><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
	<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/addons/controls/OrbitControls.js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 钩子函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>


<span class="token comment">// 创建场景</span>
<span class="token comment">// 场景能够让你在什么地方，摆放什么东西来交给three.js来渲染，这是你放置物体，灯光和摄像机的地方</span>
<span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 添加背景颜色</span>
scene<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0x666666</span><span class="token punctuation">)</span>

<span class="token comment">// 创建相机（视角）</span>
<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">PerspectiveCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">// Y轴</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">10</span>  <span class="token comment">// X轴</span>

<span class="token comment">// 创建立方体</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// 创建材质</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">MeshPhongMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token number">0xff0000</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建网格</span>
<span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span>material<span class="token punctuation">)</span>

<span class="token comment">// cube.rotation.x = Math.PI / 2 // 欧拉角 轴旋转90度</span>
cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">,</span><span class="token number">0</span> <span class="token punctuation">)</span>

<span class="token comment">// 添加到场景</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span>

<span class="token comment">// 添加坐标辅助线</span>
<span class="token keyword">const</span> axesHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">AxesHelper</span><span class="token punctuation">(</span> <span class="token number">5</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span> axesHelper <span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

	<span class="token comment">// 创建渲染器</span>
	<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//</span>
	<span class="token comment">// 调整渲染器窗口大小</span>
	renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>

	document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
	<span class="token comment">// 添加轨道控制器</span>
	<span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span>camera<span class="token punctuation">,</span> renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 对轨道控制器改变视角时候进行监听</span>
	controls<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// console.log(&#39;触发change&#39;)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// 添加阻尼效果</span>
	controls<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span>
	controls<span class="token punctuation">.</span>dampingFactor <span class="token operator">=</span> <span class="token number">0.01</span>
	<span class="token comment">// 自动旋转</span>
	controls<span class="token punctuation">.</span>autoRotate <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token comment">// 速率</span>
	controls<span class="token punctuation">.</span>autoRotateSpeed <span class="token operator">=</span> <span class="token number">0.5</span>

	<span class="token comment">// 让立方体动起来</span>
	<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span>
		cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">0.01</span>
		<span class="token comment">// 轨道控制器更新</span>
		controls<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 进行渲染</span>
		renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","14欧拉角.html.vue"]]),d=JSON.parse('{"path":"/posts/Three/14%E6%AC%A7%E6%8B%89%E8%A7%92.html","title":"欧拉角","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-03-21T00:00:00.000Z","category":["three.js"],"tag":["欧拉角"],"star":true,"description":"欧拉角","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/starNotes/posts/Three/14%E6%AC%A7%E6%8B%89%E8%A7%92.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"欧拉角"}],["meta",{"property":"og:description","content":"欧拉角"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-22T03:02:43.000Z"}],["meta",{"property":"article:author","content":"平安"}],["meta",{"property":"article:tag","content":"欧拉角"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-22T03:02:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"欧拉角\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-22T03:02:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"平安\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1711076563000,"updatedTime":1711076563000,"contributors":[{"name":"chengongtao","email":"chengongtao@unicheers.com","commits":1}]},"readingTime":{"minutes":1.1,"words":331},"filePathRelative":"posts/Three/14欧拉角.md","localizedDate":"2024年3月21日","excerpt":"\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>container<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};
