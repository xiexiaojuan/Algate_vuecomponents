<!-- eslint-disable -->
<template>
    <div id="html5">
        <article>
            <h2>HTML5-新增和删除标签</h2>

            使用HTML5新标签进行布局的意义</br>

            1.提升语义化特性和网页的质量</br>
            2.减少了用于css调用的class和id属性</br>
            3.对搜索引擎更友好</br>

            <section>
                <h3>结构标签</h3>
                <article>
                    相当于有意义的div标签: </br>
                    article：用于定义一篇文章</br>
                    header：定义页面的头部</br>
                    footer：</br>
                    nav：导航条链接</br>
                    section：定义一个区域</br>
                    aside：定义页面内容的侧边栏</br>
                    hgroup：定义文件中一个区块的相关信息</br>
                    figure：定义一组媒体内容以及它们的标题（可以用于包裹canvas，video等多媒体标签）</br>
                    figcaption：用于figure标签内定义媒体的标题</br>
                    footer：定义一个页面区域的底部</br>
                    dialog：定义一个对话框（例如微信的对话框）</br>

                    补充一：header/section/footer/aside/article/footer这几个标签最好不要嵌套在里面，放在最外边</br>
                    补充二：使用层级(header=section=footer：写在外层)>(aside/article/figure/hgroup/nav：写在内层)</br>
                </article>
            </section>
            <section>
                <hgroup>
                    <h3>表单元素和表单属性</h3>
                    <h4>先说一个html5中表单新增的一个功能，在我们之前的html中，表单元素必须放在form元素所包含的里面，在html5中，可以把他们写在页面上的任何一个地方，然后给该元素增加一个form属性，form属性的值为form表单的id</h4>
                    <pre>
&lt;form method="get" id="test"&gt;
    &lt;input type="text" name="name"/&gt;
    &lt;input type="password" name="password"/&gt;
    &lt;input type="submit" value="提交"&gt;
