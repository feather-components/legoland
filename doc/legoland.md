<link href="/legoland.min.css"/>
# Legoland
## 概述 
> 适用于管理后台的前端UI模块化框架(css+html+js)
> Legoland.css是独立的样式库,Legoland html规范约定了页面元素组合嵌套的规则,Legoland.js是依赖Legoland.css实现的JS组件库
> 建议的DTD: HTML5 文档类型

## Legoland.css
> - 模块化的css样式库
> - 解决：选择器繁琐冗长；命名冲突；层级结构不清晰；代码难以复用；
> - 基本原则: 约定页面*由且仅由*几种基本结构体构成：结构模块、功能模块，以及元件模块。其他元素不能独立于这三者存在。


### 框架结构模块 structure  
> 基本结构：
    - 基本的全局样式
    - layout 布局
    - grid 栅格 

##### **基本的全局样式**
- 颜色
###### 使用变量作为颜色的基本参数 

|变量描述          |变量                                    | 
|------------------|----------------------------------------| 
|标题(黑)          |<font color=#333>@titlecolor</font>     | 
|副标题/内容(深灰) |<font color=#666>@subcolor </font>      | 
|次级文本(浅灰)    |<font color=#999>@tipcolor </font>      | 
|边框              |<font color=#999>@bordercolor</font>    | 
|浅色背景          |<font color=#ededed>@backcolor_l</font> | 
|页面背景          |<font color=#e1e1e1>@backcolor</font>   |  
|页头(紫色)        |<font color=#464e78>@basecolor</font>   |    
|按钮链接(蓝色)    |<font color=#5986e1>@linkcolor</font>   |    
|划过颜色(深蓝)    |<font color=#3e6bc5>@hovercolor</font>  |    
|高亮(橙色)        |<font color=#ff8447>@maincolor</font>   |    
|警示色            |<font color=#d05538>@dangercolor</font> |    
|健康(绿色)        |<font color=#8bb455>@successcolor</font>|

- 字体 
###### @family：Arial,"Microsoft Yahei"
###### 标题：16px;
###### 正文：14px;
###### 次级正文：12px;

##### **layout 布局**
###### 实现了一种最基本的页面布局

                            lg-s-wrapper
                |-----------------------------------------|
                |                lg-s-head                |
                |-----------------------------------------|
              / |              |       lg-s-body-hd       | 
                |              |--------------------------|           
                |              |                          |         
                |lg-s-content-l|                          |         
    lg-s-content|              |                          |         
                |              |       lg-s-body-bd       |         
                |              |                          |         
                |              |                          |         
                |              |--------------------------| 
              \ |              |       lg-s-body-tl       |
                |-----------------------------------------|
                                \                        /
                                  lg-s-content-r > lg-s-body

##### **grid 栅格**
######  通过 row 与 grid的组合来创建页面布局 每个 row 最多分割为12个 grid
        - row(.lg-grid-row) 必须放置于 container(.lg-grid-container) 中
        - 内容应当放置于 grid 内，并且，只有 grid 可以作为 row 的直接子元素。
        - grid 默认间隔30px (可通过修改变量 @gap 定制) 
- ###### 例子        
```
<div class="lg-grid-container">
   <div class="lg-grid-row">
       <div class="lg-grid-12"> lg-grid-12</div>
       <div class="lg-grid-11"> lg-grid-11</div>
     </div>
</div>
```

### 功能模块 module
> ##### 一个功能相对独立且完整的结构体，可以理解为css范围内的组件:一个样式相对独立且完整的类,只对外暴露一个类名
> ##### 不使用脱离文档流的布局来定义一个功能模块,请在页面css中对其进行定位和偏移
> ##### 命名规则示例：.lg-m-nav,.lg-m-sidebar,.lg-m-table……(.lg-m-xxx)
> ##### 基本功能模块：
    1. lg-m-nav 导航
    2. lg-m-menu 菜单
    3. lg-m-breadcrumb 面包屑
    4. lg-m-form 表单
    5. lg-m-dialog 弹框
    6. lg-m-login 登录 


### 元件模块 unit
> ##### 命名规则示例：.lg-u-btn,.lg-u-label……(.lg-u-xxx)
> ##### 基本元件：
    1. lg-u-btn 按钮
    2. lg-u-switch 开关 
    3. lg-u-radio 单选 
    4. lg-u-check 多选
    5. lg-u-table 表格
    6. lg-u-tag 标签
    7. lg-u-tip 提示
    8. lg-u-progress 进度条
    9. lg-u-tab 切换页 
    10. lg-u-title  标题
    11. lg-u-text  正文 

