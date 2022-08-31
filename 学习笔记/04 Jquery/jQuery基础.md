# jQuery入门
>能够说出什么是jQuery
能够说出jQuery的优点
能够简单使用jQuery
能够说出DOM对象和jQuery对象的区别
[toc]
## jQuery概述

### Javascript库
- 仓库:  可以把很多东西放到这个仓库里面。找东西只需要到仓库里面查找到就可以了。
- JavaScript库:  即 library，是一个封装好的特定的集合（方法和函数)。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show，比如获取元素等。
>简单理解∶就是一个JS文件，里面对我们==原生js代码==进行了封装，存放到里面,就是==库==。这样我们可以快速高效的使用这些封装好的功能了。
比如jQuery，就是为了快速方便的操作DOM，里面基本都是函数(方法)。

**（1）常见的Javascript库**
```markdown 
 jQuery  Prototype  YUI  Dojo   Ext  JS   移动端的zepto
```
这些库都是对原生JavaScript的封装，内部都是用JavaScript实现的，我们主要学习的是jQuery。
###  jQuery的概念

jQuery是一个快速、简洁的JavaScript库, 其设计的宗旨是"write Less , Do More”, 即倡导写更少的代码做更多的事情。
j就是JavaScript; Query 查询; 意思就是查询js ,把js中的DOM操作做了封装,我们可以快速的查询使用里面的功能。


> - jQuery封装了JavaScript常用的功能代码,优化了DOM操作、事件处理、动画设计和Ajax交互。
> -  学习jQuery本质:  就是学习调用这些函数(方法)。
> - jQuery出现的目的是加快前端人员的开发速度,我们可以非常方便的调用和使用它,从而提高开发效率。

### jQuery的优点
```markdown
1. 轻量级。核心文件才几十kb，不会影响页面加载速度
2. 跨浏览器兼容。基本兼容了现在主流的浏览器
3. 链式编程、隐式迭代
4. 对事件、样式、动画支持，大大简化了DOM操作
5. 支持插件扩展开发。有着丰富的第三方的插件，例∶树形菜单、日期控件、轮播图等
6. 免费、开源
```

## jQuery的基本使用
### 1. 下载  
>版本∶    
官网地址: https://jquery.com/  
各个版本的下载:https://code.jquery.coml
1x：兼容IE678等低版本浏览器，官网不再更新
2x：不兼容IE 678等低版本浏览器，官网不再更新
3x：不兼容IE 678等低版本浏览器，是官方主要更新维护的版本公


### 2. 引入
```javascript
<script src="./jquery.min.js"></script>
```

### 3. 入口函数
```javascript
$(function (){
   ...     //此处是页面DOM加载完成的入口
}) ;

$(document).ready ( function () {
        ... //此处是页面DOM加载完成的入口
}) ;
```
1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装。
2.  相当于原生js 中的 DOMContentLoaded。
3.  不同于原生js 中的load事件是等页面文档、外部的js文件、css文件、图片加载完毕才执行内部代码。
   
### 4. jQuery的顶级对象$
```markdown
1. $是jQuery的别称，在代码中可以使用jQuery代替$，但一般为了方便，通常都直接使用$。
2. $是jQuery的顶级对象，相当于原生JavaScript中的window。把元素利用$包装成jQuery对象，就可以调用jQuery的方法。
```
### 5. jQuery对象和DOM对象
1. 用原生JS获取来的对象就是DOM对象
2. jQuery方法获取的元素就是jQuery对象。
3. jQuery对象本质是∶利用$对DOM对象包装后产生的对象（伪数组形式存储)。

```javascript
<div></div>
<span></span>
<script>
    // 1. DOM 对象：  用原生js获取过来的对象就是DOM对象
    var myDiv = document.querySelector('div'); // myDiv 是DOM对象
    var mySpan = document.querySelector('span'); // mySpan 是DOM对象
    console.dir(myDiv);
    // 2. jQuery对象： 用jquery方式获取过来的对象是jQuery对象。 本质：通过$把DOM元素进行了
    $('div'); // $('div')是一个jQuery 对象
    $('span'); // $('span')是一个jQuery 对象
    console.dir($('div'));
    // 3. jQuery 对象只能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 属性和方法
    // myDiv.style.display = 'none';
    // myDiv.hide(); myDiv是一个dom对象不能使用 jquery里面的hide方法
    // $('div').style.display = 'none'; 这个$('div')是一个jQuery对象不能使用原生js 的属方法
</script>
```
- DOM对象与jQuery对象之间是可以相互转换的。
因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装.要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用。


```markdown

1. DOM对象转换为jQuery对象:              
        $(DOM对象)    $('div') 
2. jQuery对象转换为DOM对象（两种方式):      
        $('div')[index]         index是索引号
        $('div').get(index)
```
```javascript
  <video src="mov.mp4" muted></video>
  <script>
      // 1. DOM对象转换为 jQuery对象
      // (1) 我们直接获取视频，得到就是jQuery对象
      // $('video');
      // (2) 我们已经使用原生js 获取过来 DOM对象
      var myvideo = document.querySelector('video');
      // $(myvideo).play();  jquery里面没有play 这个方法

      // 2.  jQuery对象转换为DOM对象
      // myvideo.play();
      $('video')[0].play()
      $('video').get(0).play()
```