&lt;/form&gt;
&lt;input type="text" name="confirm" form="test"&gt;
                    </pre>
                    email：提交表单的时候验证输入值是否满足email的格式 </br>
                    <input type="email" name="email"/></br>
                    url：提交表单的时候验证输入值是否满足url的格式</br>
                    <input type="url" name="url"/></br>
                    number：根据你的设置提供选择数字的功能，其中min为最小值，max为最大值，value为默认值，step为点击箭头时数字的变化量，max、min、step、value均可不写，目前某些浏览器还不支持。</br>
                    <input type="number" name="number" min=2 max=100 step=5 value="15"/></br>
                    range：会以一个滑块的形式表现包含一定范围内数字值的输入域，max为最大值，min为最小值，value为默认值，如果没有设置max和min，默认值是1-100</br>
                    <input type="range" name="range" min=20 max=200 value="60"/></br>
                    date：选取日、月、年</br>
                    <input type="date" name="date"/></br>
                    month：选取月、年</br>
                    <input type="month" name="month"/></br>
                    week：选取周、年</br>
                    <input type="week" name="week"/></br>
                    time：选取小时、分钟</br>
                    <input type="time" name="time"/></br>
                    datetime：选取时间、日、月、年(UTC时间)（我这里浏览器显示不出效果）</br>
                    <input type="datetime" name="datetime"/></br>
                    datetime-local：选取时间、日、月、年(本地时间)</br>
                    <input type="datetime-local" name="datetime-local"/></br>
                    search：用于搜索域，若加上result="s"属性，则会在搜索框前面加一个搜索图标（我这里浏览器显示不出效果）</br>
                    <input type="search" name="search" result="s"/></br>
                    tel：验证输入的是否是电话号码的格式（我这里浏览器显示不出效果）</br>
                    <input type="tel" name="tel" /></br>
                    color：color类型会提供颜色拾取器，供用户选择颜色，并将用户选择的颜色填充到此元素中</br>
                    <input type="color" name="color"/></br>

                    <h4>新增input属性(部分容易理解的就不进行代码演示了)，后面为支持该属性的元素</h4>
                    autofocus：在打开页面时使元素自动获取焦点</br>
                    //input,button,select,textarea</br>

                    placeholder: 在用户输入时进行提示</br>
                    // input,textarea</br>

                    form：这篇文章的开头就有这个属性，它用于表明元素属于哪个表单，无论元素的位置在哪里，所属表单都能获取该元素的值</br>
                    //input,output,button,select,textarea,fieldset</br>

                    required：表明该元素是必填项，当提交表单的时候会自动验证该元素的内容是否不为空</br>
                    //input,textarea</br>

                    max/min/step：限制值的输入范围，以及值的变化程度。上面的新增number元素有介绍。</br>
                    //input</br>

                    autocomplete：使form元素或者input元素拥有自动完成功能，既记录用户之前输入的值，关闭为off，默认为on。</br>
                    //form,input</br>

                    <h4>表单重写属性</h4>
                    formaction:重写表单的action属性</br>

                    formenctype:重写表单的enctype属性。</br>

                    enctype属性管理的是表单的MIME编码，MIME就是一种电子邮件传输的互联网标准，表明传递的信息类型和编码，共有三个值可选：</br>

                    1，application/x-www-form-urlencoded（默认），设置表单传输的编码。</br>

                    2，multipart/form-data，指定传输数据的特殊类型，主要就是上传的非文本内容，比如文件、图片。</br>

                    3，text/plain，纯文本传输。</br>

                    formmethod: 重写表单的method属性</br>

                    formnovalidate:重写表单的novalidate属性</br>

                    formtarget：重写表单的target属性。</br>
                    比如:
                    multiple:规定输入字段可选择多个值</br>
                    list：list属性的值为datalist元素的id，datalist元素类似于选择框，在文本框获得焦点的时候以提示输入的方式显示。</br>
                    pattern:验证input输入域的格式，即正则表达式。</br>
                    <input type="text" name="name" pattern="[A-z0-9]{8}" required/>
                </hgroup>
                <article>
                    相当于有意义的div标签: </br>
                    article：用于定义一篇文章</br>
                    header：定义页面的头部</br>
                    footer：</br>
                    nav：导航条链接</br>
                    section：定义一个区域</br>
                    aside：定义页面内容的侧边栏</br>
                    hgroup：定义文件中一个区块的相关信息</br>
                    figure：定义一组媒体内容以及它们的标题（可以用于包裹canvas，video等多媒体标签）</br>
                    figcaption：用于figure标签内定义媒体的标题</br>
                    footer：定义一个页面区域的底部</br>
                    dialog：定义一个对话框（例如微信的对话框）</br>

                    补充一：header/section/footer/aside/article/footer这几个标签最好不要嵌套在里面，放在最外边</br>
                    补充二：使用层级(header=section=footer：写在外层)>(aside/article/figure/hgroup/nav：写在内层)</br>
                </article>
            </section>
            <section>
                <h3>多媒体标签</h3>
                <article>
                    video</br>
                    audio </br>
                    source：定义媒体资源</br>

                    canvas</br>

                    embed：定义外部可交互内容和插件，例如flash</br>
                </article>
            </section>
            <section>
                <h3>Web应用标签</h3>
                <article>
                    一.meter：实时状态显示：气压、气温等（目前只支持谷歌和opera）</br>
                    属性：</br>
                    1.value：定义目前所处状态（数值）</br>
                    2.min：最低数值</br>
                    3.max：最高数值</br>
                    4.low：最低显示（低于该值为为黄色）</br>
                    5.high：最高显示（高于该值为黄色）</br>
                    6.optimum：最优值</br>
                    <meter value='220' min='20' max='380' low='200' high='240' optimum='220'></meter>
                    </br>
                    二.progress：显示任务过程：安装、加载等（目前只支持谷歌，火狐和opera）</br>
                    属性</br>
                    1.value：当前的状态值</br>
                    2.max：最大状态值</br>
                    <progress max='100' value='50'></progress>
                </article>
            </section>

            <section>
                <h3>列表标签</h3>
                <article>
                    一.datalist：为input标签定义一个下拉列表，配合option（兼容火狐和谷歌）</br>
                    用法：input标签中的list属性的值和datalist标签中的id必须相同，才能进行下拉拓展</br>
                    <input type="text" placeholder="111" list='phonelist'>
                    <datalist id="phonelist">
                        <option value="三星"></option>
                        <option value="华为"></option>
                        <option value="苹果"></option>
                        <option value="小米"></option>
                        <option value="大春"></option>
                    </datalist></br>
                    二.details：定义一个元素的详细内容，配合summary标签，用于展示省略的信息（兼容谷歌和其他一些高版本浏览器）
                    <details>
                        <summary>很多的字</summary>
                        永远相信美好的事情即将发生！相信美好，珍惜当下，一个人的世界，装不下那么多惊天动地，我们所需要的，不过是一份恰到好处的幸福。
                    </details>
                </article>
            </section>
            <section>
                <h3>注释标签(用于类似注释拼音之类，会显示出来)</h3>
                <article>
                    一.ruby和rt标签</br>
                    用法：用ruby标签将字括起来，然后rt标签填写注释信息
                    <p>注<ruby>释<rt>shi</rt></ruby>标签</p>

                    二.mark：用于标黄（所有主流浏览器都支持，IE要9以上）
                    <p><mark>aaaaa</mark>aaaaa</p>

                </article>
            </section>
        </article>
    </div>
</template>
<script>
export default {
    name: 'html5',
    data () {
        return {
            src: ''
        };
    }
};
</script>