##### **lg-u-btn 按钮**
###### 大小：大(lg-l)，中，小(lg-s)，三种size。默认为中按钮。
###### 样式：实心，空心(lg-u-btn-o)，带图标，仅图标，仅文字(lg-plain)，五种样式。默认为实心。
###### 状态：可用，禁用，两种。默认可用。
###### 排列：散列，联体，两种。默认散列。
###### 颜色：灰色，主色(lg-main)，两种。默认灰色。
###### 可多维度组合实现不同按钮
- ###### 例子        
``` 
<button type="button" class="lg-u-btn lg-l">default</button>
<button type="button" class="lg-u-btn lg-main lg-l">main</button>
<button type="button" class="lg-u-btn-o lg-l">default</button>
<button type="button" class="lg-u-btn-o lg-main lg-l">main</button>
<button type="button" class="lg-u-btn lg-plain lg-l">default</button>
<button type="button" class="lg-u-btn lg-main lg-plain lg-l">main</button>
<button type="button" class="lg-u-btn lg-l"><i class="iconfont icon-zhengque"></i>default</button>
<button type="button" class="lg-u-btn lg-main lg-l"><i class="iconfont icon-biaoqian"></i>main</button>
<button type="button" class="lg-u-btn lg-plain lg-l"><i class="iconfont icon-zhengque"></i></button>
<button type="button" class="lg-u-btn lg-main lg-plain lg-l"><i class="iconfont icon-biaoqian"></i></button>
<button type="button" class="lg-u-btn">default</button>
<button type="button" class="lg-u-btn lg-main">main</button>
<button type="button" class="lg-u-btn-o">default</button>
<button type="button" class="lg-u-btn-o lg-main">main</button>
<button type="button" class="lg-u-btn lg-plain">default</button>
<button type="button" class="lg-u-btn lg-main lg-plain">main</button>
<button type="button" class="lg-u-btn"><i class="iconfont icon-zhengque"></i>default</button>
<button type="button" class="lg-u-btn lg-main"><i class="iconfont icon-biaoqian"></i>main</button>
<button type="button" class="lg-u-btn lg-plain"><i class="iconfont icon-zhengque"></i></button>
<button type="button" class="lg-u-btn lg-main lg-plain"><i class="iconfont icon-biaoqian"></i></button>
<button type="button" class="lg-u-btn lg-s">default</button>
<button type="button" class="lg-u-btn lg-main lg-s">main</button>
<button type="button" class="lg-u-btn-o lg-s">default</button>
<button type="button" class="lg-u-btn-o lg-main lg-s">main</button>
<button type="button" class="lg-u-btn lg-plain lg-s">default</button>
<button type="button" class="lg-u-btn lg-main lg-plain lg-s">main</button>
<button type="button" class="lg-u-btn lg-s"><i class="iconfont icon-zhengque"></i>default</button>
<button type="button" class="lg-u-btn lg-main lg-s"><i class="iconfont icon-biaoqian"></i>main</button>
<button type="button" class="lg-u-btn lg-s lg-plain"><i class="iconfont icon-zhengque"></i></button>
<button type="button" class="lg-u-btn lg-main lg-s lg-plain"><i class="iconfont icon-biaoqian"></i></button>
```

    > 大
    <button type="button" class="lg-u-btn lg-l">default</button>
    <button type="button" class="lg-u-btn lg-main lg-l">main</button>
    <button type="button" class="lg-u-btn-o lg-l">default</button>
    <button type="button" class="lg-u-btn-o lg-main lg-l">main</button>
    <button type="button" class="lg-u-btn lg-plain lg-l">default</button>
    <button type="button" class="lg-u-btn lg-main lg-plain lg-l">main</button>
    <button type="button" class="lg-u-btn lg-l"><i class="iconfont icon-zhengque"></i>default</button>
    <button type="button" class="lg-u-btn lg-main lg-l"><i class="iconfont icon-biaoqian"></i>main</button>
    <button type="button" class="lg-u-btn lg-plain lg-l"><i class="iconfont icon-zhengque"></i></button>
    <button type="button" class="lg-u-btn lg-main lg-plain lg-l"><i class="iconfont icon-biaoqian"></i></button>

    > 中
    <button type="button" class="lg-u-btn">default</button>
    <button type="button" class="lg-u-btn lg-main">main</button>
    <button type="button" class="lg-u-btn-o">default</button>
    <button type="button" class="lg-u-btn-o lg-main">main</button>
    <button type="button" class="lg-u-btn lg-plain">default</button>
    <button type="button" class="lg-u-btn lg-main lg-plain">main</button>
    <button type="button" class="lg-u-btn"><i class="iconfont icon-zhengque"></i>default</button>
    <button type="button" class="lg-u-btn lg-main"><i class="iconfont icon-biaoqian"></i>main</button>
    <button type="button" class="lg-u-btn lg-plain"><i class="iconfont icon-zhengque"></i></button>
    <button type="button" class="lg-u-btn lg-main lg-plain"><i class="iconfont icon-biaoqian"></i></button>

    > 小
    <button type="button" class="lg-u-btn lg-s">default</button>
    <button type="button" class="lg-u-btn lg-main lg-s">main</button>
    <button type="button" class="lg-u-btn-o lg-s">default</button>
    <button type="button" class="lg-u-btn-o lg-main lg-s">main</button>
    <button type="button" class="lg-u-btn lg-plain lg-s">default</button>
    <button type="button" class="lg-u-btn lg-main lg-plain lg-s">main</button>
    <button type="button" class="lg-u-btn lg-s"><i class="iconfont icon-zhengque"></i>default</button>
    <button type="button" class="lg-u-btn lg-main lg-s"><i class="iconfont icon-biaoqian"></i>main</button>
    <button type="button" class="lg-u-btn lg-s lg-plain"><i class="iconfont icon-zhengque"></i></button>
    <button type="button" class="lg-u-btn lg-main lg-s lg-plain"><i class="iconfont icon-biaoqian"></i></button>

