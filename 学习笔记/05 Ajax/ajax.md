[toc]
# 1. 服务器基本概念与初始Ajax
>能够知道和服务器相关的基本概念
能够知道客户端和服务器通信的过程
能够知道数据也是一种资源
能够说出什么是Ajax以及应用场景
能够使用jQuery中的Ajax函数请求数据
能够知道接口和接口文档的概念

## 1.1 客户端与服务器
![](images/QQ截图20220813153043.png)
**上网的目的**

本质：通过互联网的形式来获取资源和消费资源

**服务器**

上网过程中，专门存放资源和对外提供资源的电脑，叫做服务器

**客户端**
上网过程中，负责获取和消费资源的电脑，叫客户端

## 1.2 URL地址
URL (全称是UniformResourceLocator)文叫**统一资源定位符**， 用于标识互联网上每个资源的唯一存放位置。

浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源。(网址)
![](images/QQ截图20220813153500.png)

**URL地址一般由三部组成:**

>① 客户端与服务器之间的通信协议
② 存有该资源的服务器名称
③ 资源在服务器上具体的存放位置


## 1.3 客户端域服务器的通信过程
**图解**
![](images/QQ截图20220813154309.png)
注意:
① 客户端与服务器之间的通信过程，分为**请求-处理-响应**三个步骤。
② 网页中的每一个资源，都是通过请求-处理-响应的方式从服务器获取回来的。

**基于浏览器的开发者工具分析**
![](images/QQ截图20220813155609.png)

## 1.4 服务器对外提供了哪些资源

**网页中常见资源** ： 文字，图片，音频，视频..， 数据是重要资源

**网页中如何请求数据**
数据，也是服务器对外提供的一种资源。只要是资源，必然要通过请求-处理-响应的方式进行获取。
![](images/QQ%E6%88%AA%E5%9B%BE20220813160629.png)
如果要在网页中请求服务器上的数据资源，则需要用到XMLHttpRequest对象。
XML HttpRequest (简称xhr)    是浏览器提供的js成员,通过它，可以请求服务器上的数据资源。
```javascript
最简单的用法  let xhrObj = new XMLHttpRequest()
```

**资源请求方式**
客户端请求服务器时，请求的方式有很多种，最常见的两种请求方式分别为get和post请求。

● get 请求通常用于获取服务端资源(向服务器要资源)
    例如:根据URL地址,从服务器获取HTML文件、CsS 文件、js文件、 图片文件、数据资源等

● post 请求通常用于向服务器提交数据(往服务器发送资源)
    例如:登录时向服务器提交的登录信息、注册时向服务器提交的注册信息、添加用户时向服务器提交的用户信息等各种数据提交操作

## 1.5 了解Ajax
**是什么？**
Ajax的全称是Asynchronous Javascript And XML (异步JavaScript 和XML)。
通俗的理解:  在网页中利用XMLHttpRequest对象和服务器进行数据交互的方式，就是Ajax。

**为什么学**
之前所学的技术，只能把网页做的更美观漂亮，或添加一些动画效果，
![](images/QQ截图20220813160629.png)
>但是，Ajax能让我们轻松实现网页与服务器之间的数据交互。

**典型应用场景**
![](images/QQ截图20220813162304.png)
![](images/QQ截图20220813162414.png)
![](images/QQ截图20220813162532.png)
![](images/QQ截图20220813162545.png)

## 1.6 jQuery中的Ajax
浏览器中提供的XMLHttpRequest用法比较复杂,所以jQuery对XMl HttpRequest进行了封装,提供了一系列Ajax相关的函数,极大地降低了Ajax的使用难度。

jQuery中发起Ajax请求最常用的三个方法如下:
```javascript
●$.get()
●$.post()
●$.ajax(
``` 

### 1. \$.get()函数的语法
jQuery中$.get0函数的功能单一，专用来发起get请求，从而将服务器上的资源请求到客户端来进行使用。

语法如下:

```javascript
$. get (url, [data], [callback])
```

参数含义:
|参数名|参数类型|是否必选|说明|
| --- | --- | --- | --- |
|url|string|是|要请求的资源地址|
|data|object|否|请求资源期间要佚带的参数|
|callback|function|否|请求成功时的回调函数|

**\$.get() 发起带参数的请求**

```javascript
$.get('http:/ /www. liulongbin.top:3006/api/getbooks', { id: 1 }, function(res) {
        console.log(res)
})
```
![](images/QQ截图20220813165240.png)
**\$.get() 发起不带参数的请求**

```javascript
$.get('http:/ /www. liulongbin.top:3006/api/getbooks',function(res) {
        console.log(res)
})
```

### 2. \$.post()函数的语法
jQuery中$.post()函数的功能单一， 专用来发起post求，从而向服务器提交数据。

语法如下:
```javascript
$.post(ur1，[data], [callback])
```

参数含义:
|参数名|参数类型|是否必选|说明|
| --- | --- | --- | --- |
|url|string|是|提交数据的地址|
|data|object|否|要提交的数据|
|callback|function|否|数据提交成功时的回调函数|

```javascript
$.post(
    'http: //www.liulongbin.top:3006/api/addbook', //请求的URL地址
    {bookname:'水浒传',author:'施耐庵',publisher:'上海图书出版社’},  //提交数据
    function(res) { //回调函数
    console.log(res)
})
```
### 3. \$.ajax()函数的语法
相比于\$.get()和\$.post()函数, jQuery中提供的$.ajax()函数，是一个功能比较综合的函数， 它允许我们对Ajax请求进行更详细的配置。

语法如下:
```javascript
$.ajax({
    type:'',   // 请求的方式，例如GET或POST
    url :'',   //请求的URL 地址
    data: { }, // 这次请求要携带的数据
    success: function(res) { } //请求成功之后的回调函数
    })
```
参数含义:
|参数名|参数类型|是否必选|说明|
| --- | --- | --- | --- |
|url|string|是|提交数据的地址|
|data|object|否|要提交的数据|
|callback|function|否|数据提交成功时的回调函数|

## 1.7 接口
### 1. 接口的概念
使用Ajax请求数据时，被请求的URL地址，就叫做数据接口(简称接口)。同时，每个接口必须有请求方式。

### 2. 分析接口的请求过程
>例如:
http://www.liulongbin.top:3006/api/getbooks      获取图书列表的接口 (GET请求)
http://www.liulongbin.top:3006/api/addbook       添加图书的接口 (POST请求)

1. 通过GET方式请求接口的过程
![](images/QQ截图20220813180143.png)   
2. 通过POST方式请求接口的过程
![](images/QQ截图20220813181517.png)

### 3. 接口测试工具
1.什么是接口测试工具
为了验证接口能否被正常被访问，我们常常需要使用接口测试工具，来对数据接口进行检测。

好处:  接口测试工具能让我们在不写任何代码的情况下，对接口进行调用和测试。

2.下载并安装PostMan (vscode使用postcode 插件)
访问PostMan的官方下载网址 https://www.getpostman.com/downloads/  下载所需的安装程序后，直接安装即可。

①  了解PostMan界面的组成部分
![](images/QQ截图20220813182636.png)
②  使用PostMan测试GET接口
![](images/QQ截图20220813183215.png)
③  使用PostMan测试POST接口
![](images/QQ截图20220813184920.png)

### 4. 接口文档
1. 什么是接口文档
接口文档，顾名思义就是接口的说明文档，它是我们调用接口的依据。好的接口文档包含了对接口URL，参数以及输出内容的说明，
我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用。

2. 接口文档的组成部分
接口文档可以包含很多信息，也可以按需进行精简，不过，一个合格的接口文档,应该包含以下6项内容，从而为接口的调用提供依据:

>    ① 接口名称: 用来标识各个接口的简单说明，如登录接口，获取图书列表接口等。
    ② 接口URL:   接口的调用地址。
    ③ 调用方式:   接口的调用方式，如GET或POST。
    ④ 参数格式:   接口需要传递的参数，每个参数必须包含参数名称、参数类型、否必选、参数说明这4项内容。
    ⑤ 响应格式:   接口的返回值的详细描述，一般包含数据名称、数据类型、说明3项内容。
    ⑥ 返回示例 (可选) :  通过对象的形式，列举服务器返回数据的结构。

3.接口文档示例
![](images/QQ截图20220813193134.png)
![](images/QQ截图20220813193150.png)
![](images/QQ截图20220813193238.png)

## 1.8 ⭐案例–图书管理
![](images/QQ截图20220813193511.png)
![](images/QQ截图20220813193611.png)
![](images/QQ截图20220813202548.png)

