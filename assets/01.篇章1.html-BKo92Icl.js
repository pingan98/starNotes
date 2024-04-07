import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as p,a as s,b as n,d as i,f as a}from"./app-BNShMN9s.js";const o={},r=a(`<h1 id="篇章1" tabindex="-1"><a class="header-anchor" href="#篇章1"><span>篇章1</span></a></h1><h2 id="css的三大特性" tabindex="-1"><a class="header-anchor" href="#css的三大特性"><span>css的三大特性</span></a></h2><h4 id="继承性-、层叠性、优先性" tabindex="-1"><a class="header-anchor" href="#继承性-、层叠性、优先性"><span>继承性 、层叠性、优先性</span></a></h4><h5 id="可继承的属性有-font-size-font-family-font-style-text-align-line-height-cursor等等" tabindex="-1"><a class="header-anchor" href="#可继承的属性有-font-size-font-family-font-style-text-align-line-height-cursor等等"><span>可继承的属性有： font-size;font-family;font-style;text-align;line-height cursor等等</span></a></h5><h2 id="超出文本省略css和js的实现方式-考虑兼容性" tabindex="-1"><a class="header-anchor" href="#超出文本省略css和js的实现方式-考虑兼容性"><span>超出文本省略css和js的实现方式, 考虑兼容性</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* 单行 */</span>
 <span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 多行*/</span>
 <span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-js实现文字超出隐藏其-核心逻辑就是循环添加文字-添加完之后判断滚动高度-scrollheight-是否大于可视高度-offsetheight-如果大于就把后面三个字符替换成" tabindex="-1"><a class="header-anchor" href="#js-js实现文字超出隐藏其-核心逻辑就是循环添加文字-添加完之后判断滚动高度-scrollheight-是否大于可视高度-offsetheight-如果大于就把后面三个字符替换成"><span>JS: js实现文字超出隐藏其 核心逻辑就是循环添加文字 添加完之后判断滚动高度(scrollHeight) 是否大于可视高度 (offsetHeight) 如果大于就把后面三个字符替换成...</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">textHidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本&#39;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>offsetHeight <span class="token operator">&lt;</span> box<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">)</span><span class="token punctuation">{</span>
        box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;...&#39;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> box<span class="token punctuation">.</span>innerHTML <span class="token operator">+</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rem-em-px-这些有什么区别" tabindex="-1"><a class="header-anchor" href="#rem-em-px-这些有什么区别"><span>rem,em,px 这些有什么区别</span></a></h2><ul><li>rem（根元素字体大小的倍数）rem 是相对单位，相对于根元素（即 元素）的字体大小。如果根元素的字体大小为 16 像素，那么 1rem 就等于 16 像素。如果根元素的字体大小为 20 像素，那么 1rem 就等于 20 像素。通过设置根元素的字体大小，可以方便地调整整个页面的大小。例如，font-size: 1.5rem; 表示字体大小为根元素字体大小的 1.5 倍。</li><li>em（相对于父元素字体大小的倍数）：em 也是相对单位，相对于父元素的字体大小。如果父元素的字体大小为 16 像素，那么 1em 就等于 16 像素。如果父元素的字体大小为 20 像素，那么 1em 就等于 20 像素。通过设置父元素的字体大小，可以影响其子元素的大小。例如，font-size: 1.2em; 表示字体大小为父元素字体大小的 1.2 倍。</li><li>px（像素）：px 是绝对单位，表示屏幕上的一个物理像素点。它是最常用的单位，具有固定的大小，不会根据其他因素而 改变。例如，font-size: 16px; 表示字体大小为 16 像素。</li></ul><p>总结来说，px是绝对单位，不会随其他因素改变；rem是相对于根元素字体大小的倍数，可以方便调整整个页面大小， em是相对于父元素字体大小的倍数，可以影响子元素大小</p><p>在实际应用中，可以根据需求选择合适的单位。对于响应式设计，使用rem 可以方便的调整整个页面的大小，对于局部样式 可以使用px或em 来控制具体的大小</p><h3 id="五-居中" tabindex="-1"><a class="header-anchor" href="#五-居中"><span>五：居中</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1、使用margin：0 auto;可以实现水平居中。
====
2、使用绝对定位来实现水平和垂直双方向居中。
====
水平居中：
position:absolute;
width:xxx;
left:0;
right:0;
margin:0 auto;
垂直居中：
position:absolute;
height:xxx;
top:0;
bottom:0;
margin:auto 0;
双方向居中：
position:absolute;
width:xxx;
height:xxx;
left:0;
right:0;
top:0;
bottom:0;
margin:auto;
3、使用表格（元素的大小可以自适应）
====
display: table-cell;
vertical-align: middle;
4、利用平移（元素的大小可以自适应）
====
position: absolute;
left: 50%;
top: 50%;
transform: translateX(-50%) translateY(-50%);
5、利用弹性盒（元素的大小可以自适应）
====
display: flex;
justify-content: center;
align-items: center;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flex-布局的理解" tabindex="-1"><a class="header-anchor" href="#flex-布局的理解"><span>flex 布局的理解</span></a></h2><p>Flex布局是CSS3中的一种新布局模式，它提供了更为灵活的方式来对容器内的项目进行排列、对齐和分配空间。Flex布局可以使容器内的项目沿着任何方向排列，并且可以调整其大小以最佳方式填充可用空间。</p><h4 id="flex容器属性-支持六个容器属性" tabindex="-1"><a class="header-anchor" href="#flex容器属性-支持六个容器属性"><span>Flex容器属性 （支持六个容器属性） ：</span></a></h4><pre><code>- flex-direction
- flex-warp
- flex-flow
- justify-content
- align-items
- align-content
</code></pre>`,18),d={href:"https://blog.csdn.net/qq_69183322/article/details/136102095",target:"_blank",rel:"noopener noreferrer"},u=a('<h2 id="flex-1" tabindex="-1"><a class="header-anchor" href="#flex-1"><span>flex:1</span></a></h2><h4 id="实际上相当于是flex-1-1-0-语法-flex-grow-shrink-basis" tabindex="-1"><a class="header-anchor" href="#实际上相当于是flex-1-1-0-语法-flex-grow-shrink-basis"><span>实际上相当于是flex：1 1 0 语法：flex：grow shrink basis；</span></a></h4><h4 id="这三个数字-分别对应三个属性-是一种简写方式-即-flex-grow-1-flex-shrink-1-flex-basis-0-grow-扩大-shrink-收缩-basis-基准值" tabindex="-1"><a class="header-anchor" href="#这三个数字-分别对应三个属性-是一种简写方式-即-flex-grow-1-flex-shrink-1-flex-basis-0-grow-扩大-shrink-收缩-basis-基准值"><span>这三个数字，分别对应三个属性，是一种简写方式，即：flex-grow: 1; flex-shrink: 1; flex-basis: 0% (grow：扩大 shrink：收缩 basis：基准值)</span></a></h4><ul><li>flex-grow 设置弹性项的生长系数 该值决定了容器中多余空间如何分配，该值越大，元素分配到的大小就越多 默认值：0</li><li>flex-shrink 设置弹性项的收缩系数 该值决定了容器空间不够时，如果减小弹性项的大小 该值越大，元素见效的大小就越多 -默认值：1</li><li>flex-basis-设置弹性项的主轴方向的基准大小 -默认值：auto</li></ul>',4),v={href:"https://juejin.cn/post/7339042131467747368",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="less、scss-等css-预处理器" tabindex="-1"><a class="header-anchor" href="#less、scss-等css-预处理器"><span>Less、Scss 等CSS 预处理器</span></a></h2><div class="hint-container info"><p class="hint-container-title">Less、Scss 等CSS 预处理器</p><ul><li><p>less 编写简单且简洁</p><ul><li>Less（Leaner Style Sheets）是一种向后兼容的 CSS 扩展，它允许开发者使用类似于编程的方式来编写 CSS。</li><li>Less 引入了变量、混合（类似于函数的结构）、嵌套规则等特性，极大地提高了代码的可重用性和可维护性。</li><li>它可以在客户端或服务器端（如 Node.js）运行，这为开发者提供了灵活的使用方式。</li></ul></li><li><p>scss 功能丰富且强大</p><ul><li>SCSS（Sassy CSS）是 Sass 的一个版本，它使用类似于 CSS 的语法，这意味着任何有效的 CSS 代码都是合法的 SCSS 代码。</li><li>SCSS 不仅保留了 Less 的所有优点，还增加了诸如条件语句、循环、函数等更高级的功能。</li><li>这使得 SCSS 在处理复杂项目时显得更加得心应手</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 相同点
  - 预处理功能： 两者都提供了变量、混合、函数、嵌套规则等功能
  - 编译到CSS：它们都需要编译成普通css才能在浏览器中使用
  - 社区支持：less和scss都有着活跃的开发社区和丰富的文档资源
- 不同点
  - 编译环境 less是基于javaScript是在客户端进行处理的  sass是基于Ruby，是在服务端进行处理的
  - 语法差异 less定义变量使用前缀@；sass声明变量使用前缀 $
    \`\`\`less
      //Less定义变量：
      @color: #4D926F;
      div {
      color: @color;
      }

      //Scss定义变量
      $blue : #1875e7;　
      div {
        color : $blue;
      }
    \`\`\`
  - 变量插值 less采用@{xxx}的形式，scss采用\${xxx}形式
    \`\`\`less
    //Less
      @primary-color: #333;
      background-color: @{primary-color};

      //Scss
      $primary-color: #333;
      background-color: #{$primary-color};

    \`\`\`
  - 功能差异 less提供了基本的预处理功能，如变量、混合和嵌套规则适用于轻量级
            scss拥有更高级功能，如条件语句、循环、函数等 更适合复杂的项目和大型应用
  \`\`\`scss
  // if...else
  $primary-color: #333;

  button-style {
    @if $primary-color == #333 {
      background-color: red;
    } @else {
      background-color: blue;
    }
  }

  //for循环
  @for $i from 1 through 3 {
    .item-#{$i} {
      width: 100px * $i;
    }
  }

  //自定义函数
  @function double($number) {
    @return $number * 2;
  }

  .element {
    width: double(50px);
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="在构建一个新网站时-你如何利用html5和css3特性来提升页面语义化性和访问性" tabindex="-1"><a class="header-anchor" href="#在构建一个新网站时-你如何利用html5和css3特性来提升页面语义化性和访问性"><span>在构建一个新网站时，你如何利用HTML5和CSS3特性来提升页面语义化性和访问性</span></a></h2><ul><li>合理使用语义化标签（HTML中有很多语义化标签，如header、section、nav、footer等，这些标签可以让网页的结构更加清晰，使得搜索引擎更好地理解网页的内容。）</li><li>保持HTML的简洁（在编写HTML时，应尽量保持HTML的简洁，不要出现嵌套过深的标签，也不要出现过多的冗余代码，这样可以让网页的加载速度更快。）</li><li>充分利用HTML5的新特性 （HTML5引入了很多新的特性，如video、audio、canvas等，这些特性可以使得网页的功能更加丰富，也可以提高用户的体验。）</li><li>避免使用过多的样式（过多的样式不仅会降低网页的加载速度，也会增加代码的复杂性，使得网页难以维护。应尽量避免使用过多的样式，而是使用CSS的继承和层叠机制来达到样式的统一。）</li><li>使用响应式布局 （随着移动设备的普及，越来越多的用户通过移动设备来访问网站和应用程序。因此，在设计网页时应使用响应式布局，使得网页可以在不同的设备上都有良好的显示效果。）</li><li>利用CSS3的新特性 （CSS3引入了很多新的特性，如渐变、阴影、动画等，这些特性可以使得网页的样式更加丰富、生动。）</li></ul><h2 id="css3有哪些策略和技术提升页面可访问性和用户体验" tabindex="-1"><a class="header-anchor" href="#css3有哪些策略和技术提升页面可访问性和用户体验"><span>CSS3有哪些策略和技术提升页面可访问性和用户体验</span></a></h2><ul><li>为链接增加辅助信息</li><li>使用高对比度的颜色方案</li><li>使用可调节字体大小的单位</li><li>使用适当的语言声明</li><li>避免使用纯图片的文本内容</li><li>使用适量的语义化HTML 标记<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  例如：<span class="token operator">&lt;</span>nav<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>aside<span class="token operator">&gt;</span> 等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>使用ARIA属性来改善语义<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  aria<span class="token operator">-</span>label：用于为元素提供文本描述。
  aria<span class="token operator">-</span>describedby：用于指定元素所关联的文本内容。
  aria<span class="token operator">-</span>hidden：用于指定元素是否应该被屏幕阅读器忽略。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="css原子化" tabindex="-1"><a class="header-anchor" href="#css原子化"><span>css原子化</span></a></h2><p>释义：原子化 CSS(Atomic CSS) 是一种用于设计和构建现代 Web 应用程序的 CSS 框架。它提出了一种将 CSS 拆分为更小、更可维护的部分的方法，以便更好地组织和管理 CSS 代码。在原子化 CSS 中，CSS 组件被拆分为更小的部分，这些部分可以独立地编辑、测试和重用。这些原子通常是单个像素或极其微小的变化，例如颜色、大小、位置等。这些原子可以组合成更复杂的组件，例如按钮、表单、图标等。原子化 CSS 有助于减少代码量，提高代码的可维护性和可重用性，同时还有助于提高开发效率。它鼓励开发人员将 CSS 拆分为更小、更可维护的部分，以便更好地组织和管理 CSS 代码，从而帮助 Web 应用程序更好地适应不同的设备和屏幕大小</p><h3 id="为什么要用原子化css及好处" tabindex="-1"><a class="header-anchor" href="#为什么要用原子化css及好处"><span>为什么要用原子化CSS及好处</span></a></h3><p>使用原子化CSS可以让我们不用去考虑CSS类名，不用这个DIV考虑起什么类名，那个SPAN起什么类名，而且能减少代码量，节约写代码的时间，较少包的大小，</p><ul><li><p>减少代码量：将 CSS 拆分为更小的部分可以减少代码量，从而使应用程序更易于维护和扩展。</p></li><li><p>提高可维护性：将 CSS 拆分为更小的部分可以使代码更易于理解、编辑和修改，从而大大提高代码的可维护性。</p></li><li><p>提高可重用性：将 CSS 拆分为更小的部分可以使代码更易于重用，从而提高应用程序的可重用性。</p></li><li><p>改善开发效率：将 CSS 拆分为更小的部分可以使开发人员更容易地组织和管理 CSS 代码，从而大大提高开发效率。</p></li><li><p>适应不同设备和屏幕大小：原子化 CSS 可以帮助 Web 应用程序更好地适应不同的设备和屏幕大小，从而提高应用程序 的可用性和用户体验。</p></li></ul><p>Taiwind CSS在Vite(vue3)中使用</p><ul><li>1.安装</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//安装</span>
npm install <span class="token operator">-</span><span class="token constant">D</span> tailwindcss postcss autoprefixer
<span class="token comment">//生成配置文件</span>
npx tailwindcss init <span class="token operator">-</span>ps

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.安装后还是不可以用的，还需要配置路径，在tailwind.config.js文件中的content增加路径</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;tailwindcss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;./index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;./src/**/*.{js,ts,jsx,tsx}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.新建一个css文件，命名没要求，我这里是在src新建的index.css文件</li><li>4.在index.css引入Tailind的样式</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>5.在main.js引入index.css</li><li>6.启动服务 在业务中引用对应的css名就可有css样式</li></ul>`,19);function b(h,k){const e=t("ExternalLinkIcon");return c(),p("div",null,[r,s("p",null,[n("引用"),s("a",d,[n("Flex布局 （上万字）超详细讲解"),i(e)])]),u,s("p",null,[s("a",v,[n("掘金文章引用白话文理解"),i(e)])]),m])}const f=l(o,[["render",b],["__file","01.篇章1.html.vue"]]),S=JSON.parse('{"path":"/posts/Study/01.%E7%AF%87%E7%AB%A01.html","title":"篇章1","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-03-26T07:00:00.000Z","category":["篇章1"],"tag":["css"],"star":true,"description":"篇章1 css的三大特性 继承性 、层叠性、优先性 可继承的属性有： font-size;font-family;font-style;text-align;line-height cursor等等 超出文本省略css和js的实现方式, 考虑兼容性 JS: js实现文字超出隐藏其 核心逻辑就是循环添加文字 添加完之后判断滚动高度(scrollHeigh...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/starNotes/posts/Study/01.%E7%AF%87%E7%AB%A01.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"篇章1"}],["meta",{"property":"og:description","content":"篇章1 css的三大特性 继承性 、层叠性、优先性 可继承的属性有： font-size;font-family;font-style;text-align;line-height cursor等等 超出文本省略css和js的实现方式, 考虑兼容性 JS: js实现文字超出隐藏其 核心逻辑就是循环添加文字 添加完之后判断滚动高度(scrollHeigh..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:51:49.000Z"}],["meta",{"property":"article:author","content":"平安"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:published_time","content":"2024-03-26T07:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:51:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"篇章1\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-26T07:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:51:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"平安\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"css的三大特性","slug":"css的三大特性","link":"#css的三大特性","children":[]},{"level":2,"title":"超出文本省略css和js的实现方式, 考虑兼容性","slug":"超出文本省略css和js的实现方式-考虑兼容性","link":"#超出文本省略css和js的实现方式-考虑兼容性","children":[{"level":3,"title":"JS: js实现文字超出隐藏其 核心逻辑就是循环添加文字 添加完之后判断滚动高度(scrollHeight)  是否大于可视高度 (offsetHeight)  如果大于就把后面三个字符替换成...","slug":"js-js实现文字超出隐藏其-核心逻辑就是循环添加文字-添加完之后判断滚动高度-scrollheight-是否大于可视高度-offsetheight-如果大于就把后面三个字符替换成","link":"#js-js实现文字超出隐藏其-核心逻辑就是循环添加文字-添加完之后判断滚动高度-scrollheight-是否大于可视高度-offsetheight-如果大于就把后面三个字符替换成","children":[]}]},{"level":2,"title":"rem,em,px 这些有什么区别","slug":"rem-em-px-这些有什么区别","link":"#rem-em-px-这些有什么区别","children":[{"level":3,"title":"五：居中","slug":"五-居中","link":"#五-居中","children":[]}]},{"level":2,"title":"flex 布局的理解","slug":"flex-布局的理解","link":"#flex-布局的理解","children":[]},{"level":2,"title":"flex:1","slug":"flex-1","link":"#flex-1","children":[]},{"level":2,"title":"Less、Scss 等CSS 预处理器","slug":"less、scss-等css-预处理器","link":"#less、scss-等css-预处理器","children":[]},{"level":2,"title":"在构建一个新网站时，你如何利用HTML5和CSS3特性来提升页面语义化性和访问性","slug":"在构建一个新网站时-你如何利用html5和css3特性来提升页面语义化性和访问性","link":"#在构建一个新网站时-你如何利用html5和css3特性来提升页面语义化性和访问性","children":[]},{"level":2,"title":"CSS3有哪些策略和技术提升页面可访问性和用户体验","slug":"css3有哪些策略和技术提升页面可访问性和用户体验","link":"#css3有哪些策略和技术提升页面可访问性和用户体验","children":[]},{"level":2,"title":"css原子化","slug":"css原子化","link":"#css原子化","children":[{"level":3,"title":"为什么要用原子化CSS及好处","slug":"为什么要用原子化css及好处","link":"#为什么要用原子化css及好处","children":[]}]}],"git":{"createdTime":1711508155000,"updatedTime":1712469109000,"contributors":[{"name":"chengongtao","email":"chengongtao@unicheers.com","commits":12}]},"readingTime":{"minutes":9.84,"words":2951},"filePathRelative":"posts/Study/01.篇章1.md","localizedDate":"2024年3月26日","excerpt":"\\n<h2>css的三大特性</h2>\\n<h4>继承性 、层叠性、优先性</h4>\\n<h5>可继承的属性有： font-size;font-family;font-style;text-align;line-height cursor等等</h5>\\n<h2>超出文本省略css和js的实现方式, 考虑兼容性</h2>\\n<div class=\\"language-css\\" data-ext=\\"css\\" data-title=\\"css\\"><pre class=\\"language-css\\"><code><span class=\\"token comment\\">/* 单行 */</span>\\n <span class=\\"token selector\\">.box</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">overflow</span><span class=\\"token punctuation\\">:</span> hidden<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">text-overflow</span><span class=\\"token punctuation\\">:</span>ellipsis<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">white-space</span><span class=\\"token punctuation\\">:</span> nowrap<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token comment\\">/* 多行*/</span>\\n <span class=\\"token selector\\">.box</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">overflow</span><span class=\\"token punctuation\\">:</span>hidden<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">text-overflow</span><span class=\\"token punctuation\\">:</span> ellipsis<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> -webkit-box<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">-webkit-line-clamp</span><span class=\\"token punctuation\\">:</span> 2<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">-webkit-box-orient</span><span class=\\"token punctuation\\">:</span> vertical<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{f as comp,S as data};