##### **lg-u-switch 按钮**
###### .lg-u-switch 中包裹input和2个label，注意id和for的对应关系，默认状态：关。 
- ###### 例子        
```
<span class="lg-u-switch">
    <input type="checkbox" id="switch"/>
    <label for="switch">关</label>
    <label for="switch">开</label>
</span>
```
    > <span class="lg-u-switch"><input type="checkbox" id="switch"/><label for="switch">关</label><label for="switch">开</label></span>

##### **lg-u-radio 单选 & lg-u-check 多选**
###### 多选可通过追加类名实现不同状态的checkbox（包括子项） 
###### 可用/不可用：disabled属性
###### 一个lg-u-radio/lg-u-check中有且仅有一个input和一个label
###### 注意input 和label 的顺序
- ###### 例子        
```
<span class="lg-u-radio"> 
    <input type="radio" id="r_1" name="r" />
    <label for="r_1">可用1</label>
</span>
<span class="lg-u-radio"> 
    <input type="radio" id="r_11" name="r"/>
    <label for="r_11">可用2</label>
</span>
<span class="lg-u-radio">
    <input type="radio" id="r_2" disabled="disabled" />
    <label for="r_2">不可用</label>
</span>
<span class="lg-u-radio">
    <input type="radio" id="r_3" disabled="disabled" checked="checked" />
    <label for="r_3">不可用(选中)</label> 
</span>
<span class="lg-u-check">
    <input type="checkbox" id="c_1" />
    <label for="c_1">可用</label>
</span>
<span class="lg-u-check">
    <input type="checkbox" id="c_2" disabled="disabled" />
    <label for="c_2">不可用</label>
</span>
<span class="lg-u-check">
    <input type="checkbox" id="c_3" disabled="disabled" checked="checked" />
    <label for="c_3">不可用(选中)</label>
</span>
<span class="lg-u-check">
    <input type="checkbox" id="c_7" class="lg-parent-part" checked="checked" />
    <label for="c_7">可用(未全选)</label>
</span>
<span class="lg-u-check">
    <input type="checkbox" id="c_8" class="lg-parent" checked="checked" />
    <label for="c_8">可用(全选)</label>
</span>
<span class="lg-u-check">
    <input type="checkbox" id="c_5" disabled="disabled" checked="checked" />
    <label for="c_5">不可用(未全选)</label>
</span>
<span class="lg-u-check">
    <input type="checkbox" id="c_6" disabled="disabled" checked="checked" class="lg-parent" />
    <label for="c_6">不可用(全选)</label>
</span>
```
    >  单选 

    >  <span class="lg-u-radio"><input type="radio" id="r_1" name="r" /><label for="r_1">可用1</label></span>
    >  <span class="lg-u-radio"><input type="radio" id="r_11" name="r"/><label for="r_11">可用2</label></span>
    >  <span class="lg-u-radio"><input type="radio" id="r_2" disabled="disabled" /><label for="r_2">不可用</label></span>
    >  <span class="lg-u-radio"><input type="radio" id="r_3" disabled="disabled" checked="checked" /><label for="r_3">不可用(选中)</label></span>

    >  多选 

    >  <span class="lg-u-check"><input type="checkbox" id="c_1" /><label for="c_1">可用</label></span>
    >  <span class="lg-u-check"><input type="checkbox" id="c_2" disabled="disabled" /><label for="c_2">不可用</label></span>
    >  <span class="lg-u-check"><input type="checkbox" id="c_3" disabled="disabled" checked="checked" /><label for="c_3">不可用(选中)</label></span>
    >  <span class="lg-u-check"><input type="checkbox" id="c_7" class="lg-parent-part" checked="checked" /><label for="c_7">可用(未全选)</label></span>
    >  <span class="lg-u-check"><input type="checkbox" id="c_8" class="lg-parent" checked="checked" /><label for="c_8">可用(全选)</label></span>
    >  <span class="lg-u-check"><input type="checkbox" id="c_5" disabled="disabled" checked="checked" /><label for="c_5">不可用(未全选)</label></span>
    >  <span class="lg-u-check"><input type="checkbox" id="c_6" disabled="disabled" checked="checked" class="lg-parent" /><label for="c_6">不可用(全选)</label></span>