```javascript
<body style="padding: 30px;">
<!-- 图书的Panel面板 -->
<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">添加新图书</h3>
    </div>
    <div class="panel-body form-inline">
        <div class="input-group">
            <div class="input-group-addon">书名</div>
            <input type="text" class="form-control" id="iptBookname" placeholder="请输入">
        </div>
        <div class="input-group">
            <div class="input-group-addon">作者</div>
            <input type="text" class="form-control" id="iptAuthor" placeholder="请输入作者">
        </div>
        <div class="input-group">
            <div class="input-group-addon">出版社</div>
            <input type="text" class="form-control" id="iptPublisher" placeholder="请输入出版社">
        </div>
        <button id="btnAdd" class="btn  btn-primary">添加</button>
    </div>
</div>
<!-- 图书的表格 -->
<table class="table table-bordered table-hover">
    <thead>
        <tr>
            <th>id</th>
            <th>书名</th>
            <th>作者</th>
            <th>出版社</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody id="bookBody">
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
<script>
    $(function () {
        getBookList();
        /* 获取图书 */
        function getBookList() {
            $.get('http://www.liulongbin.top:3006/api/getbooks', function (res) {
                // console.log(res.data);
                if (res.status !== 200) return alert("获取数据列表失败！");
                var rows = [];
                $.each(res.data, function (i, item) {
                    rows.push("<tr> <td>" + item.id + "</td>  <td>" + item.bookname + "</td>  <td>" + item.author + "</td>  <td>" + itempublisher + "</td> <td>  <a href='javascript:;' class='del'  data-id=" + item.id + ">删除</a></td> </tr>")
                    // $("#bookBody").empty().append(rows)
                })
                // console.log(rows);
                $("#bookBody").empty().append(rows.join(""));/* 拼接字符串 */
            })
        }
        /* 通过代理方式为动态添加的元素绑定点击事件*/
        $("#bookBody").on("click", ".del", function () {
            var id = $(this).attr("data-id");
            console.log(id);
            $.get('http://www.liulongbin.top:3006/api/delbook', { id: id }, function (res) {
                if (res.status !== 200) return alert("删除图书失败！");
                getBookList();
            })
        })
        /*添加图书  */
        $("#btnAdd").on("click", function () {
            var bookname = $("#iptBookname").val().trim();
            var author = $("#iptAuthor").val().trim();
            var publisher = $("#iptPublisher").val().trim();
            if (bookname.length <= 0 || author.length <= 0 || publisher.length <= 0) {
                return alert("请填写完整的图书信息！");
            }
            $.ajax({
                type: 'POST',
                url: 'http://www.liulongbin.top:3006/api/addbook',
                data: { bookname: bookname, author: author, publisher: publisher },
                success: function (res) {
                    if (res.status !== 201) return alert("添加图书失败!");
                    getBookList();
                    $("#iptBookname").val('');
                     $("#iptAuthor").val('');
                     $("#iptPublisher").val('');
                }
            })
        })
    })
</script>
</body>
```

## 1.9 ⭐案例–聊天机器人

![](images/QQ截图20220813213326.png)
![](images/QQ截图20220814093759.png)

```javascript
 // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui()

  // 为发送按钮绑定鼠标点击事件
  $('#btnSend').on('click', function () {
    var text = $('#ipt').val().trim()
    if (text.length <= 0) {
      return $('#ipt').val('')
    }
    // 如果用户输入了聊天内容，则将聊天内容追加到页面上显示
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
    $('#ipt').val('')
    // 重置滚动条的位置
    resetui()
    // 发起请求，获取聊天内容
    getMsg(text)
  })

  // 获取聊天机器人发送回来的消息
  function getMsg(text) {
    $.ajax({
      method: 'GET',
      url: 'http://ajax.frontend.itheima.net:3006/api/robot',
      data: {
        spoken: text
      },
      success: function (res) {
        // console.log(res)
        if (res.message === 'success') {
          // 接收聊天消息
          var msg = res.data.info.text
          $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
          // 重置滚动条的位置
          resetui()
          // 调用 getVoice 函数，把文本转化为语音
          getVoice(msg)
        }
      }
    })
  }

  // 把文字转化为语音进行播放
  function getVoice(text) {
    $.ajax({
      method: 'GET',
      url: 'http://ajax.frontend.itheima.net:3006/api/synthesize',
      data: {
        text: text
      },
      success: function (res) {
        // console.log(res)
        if (res.status === 200) {
          // 播放语音
          $('#voice').attr('src', res.voiceUrl)
        }
      }
    })
  }

  // 为文本框绑定 keyup 事件
  $('#ipt').on('keyup', function (e) {
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
      // console.log('用户弹起了回车键')
      $('#btnSend').click()
    }
  })
```

# 2. form表单
>能够说出form表单的常用属性
能够知道如何阻止表单的默认提交行为
能够知道如何使用jQuery快速获取表单数据
能够知道如何安装和使用模板引擎
能够知道模板引擎的实现原理

## 2.1 form表单的基本使用
### 1. 什么是表单
表单在网页中主要负责数据采集功能。
HTML中的\<form>标签，就是用于采集用户输入的信息，并通过\<form>标签的提交操作，把采集到的信息提交到服务器端进行处理。

### 2. 表单的组成
1. 表单标签
2. 表单域
    包含了文本框、密码框、隐藏域、多行文本框、复选框、单选框、下拉选择框和文件上传框等。
3. 表单按钮

### 3. \<form>标签的属性
\<form>标签用来采集数据，\<form> 标签的属性则是用来规定如何把采集到的数据发送到服务器。
|属性|值|描述|
| --- | --- | --- |
|action|URL地址|向何处发送表单数据|
|target|_blank  self  parent  _top  framename|在何处打开页面|
|method|GET或POST(默认GET)|以何种方式提交数据。|
|enctype|application/x-www-form-urlencoded,multipart/form-data, text/plain|在发送表单数据前，如何对数据进行编码|

1.action  向何处发送表单数据
>Action的值由后端提供的URL值,专门处理表单接受过来的数据
>默认,提交到当前页面的URL地址
>表单提交后,会跳转到指定的URL地址

2.target  在何处打开页面(URL)
|值|描述|
| --- | --- |
|_blank|在新窗口中打开。|
|self|默认。在相同的框架中打开。|
|parent|在父框架集中打开。(很少用)|
|_top|在整个窗口中打开。(很少用)|
|framename|在指定的框架中打开。(很少用)|

3.method  以何种方式提交数据。
>使用URL提交GET或POST(默认GET)>
>GET：(默认)适用于，少量不重要的数 如:http://127.0.0.1:5500/login?email_or_mobile=&password=
>POST：适用于大量、复杂或包含文件上传的数据(隐藏某些数据) 如:http://127.0.0.1:5500/login

4.enctype  在发送表单数据前，如何对数据进行编码
它的可选值有三个，默认为application/x-www-form-urlencoded，表示在发送前编码所有的字符。
|值|描述|
| --- | --- |
|application/x-www-form-urlencoded|在发送前编码所有字符(默认)|
|multipart/form-data|不对字符编码。在使用包含文件上传控件的表单时，必须使用该值|
|text/plain|空格转换为“+” 加号，但不对特殊字符编码。(很少用)|
注意:
>在涉及到文件上传的操作时，必须将enctype的值设置为multipart/form-data
>不涉设置为application/x-www-form-urlencoded即可!

### 4. 表单同步提交
1. 定义
通过点击submit按钮，触发表单提交的操作，从而使页面跳转到action URL的行为，叫做表单的同步提交。

2. 缺点: 表单同步提交后
①\<form>整个页面会发生跳转，跳转到action URL所指向的地址，用户体验很差。
②\<form>页面之前的状态和数据会丢失。

1. 解决
表单只负责采集数据,Ajax负责提交数据到服务器

## 2.2 通过Ajax提交表单数据
### 1. 监听表单提交事件
在jQuery中，可以使用如下两种方式，监听到表单的提交事件:
```javascript
$('#form1').submit (function(e) {
    alert('监听到了表单的提交事件')
})

$('#form1').on('submit', function(e) {
    alert('监听到了表单的提交事件')
})
```
### 2. 阻止表单默认提交行为
当监听到表单的提交事件以后，可以调用事件对象的event.preventDefault()函数,来阻止表单的提交和页面的跳转,示例代码如下:
```javascript
$('#form1').submit (function(e) {
    e .preventDefault ()
})
$('#form1').on('submit', function(e) {
    e .preventDefault ()
})
```

### 3.快速获取表单中的数据
1.serialize()函数
为了简化表单中数据的获取操作，jQuery 提供了serialize()函数，其语法格式如下:
```javascript
$(selector).serialize( )  //得到  user_name=值&password=值
```        
serialize()函数的好处:可以一次性获取到表单中的所有的教据。
>注意: 必须为每个表单元素添加name 属性 ! 


## 2.3 ⭐案例-评论列表
```javascript
function getCommentList() {
  $.ajax({
    method: 'GET',
    url: 'http://www.liulongbin.top:3006/api/cmtlist',
    success: function (res) {
      if (res.status !== 200) return alert('获取评论列表失败！')
      var rows = []
      $.each(res.data, function (i, item) {
        var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>'
        rows.push(str)
      })
      $('#cmt-list').empty().append(rows.join(''))
    }
  })
}

getCommentList()

$(function () {
  $('#formAddCmt').submit(function (e) {
    e.preventDefault()
    var data = $(this).serialize();
    console.log(data);
    $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
      if (res.status !== 201) {
        return alert('发表评论失败！')
      }
      getCommentList()
      $('#formAddCmt')[0].reset()
    })
  })
})
```

