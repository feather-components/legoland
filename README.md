# Legoland
## 概述
> 适用于管理后台的前端UI模块化框架(css+html+js)
> Legoland.css是独立的样式库,Legoland html规范约定了页面元素组合嵌套的规则,Legoland.js是依赖Legoland.css实现的JS组件库

## Legoland.css
> - 模块化的css样式库
> - 解决：选择器繁琐冗长；命名冲突；层级结构不清晰；代码难以复用；
> - 基本原则: 约定页面*由且仅由*几种基本结构体构成：结构模块、功能模块，以及元件模块。其他元素不能独立于这三者存在。

### 框架结构模块 structure
> 命名规则示例：.s-body,.s-head,.s-tail……(.s-xxx) 
> - 基本结构：
    1 layout 布局
    2 grid 栅格 
    ……

### 功能模块 module
> - 一个功能相对独立且完整的结构体，可以理解为css范围内的组件:一个样式相对独立且完整的类,只对外暴露一个类名
> - 不要使用一个脱离文档流的布局来定义一个功能模块,应该在页面css中对其进行定位和偏移
> - 命名规则示例：.m-nav,.m-sidebar,.m-table……(.m-xxx)
> - 基本功能模块：
    1 m-nav 导航
    2 m-menu 菜单
    3 m-breadcrumb 面包屑
    4 m-form 表单
    5 m-dialog 弹框
    6 m-login 登录
    ……


### 元件模块 unit
> - 命名规则示例：.u-button,.u-input,.u-tip……(.u-xxx)
> - 基本元件：
    1 u-btn 按钮
    2 u-tip 提示
    3 u-tab 标签
    4 u-img 图片
    5 u-ul  列表
    6 u-radio 单选 
    8 u-checkbox 多选
    9 u-input 输入框
    …… 