##### **lg-u-table 表格**
###### 在table标签上加上类名即可 
- ###### 例子        
```
<table class="lg-u-table">
    <thead>
        <tr>
            <th class="lg-o">name</th>
            <th class="lg-ro">age</th> 
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>18</td> 
            <td>
                <a><span>删除</span></a>
                <a><span>编辑</span></a>
                <a class="lg-action"><span>更多</span>
                    <ul>
                        <li>上移</li>
                        <li>提交</li>
                        <li>发布</li>
                    </ul>
                </a>
            </td>
        </tr>
        <tr>
            <td>Alice</td>
            <td>18</td> 
            <td>
                <a><span>删除</span></a>
                <a><span>编辑</span></a>
                <a class="lg-action"><span>更多</span>
                    <ul>
                        <li>上移</li>
                        <li>提交</li>
                        <li>发布</li>
                    </ul>
                </a>
            </td>
        </tr> 
    </tbody>
</table>
```
    > <table class="lg-u-table">
    <thead>
        <tr>
            <th class="lg-o">name</th>
            <th class="lg-ro">age</th> 
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>18</td> 
            <td>
                <a><span>删除</span></a>
                <a><span>编辑</span></a>
                <a class="lg-action"><span>更多</span>
                    <ul>
                        <li>上移</li>
                        <li>提交</li>
                        <li>发布</li>
                    </ul>
                </a>
            </td>
        </tr>
        <tr>
            <td>Alice</td>
            <td>18</td> 
            <td>
                <a><span>删除</span></a>
                <a><span>编辑</span></a>
                <a class="lg-action"><span>更多</span>
                    <ul>
                        <li>上移</li>
                        <li>提交</li>
                        <li>发布</li>
                    </ul>
                </a>
            </td>
        </tr> 
    </tbody>
</table>

##### **lg-u-tag 标签**
###### 类型：系统，自定义(lg-del)
###### 选中：lg-active
###### 添加标签辅助类：lg-u-tag-add 
- ###### 例子        
```
<span class="lg-u-tag">系统标签</span>
<span class="lg-u-tag lg-active lg-del">自定义标签</span>
<div class="lg-u-tag-add">
    <input type="text" placeholder="请输入自定义标签" />
    <button type="button" class="lg-u-btn lg-s lg-plain"><i class="iconfont icon-zhengque"></i></button>
    <button type="button" class="lg-u-btn lg-s lg-plain"><i class="iconfont icon-cuowu"></i></button>
</div>
```
    > <span class="lg-u-tag">系统标签</span>
<span class="lg-u-tag lg-active lg-del">自定义标签</span>
<div class="lg-u-tag-add">
<input type="text" placeholder="请输入自定义标签" />
<button type="button" class="lg-u-btn lg-s lg-plain"><i class="iconfont icon-zhengque"></i></button>
<button type="button" class="lg-u-btn lg-s lg-plain"><i class="iconfont icon-cuowu"></i></button>
</div>