# 3. 模板引擎

## 3.1 模板引擎的基本概念
### 1. 渲染Ul结构时遇到的问题
如果UI结构比较复杂，则拼接字符串的时候需要格外注意引号之前的嵌套。且，一但需求发生变化，修改起来也非常麻烦。

### 2. 什么是模板引擎
可以根据程序员指定的模板结构和数据，自动生成一个完整的HTML 页面。
![](images/QQ截图20220819093730.png)

### 3. 模板引擎的好处
① 减少了字符串的拼接操作
② 使代码结构更清晰
③ 使代码更易于阅读与维护

## 3.2 art-template模板引擎
### 1. 简介
art-template是一个简约、 超快的模板引擎。
中文官网首页为[art-template](http://aui.github.io/art-template/zh-cn/index.html)

### 2. 基本使用
**1. 使用传统方式渲染Ul结构**
![](images/QQ截图20220819095116.png)
<details>
<summary>展开查看</summary>
<pre><code>
<textarea>
  <div id="title"></div>
  <div>姓名：<span id="name"></span></div>
  <div>年龄：<span id="age"></span></div>
  <div>会员：<span id="isVIP"></span></div>
  <div>注册时间：<span id="regTime"></span></div>
  <div>爱好：
    <ul id="hobby">
      <li>爱好1</li>
      <li>爱好2</li>
    </ul>
  </div>
  <script>
    var data = {
      title: '<h3>用户信息</h3>',
      name: 'zs',
      age: 20,
      isVIP: true,
      regTime: new Date(),
      hobby: ['吃饭', '睡觉', '打豆豆']
    }
    $(function () {
      $('#name').html(data.name)
      $('#title').html(data.title)
      $('#age').html(data.age)
      $('#isVIP').html(data.isVIP)
      $('#regTime').html(data.regTime)
      var rows = []
      $.each(data.hobby, function (i, item) {
        rows.push('<li>' + item + '</li>')
      })
      $('#hobby').html(rows.join(''))
    })
  </script>
</textarea>
</code></pre>
</details>

**2. art-template的使用步骤**
```markdown
① 导入art-template
② 定义数据
③ 定义模板
④ 调用template函数
⑤ 渲染HTML结构
```

### 3. 标准语法
**1. 什么是标准语法**
art-template提供了{{ }}这种语法格式，在{{ }}内可以进行变量输出，或循环数组等操作，这种{{ }}语法在art-template中被称为标准语法。

**2. 标准语法-输出**
```javascript
{{  value     }}   变量
{{  obj.key   }}   对象属性
{{  obj['key']}}   对象属性
{{  a?b:c     }}   三元表达式
{{  a || b    }}   逻辑或
{{  a+b       }}   加减乘除
```
在{{}}语法中，可以进行变量的输出、对象属性的输出、三元表达式输出、逻辑或输出、加减乘除等表达式输出。

**3. 标准语法-原文输出**
```javascript
{{@ value }}
```
如果要输出的value值中，包含了HTML标签结构，则需要使用原文输出语法，才能保证HTML标签被正常渲染。

**4. 标准语法-条件输出**
如果要实现条件输出，则可以在{{ }}中使用if .... else if ... /if的方式，进行按需输出。
```javascript
{{if value}}按需输出的内容{{/if}}
{{if v1}}按需输出的内容{{else if v2}}按需输出的内容{{/if}}
```

**5. 标准语法-循环输出**
```javascript
如果要实现循环输出，则可以在{{  }}内，通过each语法循环数组，当前循环的索引使用$index进行访问,当前的循环项使用$value进行访问。
{{each arr}}
{{$index}} {{$value}}
{{/each} }
```

**6.  标准语法-过滤器**
![](image/../images/QQ截图20220819104607.png)
过滤器的本质，就是一个function处理函数。
```javascript
{{ value | filterName}}  //value提交给filter过滤函数，返回一个新值

定义过滤器的基本语法如下:
template.defaults.imports.filterName = function (value) {/ *return处理的结果*/ }
```
过滤器语法类似管道操作符，它的上一个输出作为下一个输入。
```javascript
<div>注册时间: {{regTime | dateFormat}}</div>
```
定义一个格式化时间的过滤器dateFormat如下:

```javascript
template.defaults.imports.dateFormat =
function (regTime) {
var y = date.regTime ()
var m = date.regTime () +1
var d = date.regTime ()
return y + '-'+m+'-'+d   //注意，过滤器最后一定要return一个值
```
```javascript
  <title>Document</title>
  <!-- 1. 导入模板引擎 -->
  <!-- 在 window 全局，多一个函数，叫做 template('模板的Id', 需要渲染的数据对象) -->
  <script src="./lib/template-web.js"></script>
  <script src="./lib/jquery.js"></script>
</head>
<body>
  <div id="container"></div>
  <!-- 3. 定义模板 -->
  <!-- 3.1 模板的 HTML 结构，必须定义到 script 中 -->
  <script type="text/html" id="tpl-user">
    <!-- 变量 -->
    <h1>{{name}}    ------    {{age}}</h1>
    <!--  原文输出  -->
    {{@ test}}
    <!-- -条件输出 -->
    <div>
      {{if flag === 0}}
      flag的值是0
      {{else if flag === 1}}
      flag的值是1
      {{/if}}
    </div>
    <!-- 循环输出 -->
    <ul>
      {{each hobby}}
      <li>索引是:{{$index}}，循环项是:{{$value}}</li>
      {{/each}}
    </ul>
    <!-- 过滤器 -->
    <h3>{{regTime | dateFormat}}</h3>
  </script>
  <script>
    // 定义处理时间的过滤器
    template.defaults.imports.dateFormat = function (date) {
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      return y + '-' + m + '-' + d
    }
    /* 2. 定义需要渲染的数据 */
    var data = { name: 'zs', age: 20, test: '<h3>测试原文输出</h3>', flag: 1, hobby: ['吃饭', '睡觉', '写代码'], regTime: new Date() }
    /* 4. 调用 template 函数 */
    var htmlStr = template('tpl-user', data)
    console.log(htmlStr)
    /* 5. 渲染HTML结构 */
    $('#container').html(htmlStr)
  </script>
</body>
```

### 4. ⭐ 案例：新闻列表
![](images/QQ截图20220819131141.png)
```javascript
案例分析
1. 获取新闻数据
2. 定义template模板
3. 编译模板
4. 定义时间过滤器
5. 定义补零函数

<head>
    <link rel="stylesheet" href="./assets/news.css" />
    <script src="./lib/jquery.js"></script>
    <script src="./lib/template-web.js"></script>
    <script src="./js/n.js"></script>
</head>
<body>
    <div id="news-list"></div>
    <!-- 定义模板 -->
    <script type="text/html" id="tpl-news">
    {{each data}}
    <div class="news-item">
        <img class="thumb" src="{{'http://www.liulongbin.top:3006'+$value.img}}" alt="" />
        <div class="right-box">
          <h1 class="title">{{$value.title}}</h1>
          <div class="tags">
            {{each $value.tags }} 
            <span>{{$value}}</span>
            {{/each}}
          </div>
          <div class="footer">
            <div>
              <span>{{$value.source}}</span>&nbsp;&nbsp;
              <span>{{$value.time | dateForma}}</span>
            </div>
            <span>评论数：<i>{{$value.cmtcount}}</i></span>
          </div>
        </div>
    </div>
    {{/each}}
  </script>
</body>

</html>
$(function () {
  // 给时间补零的函数
  function padZero(n) {
   return n<10?'0'+n : n;
  }
  // 定义格式化时间的过滤器
  template.defaults.imports.dateFormat = function (dtStr) {
    var dt = new Date(dtStr)
    var y = dt.getFullYear()
    var m = padZero(dt.getMonth() + 1)
    var d = padZero(dt.getDate())

    var hh = padZero(dt.getHours())
    var mm = padZero(dt.getMinutes())
    var ss = padZero(dt.getSeconds())
    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
  }
  // 获取新闻列表的函数
  function getNewsList() {
    $.get('http://www.liulongbin.top:3006/api/news', function (res) {
      if (res.status !== 200) {
        return alert('获取新闻列表数据失败！')
      }
      for (var i = 0; i < res.data.length; i++) {
        // 把每一项的 tags 属性，从字符串改造成字符串的数组
        res.data[i].tags = res.data[i].tags.split(',')
      }
      console.log(res)
      var htmlStr = template('tpl-news', res)
      $('#news-list').html(htmlStr)
    })
  }
  getNewsList()
})

```
## 3.3 模板引擎的实现原理
### 1. 正则与字符串操作
**1. 基本语法**
- exec(函数用于检索字符串中的正则表达式的匹配。如果字符串中有匹配的值，则返回该匹配值，否则返回null.
- esec返回的是一个数组，数组的索引为0的元素是提取的内容，索引为1的元素是提取的文本内容，不含其他符号
```javascript
RegExpobject.exec (string)
```
```javascript
示例代码如下:
var str = 'hello'
var pattern = /o/
console.log(pattern.exec(str))
//输出的结果["o"，index: 4， input: "hello", groups: undefined]
test()返回布尔值，exec()返回符合正则的值，没有符合就就返回null
```

**2. 分组**
正则表达式中()包起来的内容表示一个分组， 可以通过分组来提取自己想要的内容，示例代码如下:
```javascript
var str = '<div> 我是{ {name}}</div> '
pattern = / {{([a-zA-Z]+) }}/
var patternResult = pattern.exec (str)
console. log (patternResult)
//得到name相关的分组信息
//["{{name}}", "name", index:7,input: "<div>我是{{name}}</div>", groups: undefined]
```
**3. 字符串的replace函数**
Replace( )函数用于在字符串中用一些字符替换另一些字符, 语法格式如下:
```javascript
var result = '123456'. replace('123', 'abc') //得到的result 的值为字符串' abc456'
```
示例代码如下:
```javascript
var str = '<div> 我是{ {name}}</div>'
var pattern = /{{([a-zA-z]+)}}/
var patternResult = pattern.exec (str)
str = str. replace (patternResult [0], patternResult[1]) // replace 函数返回值为替换后的新字符串
//输出的内容是: <div> 我是name</div>
console. log (str)
```
**4. 多次replace**
```javascript
var str = '<div>{ {name}}今年{{ age }}岁 了</div>'
var pattern = /{{\s*([a-zA-Z]+) \s*}}/

var patternResult = pattern. exec (str)
str = str. replace (patternResult[0], patternResult[1])
console. log(str) //输出<div>name今年{{ age }}岁了</div>

patternResult = pattern.exec (str)
str = str.replace (patternResult[0], patternResult[1])
console. log(str) // 输出<div>name今 年age岁了</div>

patternResult = pattern.exec(str)
console. log (patternResult) //输出null
```
**5.使用while循环replace**
```javascript
var str = '<div>{ {name}}今年{{ age }}岁了 </div> ';
var pattern = /{{\s*([a-zA-Z]+)\s*}}/;
var patternResult = null;
while (patternResult = pattern.exec(str) ){
str = str. replace (patternResult[0], patternResult[1] )
    }
console. log(str); // 输出<div>name今年age岁了</div>
```
**6.replace替换为真值**
```javascript
var data = { name:"张三", age: 20 }   //数据
var str = '<div> {{name }}今年{{ age }}岁了</div>';//模板
var pattern = /{{\s*([a-zA-z]+)\s*}}/  //替换
var patternResult = null
while ( (patternResult = pattern.exec(str) ) ) {
str = str.replace(patternResult[0],data [patternResult[1]])
console.log(str)
}
```

### 2. 🧩 实现简易的模板引擎
0. 实现步骤
>1. 定义模板结构
>2. 预调用模板引擎
>3. 封装template函数
>4. 导入并使用自定义的模板引擎

1. 定义模板结构
![](images/QQ截图20220819161246.png)

2. 预调用模板引擎
![](images/QQ截图20220819161524.png)

3. 封装template函数
```javascript
function template(id, data) {
  var str = document.getElementById(id).innerHTML
  var pattern = /{{\s*([a-zA-Z]+)\s*}}/
  var pattResult = null
  while (pattResult = pattern.exec(str)) {
    str = str.replace(pattResult[0], data[pattResult[1]])
  }
  return str
}
```

# AJAX加强
>能够知道如何使用XMLHttpRequest发起Ajax请求
能够知道如何封装自己的Ajax函数
能够使用XMLHttpRequest Level2中提供的新特性
能够知道jQuery中如何实现文件上传与loading效果
能够知道如何使用axios发起Ajax请求

# 4. XMLHttpRequest
XMLHttpRequest (简称xhr)是浏览器提供的Javascript 对象，通过它，可以请求服务器上的数据资源。jQuery中的Ajax函数,就是基于xhr对象封装出来的。
![](images/QQ截图20220819171812.png)

## 4.1 使用xhr发起GET请求
1.步骤:
>①创建xhr对象
②调用xhr.open()函数
③调用xhr.send()函数
④监听xhr.onreadystatechange事件

```javascript
//1.创建XHR对象
var xhr= new XMLHttpRequest ();
// 2.调用open函数，指定请求方式与URL地址
xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
// 3.调用send函数，发起Ajax请求
xhr.send()
// 4.监听onreadystatechange事件
xhr.onreadystatechange = function() {
// 4.1  监听xhr对象的请求状态readyState ;  与服务器响应的状态status
     if (xhr.readyState === 4 && xhr.status === 200) {
  // 4.2打印服务器响应回来的数据
      console.log(xhr.responseText)
  }
}
```

## 4.2 了解xhr对象的readyState属性
XMLHttpRequest对象的readyState属性，用来表示当前Ajax请求所处的状态。每个Ajax请求必然处于以
![](images/QQ截图20220819180505.png)
## 4.3 使用xhr发起带参数的GET请求
使用xhr对象发起带参数的GET请求时，只需在调用xhr.open期间，为URL地址指定参数即可
```javascript
xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks?id=1')
```
......?id=1, 这种在URL地址后面拼接的参数，叫做查询字符串。
## 4.4 查询字符串
1. 定义:
查询字符串(URL参数)是指在URL的末尾加上用于向服务器发送信息的字符串(变量)。

2. 格式:
将英文的 ==?== 放在URL的末尾，然后再加上 ==参数 = 值== ，想加上多个参数的话，使用 & 符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到URL中。
```javascript
//不带参数的URL地址
http://www.liulongbin.top:3006/api/getbooks
//带一个参数的URL地址
http://www.liulongbin.top:3006/api/getbooks?id=1
//带两个参数的URL地址
http://www.liulongbin.top:3006/api/getbooks?id=1&bookname=西游记
```
3. GET请求携带参数的本质
无论使用 \$.ajax() ,还是使用 $.get() ,又或者直接使用xhr对象发起GET请求，当需要携带参数的时候，==本质上，都是直接将参数以查询字符串的形式，追加到URL地址的后面，发送到服务器的。==
```javascript
$.get('url', {name: 'zs', age: 20}， function() {})
//等价于
$.get ('url?name=zs&age= 20', function() {})
$.ajax({ method: 'GET', url: 'url', data: {name: 'zs', age: 20},success: function() {} } )
//等价于
$.ajax({ method: 'GET', url: 'url?name= zs&age= :20', success: function() {} })
```
## 4.5  URL编码与解码
**1. 什么是URL编码**
URL地址中,只允许出现英文相关的字母、标点符号、数字，因此，在URL地址中不允许出现中文字符。
如果URL中需要包含中文这样的字符，则必须对中文字符进行==编码(转义)==。

**2.URL编码的原则:**
使用安全的字符(没有特殊用途或者特殊意义的可打印字符)去表示那些不安全的字符。

**3.URL编码原则的通俗理解:**
使用英文字符去表示非英文字符。
例如：
![](/images/QQ截图20220819182925.png)
**4.如何对URL进行编码与解码**
浏览器提供了URL编码与解码的API,分别是:

●  encodeURI()   编码的函数
●  decodeURI()   解码的函数
```javascript
encodeURI('黑马程序员')
//输出字符串: %E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98
decodeURI ( ' %E9%BB%91%E9%A9%AC')
//输出字符串: 黑马
```
**5. URL编码的注意事项**
由于浏览器会自动对URL地址进行编码操作，因此，大多数情况下，程序员不需要关心URL地址的编码与解码操作。
更多关于URL编码的知识，请参考 [教师博客](https://blog.csdn.net/Lxd_0111/article/details/78028889)

## 4.6 使用xhr发起POST请求
步骤:
>① 创建xhr对象
>② 调用xhr.open()函数
>③ 设置Content-Type属性(固定写法)
>④ 调用xhr.send0函数，同时指定要发送的数据
>⑤ 监听xhr.onreadystatechange事件

![](images/QQ截图20220819183719.png)
```javascript
  var xhr = new XMLHttpRequest();
      xhr.open('post','http://www.liulongbin.top:3006/api/addbook');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send('bookname=水浒d传&author=施耐庵&publisher=上海图书出版社')
      xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
      }
```

# 5 数据交换格式

## 5.1 什么是数据交换格式
数据交换格式，就是服务器端与客户端之间进行数据传输与交换的格式。

前端领域，经常提及的两种数据交换格式分别是XML和JSON。其中XML用的非常少，所以，重点要学习的数据交换格式就是JSON。
![](images/QQ截图20220819200137.png)
## 5.2  XML
### 1. 什么是XML
XML的英文全称是EXtensible Markup Language，即可扩展标记语言。因此，XML和HTML类似，也是一种标记语言。
![](images/QQ截图20220819200253.png)

### 2. XML和HTML的区别
XML和HTML虽然都是标记语言，但是，它们两者之间没有任何的关系。
- HTML被设计用来描述网页上的内容，是网页内容的载体
- XML被设计用来传输和存储数据，是数据的载体
![](images/QQ截图20220819200910.png)

### 3. XML的缺点
① XML格式臃肿，和数据无关的代码多，体积大，传输效率低
② 在Javascript中解析XML麻烦

## 5.3  JSON
### 1.什么是JSON
概念:
>JSON的英文全称是JavaScript Object Notation,即“JavaScript 对象表示法”。
简单来讲，JSON就是Javascript对象和数组的字符串表示法，它使用文本表示一个JS对象或数组的信息，
>因此，JSON的本质是字符串。

作用:
>JSON是一种轻量级的文本数据交换格式，在作用.上类似于XML,专用于存储和传输数据，但是JSON比XML更小、更快、更易解析。

现状:
>JSON是在2001年开始被推广和使用的数据格式，到现今为止，JSON已经成为了主流的数据交换格式。

### 2. JSON的两种结构
JSON就是用字符串来示Javascript的对象和数组。所以，JSON中包含对象和数组两种结构，通过这两种结构的相互嵌套，可以表示各种复杂的数据结构。

- 对象结构:
>对象结构在JSON中表示为{ }括起来的内容。
>数据结构为{ key: value, key: value, .. }的键值对结构。
>其中，key 必须是使用==英文的双引号==包裹的字符串，value 的数据类型可以是==数字、字符串(双引号)、布尔值、null、 数组、对象==6种类型。  (单引号， undefined，函数不可)

- 数组结构:
>数组结构在JSON中表示为[  ]括起来的内容。
>数据结构为[ "java", "javascript", 30, true ..]。
>数组中数据的类型可以是==数字、字符串、布尔值、null、 数组、对象==6种类型。

### 3. JSON语法注意事项
>① 属性名必须使用双引号包裹
>② 字符串类型的值必须使用双引号包裹
>③ JSON中不允许使用单引号表示字符串
>④ JSON 中不能写注释
>⑤ JSON的最外层必须是对象或数组格式
>⑥ 不能使用undefined或函数作为JSON的值

- JSON的作用:
>在计算机与网络之间存储和传输数据。

- JSON的本质:
>用字符串来表示Javascript对象数据或数组数据

### 4. JSON和JS对象的关系
JSON是JS对象的字符串表示法，它使用文本表示一个JS对象的信息，本质是一个字符串。

例如:
```javascript
//这是一个对象
var obj = {a: 'Hello', b: 'World'};
//这是一个JSON字符串，本质是一个字符串
var json = '{"a": "Hello", "b": "World"}';
```
### 5. JSON和JS对象的互转

要实现从JSON字符串转换为JS对象，使用JSON.parse()方法:
```javascript
var obj = JSON.parse(' {"a": "Hello", "b": "World"} ');
//结果是{a: 'Hello', b: 'World'}
```
要实现从JS对象转换为JSON字符串，使用JSON.stringify()方法:
```javascript
var json = JSON.stringify({a:'Hello', b: 'World' });
//结果是' {"a": "Hello", "b":"World"} '
```
```javascript
 var xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
      
      var result = JSON.parse(xhr.responseText)
      console.log(result)
    }
  }
```
### 6. 序列化和反序列化
- 把数据对象转换为字符串的过程，叫做序列化。
例如:调用JSON.stringify()函数的操作，叫做JSON序列化。

- 把字符串转换为数据对象的过程，叫做反序列化。
例如:调用JSON.parse()函数的操作，叫做JSON反序列化。

## 5.4 🧩 实现 $.ajax

1.参数
自定义(myAjax)函数是我们自定义的Ajax函数，它接收一个配置对象作为参数，配置对象中可以配置如下属性:
```javascript
● method        请求的类型
● url           请求的URL地址
● data          请求携带的数据
● success       请求成功之后的回调函数
```
2.处理data参数
需要把data对象，转化成查询字符串的格式，从而提交给服务器，因此提前定义resolveData函数如下:
```javascript
/**
处理data参数
@param {data} 需要发送到服务器的数据
@returns {string} 返回拼接好的查询字符串name=zs&age=10

**/
function resolveData (data) {
  var arr = [];
  for (let k in data) {
      arr.push(k + '=' + data[k]);
  }
  return arr.join('&');
}
```

3.定义myAjax函数
在myAjax()函数中，需要创建xhr对象，并监听onreadystatechange事件:
```javascript
function myAjax (options) {
    let xhr = new XMLHttpRequest ();
    //拼接查询字符串
    let qs = resolveData (options.data)
    //监听请求状态改变的事件
    xhr.onreadystatechange = function (){
      if(xhr.readyState === 4 && xhr.status = = = 200) {
        let result = JSON.parse (xhr.responseText );
        options.success (result)
      }
    }
}
```

4.判断请求的类型

不同的请求类型，对应xhr对象的不同操作，因此需要对请求类型进行if .... else ...的判断:
```javascript
if(options.method.toUpperCase() === ' GET') {
//发起GET请求
xhr.open (options . method, options.url +’?' + qs)
xhr.send()
} else if (options.method.toUpperCase() === 'POST') {
//发起POST请求
xhr.open(options.method,options.url)
xhr.setRequestHeader('Content-Type','application/X-www-form-urlencoded')
xhr.send(qs)
}
```
```javascript
function resolveData(data) {
  var arr = []
  for (var k in data) {
    var str = k + '=' + data[k]
    arr.push(str)
  }
  return arr.join('&')
}

function itheima(options) {
  var xhr = new XMLHttpRequest()
  // 把外界传递过来的参数对象，转换为 查询字符串
  var qs = resolveData(options.data)
  if (options.method.toUpperCase() === 'GET') {
    // 发起GET请求
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    // 发起POST请求
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}

 itheima({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/getbooks',
      data: {
        id: 1
      },
      success: function (res) {
        console.log(res)
      }
    })

  itheima({
    method: 'post',
    url: 'http://www.liulongbin.top:3006/api/addbook',
    data: {
      bookname: '水浒传',
      author: '施耐庵',
      publisher: '北京图书出版社'
    },
    success: function (res) {
      console.log(res)
    }
  })
```

## 5.5  XMLHttpRequest Level2新特性
###  1.  XMLHttpRequest Level2的新功能
① 可以设置HTTP请求的时限
② 可以使用FormData对象管理表单数据
③ 可以上传文件
④ 可以获得数据传输的进度信息

###  2. 设置HTTP请求时限
有时，Ajax 操作很耗时，而且无法预知要花多少时间。如果网速很慢，用户可能要等很久。
新版本的XMLHttpRequest对象，增加了timeout属性,可以设置HTTP请求的时限:
```javascript
xhr. timeout = 3000
```
上面的语句，将最长等待时间设为3000秒。过了这个时限，就自动停止HTTP请求。
与之配套的还有一个timeout事件，用来指定回调函数:
```javascript
xhr.ontimeout = function (event) {
alert('请求超时! ')
}
```
```javascript
var xhr = new XMLHttpRequest()
    // 设置 超时时间
    xhr.timeout = 30
    // 设置超时以后的处理函数
    xhr.ontimeout = function () {
      console.log('请求超时了！')
    }

    xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
    xhr.send()

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
      }
    }
```
###  3.  FormData对象管理表单数据
Ajax操作往往用来提交表单数据。为了方便表单处理，HTML5新增了一个FormData对象,可以模拟表单操作:
>获取表单可以不加setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

实例1：
```javascript
// 1.新建FormData对象
var fd = new FormData ();
// 2.为FormData 添加表单项
fd.append('uname', 'zs')
fd.append('upwd', '123456' )
//3.创建XHR对象
var xhr = new XMLHttpRequest ();
// 4.指定请求类型与URL地址
xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
// 5.直接提交FormData 对象，这与提交网页表单的效果，完全一样
xhr.send (fd)
var fd = new FormData();
    fd.append('uname', 'ss');
    fd.append('upwd', '1233');
    var xhr = new XMLHttpRequest();
    xhr.open("post", 'http://www.liulongbin.top:3006/api/formdata')
    xhr.send(fd);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    }
```
实例2：
FormData对象也可以用来获取网页表单的值，示例代码如下:
```javascript
//获取表单元素
var form = document.querySelector('#form1');
//监听表单元素的submit 事件
form.addEventListener ('submit', function(e)
e .preventDefault()
//根据form表单创建FormData对象，会自动将表单数据填充到FormData 对象中
var fd = new FormData (form);
var xhr = new XMLHttpRequest ();
xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata' )
xhr.send ( fd)
xhr.onreadystatechange = function() {}
})
```

### 4. 上传文件
新版XMLHttpRequest对象，不仅可以发送文本信息，还可以上传文件。

实现步骤:
>① 定义UI结构
>② 验证是否选择了文件
>③ 向FormData中追加文件
>④ 使用xhr发起上传文件的请求
>⑤ 监听onreadyStatechange事件

1.定义UI结构
```javascript
<!-- 1.文件选择框-->
<input type="file" id="file1" />
<!-- 2.上传按钮-->
<button id="btnUpload"> 上传文件</button>
<br/>
<!-- 3.显示上传到服务器上的图片-->
<img src="" alt="" id="img" width="800" />
```
2.验证是否选择了文件
```javascript
// 1.获取上传文件的按钮
var btnUpload = document.querySelector ('#btnUpload' );
// 2.为按钮添加click事件监听
btnUpload.addEventListener('click', function() {
// 3.获取到选择的文件列表
      let files = document.querySelector('#file1').files;
      if(files.length <= 0) {
            return alert('请选择要上传的文件! ')
      }
// ...后续业务逻辑
})
```
3.向FormData中追加文件
```javascript
// 1.创建FormData对象
let fa = new FormData ();
// 2.向FormData 中追加文件
fd.append( 'avatar',files[0])
```
4.使用xhr发起上传文件的请求
```javascript
//1.创建xhr对象
let xhr = new XMLHttpRequest ();
// 2.调用open函数，指定请求类型与URI地址。其中，请求类型必须为POST
xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
// 3.发起请求
xhr.send (fd)
```
5.监听onreadystatechange事件
```javascript
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse (xhr.responseText)
      if (data.status === 200) { //上传文件成功
      //将服务器返回的图片地址，设置为<img> 标签的src属性
        document.querySelector('#img').src='http://www.liulongbin.top:3006'+data.url
      } else { //上传文件失败
        console.log (data.message)
      }
  }
}
```
### 5. 显示文件上传进度
新版本的XMLHttpRequest对象中，可以通过监听xhr.upload.onprogress事件，来获取到文件的上传进度。
语法格式如下:
```javascript
//创建XHR对象
var xhr= new XMLHttpRequest ()
//监听xhr.upload 的onprogress事件
xhr.upload.onprogress = function(e) {
    // e.lengthComputable 是一个布尔值，表示当前上传的资源是否具有可计算的长度
    if (e.lengthComputable) {
        // e.loaded 已传输的字节
        // e.total 需传输的总字节
        var percentComplete = Math.ceil((e.loaded / e. total)*100)
        // 动态设置进度条
          $('#percent').attr('style', 'width: ' + procentComplete + '%;').html(procentComplete + '%')
        }
      }
/监听xhr.upload 的onload事件 上传完成
      xhr.upload.onload = function () {
        $('#percent').removeClass()//移除上传样式
        .addClass('progress-bar progress-bar-success')//添加上传的完成样式
      }
```
## 5.6 jQuery高级
### 1. jQuery文件上传用法
```javascript
1.定义UI结构
<!--导入jQuery -->
<script src="./ lib/jquery.js"></script>
<!--文件选择框---->
<input type="file" id="file1" />
<!-- 上传文件按钮-->
<button id="btnUpload"> 上传</button>
```

2.验证是否选择了文件
```javascript
$('#btnUpload').on('click', function() {
// 1.将jQuery对象转化为DOM对象，并获取选中的文件列表
let files = $('#file1')[0].files;
// 2.判断是否选择了文件
if (files.length <= 0) {
    return alert( '请选择图片后再上传!')
})
```

3.向FormData中追加文件
```javascript
//向FormData 中追加文件
var fd = new FormData ()
fd.append( 'avatar' ,files[0])
```

4.使用jQuery发起上传文件的请求
```javascript
$.ajax({
method:'POST' ,
url: 'http://www.liulongbin.top:3006/api/upload/avatar',
data: fd,
//不修改Content-Type 属性，使用FormData 默认的Content-Type 值
contentType: false,
//不对FormData 中的数据进行url编码，而是将FormData数据原样发送到服务器
processData: false,
success: function (res) {
console. log (res)
}
})
```
###  2. jQuery实现loading效果
1.ajaxStart(callback)
Ajax请求开始时，执行ajaxStart 函数。可以在 ajaxStart的callback中显示loading效果，示例代码如下:
```javascript
//自jQuery版本1.8起，该方法只能被附加到文档
$(document).ajaStart (function ( ){
$( '#loading' ).show ()
})
```
注意: $(document).ajaxStart()函数会监听当前文档内所有的Ajax请求。
 1.ajaxStop(callback)
```javascript
//自jQuery版本1.8起，该方法只能被附加到文档
$(document).ajaStart (function ( ){
$( '#loading').hide()
})
```
## 5.7 axios   
### 1. 含义
Axios专注于==网络数据请求==的库。
相比于原生的XMLHttpRequest对象，axios==简单易用==。
相比于jQuery, axios 更加==轻量化==，只专注于网络数据请求。
### 2.  axios发起GET请求
语法:
```javascript
axios.get('url', {params:{/*参数*/}}).then (callback)
```
具体的请求示例如下:
```javascript
// 请求的URL地址
var url = 'http://www.liulongbin.top:3006/api/get'
// 请求的参数对象
var paramsObj = { name: 'zs',age: 20 }
// 调用axios.get() 发起GET请求
    axios.get(ur1, { params: paramsObj }).then (function(res) {
// res被axios包装过， res.data 是真正的服务器返回的数据
      var result = res.data
      console.log(res);
       console.log(result);
      
})
```
### 3.  axios发起POST请求
语法:
```javascript
axios.post('url', {params:{/*参数*/}}).then (callback)
```
具体的请求示例如下:
```javascript
// 请求的URL地址
var url = 'http://www.liulongbin.top:3006/api/post'
// 请求的参数对象
var paramsObj = { name: 'zs',age: 20 }
// 调用axios.get() 发起GET请求
    axios.post(ur1, paramsObj ).then(function(res) {
// res被axios包装过， res.data 是真正的服务器返回的数据
      var result = res.data
      console.log(res);
      console.log(result);
      
})
```
### 4. 直接使用axios发起请求
axios也提供了类似于jQuery中$.ajax()的函数，语法如下:
```javascript
axios ({
    method: '请求类型',
    url: '请求的URL地址',
    data: { /*POST数据*/},
    params:{ /*GET参数*/}
}).then(callback)
```
```javascript
document.querySelector('#bt3').addEventListener('click', function(){
    var url = 'http://www.liulongbin.top:3006/api/get';
    var pobj = {name:'zs', age:50};
    axios({
        method:"GET",
        url:url,
        params:pobj
    }).then(function(r){
        console.log(r.data);
    })
})
document.querySelector('#bt4').addEventListener('click', function(){
    var url = 'http://www.liulongbin.top:3006/api/post';
    var pobj = {bookname:'三体', author:'刘慈欣', publisher:'巴巴变'};
   axios({
    method:"POST",
    url:url,
    data:pobj
   }).then(function(r){
    console.log(r.data);
   })
})
```


# 6. 跨域和JSONP
>能够知道什么是同源策略和跨域
能够知道什么是JSONP
能够说出JSONP的实现原理
能够知道防抖和节流的概念
## 6.1 同源策略 
### 1. 什么是同源
如果两个页面的协议，域名和端口都相同，则两个页面具有相同的源。
例如，下表给出了相对于http://www.test.com/index.html 页面的同源检测:
![](images/QQ截图20220820114847.png)
### 2. 什么是同源策略
1.同源策略
(英文全称Same origin policy)是浏览器提供的一个安全功能。

2.MDN官方给定的概念:
同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。

3.通俗的理解:
浏览器规定，A网站的JavaScript，不允许和非同源的网站C之间，进行资源的交互，例如:
>① 无法读取非同源网页的Cookie、LocalStorage 和IndexedDB
>② 无法接触非同源网页的DOM
>③ 无法向非同源地址发送Ajax请求

## 6.2 跨域
### 1. 什么是跨域
1. 同源指的是两个URL的协议、域名、端口一致，反之，有一项不相同，则是跨域。

2. 出现跨域的根本原因:
浏览器的同源策略不允许非同源的URL之间进行资源的交互。
网页: http://www.test.com/index.html
接口: http://www.api.com/userlist
正常情况下，不能相互访问

### 2. 浏览器对跨域请求的拦截
![](images/QQ截图20220820120121.png)

### 3. 如何实现跨域数据请求
现如今，实现跨域数据请求，最主要的两种解决方案，分别是JSONP和CORS。

1.JSONP:
出现的早，兼容性好(兼容低版本IE) 。是前端程序员为了解决跨域问题，被迫想出来的一种临时解决方案。
缺点 是只支持GET求，不支持POST请求。

2.CORS:
出现的较晚，它是W3C标准，属于跨域Ajax请求的根本解决方案。支持GET和POST请求。
缺点 是不兼容某些低版本的浏览器。

## 6.3 JSONP
JSONP（JSON with padding）是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问问题

### 1 JSONP的实现原理
由于浏览器同源策略的限制，网页中无法通过Ajax请求非同源的接口数据。但是\<script\> 标签不受浏览器同源策略的影响，可以通过src属性,请求非同源的js脚本。

因此，JSONP的实现原理，就是通过\<script\>标签的src属性，请求跨域的数据接口，并通过函数调用的形式，接收跨域接口响应回来的数据。
### 2. 实现一个简单的JSONP
定义一个success回调函数:
```javascript
<script>
function success (data) {
      console.log('获取到了data数据: ');
      console.log (data);
}
</script>
```
通过\<script\>标签,请求接口数据:
```javascript
<script src='http://www.liulongbin.top:3006/api/jsonp?callback=success&name=zs&age=20'> </ script>
```
### 3. JSONP的缺点
由于JSONP是通过\<script\>标签的src属性，实现跨域数据获取的，所以，JSONP只支持GET数据请求，不支持POST请求。

注意:
==JSONP和Ajax之间没有任何关系==，不能把JSONP请求数据的方式叫做Ajax，因为JSONP没有用到XMLHttpRequest这个对象。
### 4. jQuery中的JSONP
jQuery提供的$.ajax()函数，除了可以发起真正的Ajax数据请求之外，还能够发起JSONP数据请求，例如:
```javascript
$.ajax({
    url:'http://www.liulongbin.top:3006/api/jsonp?name=zs&age=20',
    //如果要使用$.ajax()发起JSONP请求，必须指定datatype为jsonp
    dataType: 'jsonp' ,
    success: function (res) {
        console. log (res)
    }
})
```
>默认情况下，使用jQuery发起JSONP请求，会自动携带一个callback=jQueryxxx的参数，jQueryxx是随机生成的一个回调函数名称。
### 5. 自定义参数及回调函数名称
在使用jQuery 发起JSONP请求时，如果想要自定义JSONP的参数以及回调函数名称，可以通过如下两个参数来指定:
```javascript
$.ajax({
    url:'http://www.liulongbin.top:3006/api/jsonp?name=zs&age=20',
    dataType: 'jsonp' ,
    //发送到服务端的参数名称，默认值为callback,一般不会修改
    jsonp: 'callback',
    //自定义的回调函数名称,默认值为jQueryxxx格式
    jsonpCal1bagk : 'abc' ,
    success: function ( res) {
      console.log(res)
    }
})
```
### 6. jQuery中JSONP的实现过程
jQuery中的JSONP，也是通过\<script\>标签的src属性实现跨域数据访问的，只不过，jQuery 采用的是动态创建和移除\<script\>标签的方式，来发起JSONP数据请求。

●  在发起JSONP请求的时候，动态向\<header\>中appen一个\<script\>标签;
●  在JSONP请求成功以后，动态从\<header\>中移除刚才append进去的\<script\>标签;

### 6. ⭐ 淘宝搜索案例
![](images/QQ截图20220820161120.png)
#### 6.1获取用户输入的搜索关键词
为了获取到用户每次按下键盘输入的内容,需要监听输入框的keyup事件,示例代码如下:
```javascript
//监听文本框的keyup事件
$(' #ipt') .on('keyup', function() {
//获取用户输入的内容
var keywords = $(this).val().trim()
//判断用户输入的内容是否为空
 if (keywords.length <= 0) {
    return $('#suggest-list').empty().hide()
  }
// TODO:获取搜索建议列表
})
```
#### 6.2封装函数，使用jsonp请求
```javascript
  function getSuggestList(kw) {
      $.ajax({
          url: `https://suggest.taobao.com/sug?q=${kw}`,
          dataType: 'jsonp',
          success: function (res) {
              // console.log(res)
              renderSuggestList(res)
          }
      })
  }
```
#### 6.3 定义渲染模板结构的函数
```javascript
 // 渲染UI结构
  function renderSuggestList(res) {
    if (res.result.length <= 0) {
      return $('#suggest-list').empty().hide()
    }
    var htmlStr = template('tpl-suggestList', res)
    $('#suggest-list').html(htmlStr).show(
    // 1. 获取到用户输入的内容，当做键
    var k = $('#ipt').val().trim()
    // 2. 需要将数据作为值，进行缓存
    cacheObj[k] = res
  }
})
```

<details>
<summary>展开查看</summary>
<pre><code>
<textarea>
  <link rel="stylesheet" href="./css/search.css" />
  <!-- 导入 jQuery -->
  <script src="./lib/jquery.js"></script>
  <!-- 导入模板引擎 -->
  <script src="./lib/template-web.js"></script>
<body>
  <div class="container">
    <!-- Logo -->
    <img src="./images/taobao_logo.png" alt="" class="logo" />
    <div class="box">
      <!-- tab 栏 -->
      <div class="tabs">
        <div class="tab-active">宝贝</div>
        <div>店铺</div>
      </div>
      <!-- 搜索区域（搜索框和搜索按钮） -->
      <div class="search-box">
        <input id="ipt" type="text" class="ipt" placeholder="请输入要搜索的内容" /><button class="btnSearch">
          搜索
        </button>
      </div>
      <!-- 搜索建议列表 -->
      <div id="suggest-list" ></div>
    </div>
  </div>
  <!-- 模板结构 -->
  <script type="text/html" id="tpl-suggestList">
    {{each result}}
      <!--搜索建议项-->
      <div class="suggest-item">{{$value[0]}}</div>
    {{/each}}
  </script>
  <script>
    $(function () {
      // 1. 定义延时器的Id
      var timer = null
      // 定义全局缓存对象
      var cacheObj = {}
      // 2. 定义防抖的函数
      function debounceSearch(kw) {
        timer = setTimeout(function () {
          getSuggestList(kw)
        }, 500)
      }
      // 为输入框绑定 keyup 事件
      $('#ipt').on('keyup', function () {
        // 3. 清空 timer
        clearTimeout(timer)
        var keywords = $(this).val().trim()
        if (keywords.length <= 0) {
          return $('#suggest-list').empty().hide()
        }
        // 先判断缓存中是否有数据
        if (cacheObj[keywords]) {
          return renderSuggestList(cacheObj[keywords])
        }
        // TODO:获取搜索建议列表
        // getSuggestList(keywords)
        debounceSearch(keywords)
      })
      function getSuggestList(kw) {
        $.ajax({
          url: 'https://suggest.taobao.com/sug?q=' + kw,
          dataType: 'jsonp',
          success: function (res) {
            // console.log(res)
            renderSuggestList(res)
          }
        })
      }
      // 渲染UI结构
      function renderSuggestList(res) {
        if (res.result.length <= 0) {
          return $('#suggest-list').empty().hide()
        }
        var htmlStr = template('tpl-suggestList', res)
        $('#suggest-list').html(htmlStr).show()
        // 1. 获取到用户输入的内容，当做键
        var k = $('#ipt').val().trim()
        // 2. 需要将数据作为值，进行缓存
        cacheObj[k] = res
      }
    })
  </script>
</textarea>
</code></pre>
</details>


## 6.4 防抖与节流
### 1.防抖
#### 1. 含义
防抖策略(debounce) 
是当事件被触发后，==延迟n秒==后再执行==回调==，如果在这n秒内事件又被触发，则==重新计时==。
 ![](images/QQ截图20220820165451.png)
 
#### 2. 防抖的应用场景
用户在输入框中连续输入一串字符时，可以通过防抖策略，只在输入完后，才执行查询的请求，
这样可以有效减少请求次数,节约请求资源;
#### 3. 实现输入框的防抖
```javascript
let timer = null;                           // 1.防抖动的timer
function debounceSearch (keywords) {       // 2.定义防抖的函数
    timer = setTimeout (function() {
    //发起JSONP 请求
    getSugges tList (keywords)
    }，500)
}