##### **lg-u-tip 提示**
###### 类型：toast,bubble,error 
- ###### 例子        
```
<div class="lg-u-toast">这是一个Toast</div>
<div class="lg-u-bubble">这是一个Bubble</div>
<div class="lg-grid-6 lg-m-form-block">
    <label>文本框：</label>
    <input type="text" />
    <span class="lg-u-error">在后面的Error</span>
</div>
```
    > <div class="lg-u-toast">这是一个Toast</div>
<div class="lg-u-bubble">这是一个Bubble</div>
<div class="lg-grid-6 lg-m-form-block">
    <label>文本框：</label>
    <input type="text" />
    <span class="lg-u-error">在后面的Error</span>
</div>

##### **lg-u-progress 进度条**
###### 进度条粒度为0-100整数，通过类名控制进度 
###### 请在lg-u-progress中直接内嵌类lg-x(0-100)
###### 注意lg-0 和label 的顺序
- ###### 例子        
```
<div class="lg-u-progress">
    <div class="lg-0"></div>
    <label>这是一个Progress</label>
</div>
<div class="lg-u-progress">
    <div class="lg-51"></div>
    <label>51%</label>
</div> 
```
    > <div class="lg-u-progress">
    <div class="lg-0"></div>
    <label>这是一个Progress</label>
</div>
<div class="lg-u-progress">
    <div class="lg-51"></div>
    <label>51%</label>
</div>

##### **lg-u-tab 切换页**
###### 样式：无框，有框 
###### 有框样式在内容div上加上类名：lg-u-tab-bd 
- ###### 例子        
```
<ul class="lg-u-tab">
    <li class="lg-u-tab-li ">当前</li>
    <li class="lg-u-tab-li lg-active">分类</li>
    <li class="lg-u-tab-li ">规格</li>
    <li class="lg-u-tab-li ">图文</li>
</ul> 
<ul class="lg-u-tab">
    <li class="lg-u-tab-li ">当前</li>
    <li class="lg-u-tab-li lg-active">分类</li>
    <li class="lg-u-tab-li ">规格</li>
    <li class="lg-u-tab-li ">图文</li>
</ul>
<div class="lg-grid-12">
    <div class="lg-grid-row lg-u-tab-bd">
        <div class="lg-s-blank"></div>
        <div class="lg-grid-12">
            <table class="lg-u-table">
                <thead>
                    <tr>
                        <th>形态\状态</th>
                        <th>实心按钮</th>
                        <th>空心按钮</th>
                        <th>文字按钮</th>
                        <th>图案按钮</th>
                        <th>只有图案</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>中按钮(default)</td>
                        <td>
                            <button type="button" class="lg-u-btn">default</button>
                            <button type="button" class="lg-u-btn lg-main">main</button>
                        </td>
                        <td>
                            <button type="button" class="lg-u-btn-o">default</button>
                            <button type="button" class="lg-u-btn-o lg-main">main</button>
                        </td>
                        <td>
                            <button type="button" class="lg-u-btn lg-plain">default</button>
                            <button type="button" class="lg-u-btn lg-main lg-plain">main</button>
                        </td>
                        <td>
                            <button type="button" class="lg-u-btn"><i class="iconfont icon-zhengque"></i>default</button>
                            <button type="button" class="lg-u-btn lg-main"><i class="iconfont icon-biaoqian"></i>main</button>
                        </td>
                        <td>
                            <button type="button" class="lg-u-btn lg-plain"><i class="iconfont icon-zhengque"></i></button>
                            <button type="button" class="lg-u-btn lg-main lg-plain"><i class="iconfont icon-biaoqian"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <div class="lg-s-blank" style="clear:both"></div>
        <div class="lg-s-blank"></div>
    </div> 
</div>
```
    > <ul class="lg-u-tab">
    <li class="lg-u-tab-li ">当前</li>
    <li class="lg-u-tab-li lg-active">分类</li>
    <li class="lg-u-tab-li ">规格</li>
    <li class="lg-u-tab-li ">图文</li>
</ul>
</br>
<ul class="lg-u-tab">
    <li class="lg-u-tab-li ">当前</li>
    <li class="lg-u-tab-li lg-active">分类</li>
    <li class="lg-u-tab-li ">规格</li>
    <li class="lg-u-tab-li ">图文</li>
</ul><div class="lg-grid-12"><div class="lg-grid-row lg-u-tab-bd">内容</div></div>  