$('#ipt').on('keyup', function() {
// 3.在触发keyup事件时，立即清空timer
clearTimeout (timer)
// ...省略其他代码
debounceSearch (keywords)
})

```
#### 4. 缓存搜索的建议列表
1. 定义全局缓存对象
```javascript
//缓存对象
var cacheobj = {}
```
2. 将搜索结果保存到缓存对象中
```javascript
//渲染建议列表
function renderSuggestList ( res) {
// ...省略其他代码
//将搜索的结果，添加到缓存对象中
 var k = $('#ipt').val().trim();
   cacheobj[k]= res;
)}
```
3. 优先从缓存中获取搜索建议
```javascript
//监听文本框的keyup事件
$('#ipt').on('keyup', function( ) {
// ...省略其他代码
//优先从缓存中获取搜索建议
if (cacheobj [ keywords]) {
return renderSuggestList(cacheobj [ keywords])
//获取搜索建议列表
debouncesearch (keywords)})
```
### 2.节流
#### 1. 含义
节流策略：减少一段时间内事件的触发频率。防止事件被无限次的触发
![](images/QQ截图20220820172701.png)
#### 2. 节流的应用场景（高频事件都可）
>① 鼠标连续不断地触发某事件(如点击)，只在单位时间内只触发一次;
>② 懒加载时要监听计算滚动条的位置，但不必每次滑动都触发,可以降低计算的频率，而不必去浪费CPU资源;

#### 3. 节流阀的概念
>高铁卫生间是否被占用，由红绿灯控制,红灯表示被占用，绿灯表示可使用。
假设每个人卫生间都需要花费5分钟，则五分钟之内，被占用的卫生间无法被其他人使用。
上一个人使用完毕后，需要将红灯重置为绿灯，表示下一个人可以使用卫生间。下一个人在上卫生间之前，需要先判断控制灯是否为绿色，来知晓能否上卫生间。

节流阀：
- 节流阀为空，表示可以执行下次操作；不为空，表示不能执行下次操作。
- 当前操作执行完，必须将节流阀重置为空，表示可以执行下次操作了。
- 每次执行操作前，必须先判断节流阀是否为空。
#### ⭐ 案例 鼠标跟随效果
![](images/QQ截图20220820173536.png)
1.不使用节流阀
```javascript
     var angel = $('#angel');//放在外面，增加效率
    $(document).on('mousemove', function (e) {
      // console.log(e.pageX + " " + e.pageY);
      $(angel).css('left', e.pageX + 'px').css('top', e.pageY + 'px')
    })
```
2.使用节流阀
```javascript
  // 1. 获取到图片
  var angel = $('#angel')
  // 步骤1. 定义节流阀
  var timer = null
  // 2. 绑定 mousemove 事件
  $(document).on('mousemove', function (e) {
    // 步骤3：判断节流阀是否为空
    if (timer) { return }
    // 3. 设置图片的位置
    // 步骤2：开启延时器
    timer = setTimeout(function () {
      $(angel).css('top', e.pageY + 'px').css('left', e.pageX + 'px')
      console.log('ok')
      timer = null
    }, 16)
  })
```
#### 4. 总结防抖和节流的区别
防抖:
如果事件被频繁触发，防抖能保证==只有最后一次触发生效==!前面N多次的触发都会被忽略!

节流:
如果事件被频繁触发，节流能够==减少事件触发的频率==，因此，节流是==有选择性地执行部分事件==!

# 7.HTTP协议
## 7.1通信
1. 含义
通信，就是信息的传递和交换。
通信三要素:
>● 通信的主体
>● 通信的内容
>● 通信的方式

2. 互联网中的通信
案例:   ==服务器==把==传智专修学院的简介==通过==响应==的方式发送给==客户端浏览器==。
其中，
>通信的主体是服务器和客户端浏览器;
>通信的内容是传智专修学院的简介;
>通信的方式是响应;

## 7.2什么是通信协议
通信协议(Communication Protocol)  
是指通信的双方完成通信所==必须遵守==的==规则和约定==。

通俗的理解:
通信双方采用约定好的格式来发送和接收消息，这种==事先约定好的通信格式==，就叫做通信协议。

![](images/QQ截图20220820200821.png)

2. 互联网中的通信协议
- 客户端与服务器之间要实现==网页内容==的传输，则通信的双方必须遵守网页内容的传输协议。
- ==网页内容==又叫做==超文本==，因此网页内容的传输协议又叫做==超文本传输协议==(HyperText Transfer Protocol)，简称==HTTP协议==。

## 7.3 HTTP协议
### 1. HTTP协议
HTTP协议即超文本传送协议(HyperText Transfer Protocol)，它规定了客户端与服务器之间进行网页内容传输时，所必须遵守的传输格式。

例如:
>● 客户端要以HTTP协议要求的格式把数据提交到服务器
>● 服务器要以HTTP协议要求的格式把内容响应给客户端
### 2. HTTP协议的交互模型
HTTP协议采用了请求/响应的交互模型。
![](images/QQ截图20220820201741.png)

## 7.4 HTTP请求消息
### 1.什么是HTTP请求消息
由于HTTP协议属于客户端浏览器和服务器之间的通信协议。因此，客户端发起的请求叫做HTTP请求，客户端发送到服务器的消息，叫做HTTP请求消息。

注意:HTTP请求消息又叫做HITP请求报文。

### 2. 组成部分
HTTP请求消息由==请求行==(request line)、==请求头部==( header ) 、==空行==和==请求体==4个部分组成。
![](images/QQ截图20220820202311.png)

**1. 请求行**
请求行 由请求方式、URL和HITP协议版本3个部分组成，他们之间使用空格隔开。
![](images/QQ截图20220820203151.png)
![](images/QQ截图20220820203007.png)

 **2. 请求头部**
请求头部用来==描述客户端的基本信息==，从而把==客户端相关的信息告知服务器==。
>比如: User-Agent 用来说明当前是什么类型的浏览器;  Content-Type 用来描述发送到服务器的数据格式  FAccept 用来描述客户端能够接收什么类型的返回内容;   Accept-Language 用来描述客户端期望接收哪种人类语言的文本内容。

- 请求头部由多行键/值对组成，每行的键和值之间用英文的冒号分隔。
![](./images/QQ截图20220820203443.png)
- 常见的请求头字段
![](images/QQ截图20220820203801.png)
![](images/QQ截图20220820203944.png)
可以查看[MDN官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers): 
**3. 空行**
- 最后一个请求头字段的后面是一个==空行==，通知服务器==请求头部至此结束==。请求消息中的空行，用来分隔==请求头部==与==请求体==。
![](images/QQ截图20220820204252.png)

**4. 请求体**
请求体中存放的，是要通过POST方式提交到服务器的数据。(上图)
![](images/QQ截图20220820204518.png)
>注意:只有POST请求才有请求体，GET请求没有请求体!

## 7.5 HTTP响应消息
### 1. 什么是HTTP响应消息
响应消息就是服务器响应给客户端的消息内容，也叫作响应报文。
### 2. 组成部分
- HTTP响应消息由==状态行==、==响应头部==、==空行==和==响应体==4个部分组成，如下图所示:
![](images/QQ截图20220820205256.png)

**1. 状态行**
- 状态行由HTTP协议版本、状态码和状态码的描述文本3个部分组成，他们之间使用空格隔开;
![](images/QQ截图20220820210535.png)
![](images/QQ截图20220820210734.png)  

**2. 响应头部**
- 响应头部用来描述==服务器的基本信息==。响应头部由多行键/值对组成，每行的键和值之间用英文的冒号分隔。
![](images/QQ截图20220820211111.png)
![](images/QQ截图20220820211306.png)
可以查看[MDN官方文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers): 
**3. 空行**
- 在最后一个响应头部字段结束之后，会紧跟一个==空行==，用来通知客户端==响应头部至此结束==。响应消息中的空行，用来分隔=响应头部==与==响应体==。
 ![](images/QQ截图20220820211513.png)  
**4. 响应体**
- 响应体中存放的，是服务器响应给客户端的资源内容。
![](images/QQ截图20220820211640.png)

### 7.6 HTTP请求方法
1.定义
HTTP请求方法，属于HTTP协议中的一部分，请求方法的作用是:用来表明==要对服务器上的资源执行的操作==。最常用的请求方法是GET和POST。
2. 举例
![](images/QQ截图20220820212130.png)

## 7.6 HTTP响应状态码
### 1. 定义
HTTP响应状态码(HTTP Status Code)，也属于HTTP协议的一部分，用来标识响应的状态。

- 响应状态码会随着响应消息一起被发送至客户端浏览器，浏览器根据服务器返回的响应状态码，就能知道这次HTTP请求的结果是成功还是失败了。
![](images/QQ截图20220820212611.png)
### 2. HTTP响应状态码的组成及分类
HTTP状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字用来对状态码进行细分。
- HTTP状态码共分为5种类型:
![](images/QQ截图20220820212841.png)

### 3. 常见的HTTP响应状态码
**1. 2 \*\*成功相关的响应状态码**
- 2\*\*范围的状态码，表示服务器已成功接收到请求并进行处理。
- 常见的2\*\*类型的状态码如下:
![](images/QQ截图20220820213231.png)

**1.  3\*\*重定向相关的响应状态码**
- 3\*\*范围的状态码，表示表示服务器要求客户端重定向，需要客户端进一步的操作以完成资源的请求。
- 常见的3\*\*类型的状态码如下:
![](images/QQ截图20220820213522.png)

**1.  4\*\*重定向相关的响应状态码**
- 4\*\*范围的状态码，表示客户端的请求有非法内容，从而导致这次请求失败。
- 常见的4\*\*类型的状态码如下:
  ![](images/QQ截图20220820213833.png)
  
**1.  5\*\*重定向相关的响应状态码**
- 5\*\*范围的状态码，表示服务器未能正常处理客户端的请求而出现意外错误。
- 常见的5\*\*类型的状态码如下:
 ![](images/QQ截图20220820214107.png)
<!--   ------------------------------------------------------------ -->



