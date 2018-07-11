# 小程序开始  
  
简单运行demo   了解文件 之间关系  
  app.js   注册小程序应用  
  
		 调用 app函数传入参数 object类型  
		 
  app.json 小程序应用的全局配置配置文件  
		 
		 注册小程序页面路径 “pages” ->对应页面路径  

 page    
  
 页面组成 例如demo 中的4个文件分别是
 
 .		js .json .wxml .wxss   
 
       name.js   -- 注册微信小程序页面类似app.js 需要传入参数object类型   
	   name.json -- 页面的配置  
       name.wxml -- 页面内容 （利用框架或者组件等例如<view></view>）     
       name.wxss -- 页面样式               
   ------------------------------------  
  *|  文件名保持一致  必须 |*  
  
  什么是  wxml
 
    框架设计的一套标签语言，结合组件 wxs 和事件系统 构建出页面结构
  
  语法：
    
    <标签名  属性 > 内容 </>  标签里边也可以包含其他标签
    例如：<view class=“classname” data-name=“A”><view>内容</view></view> 
    
  *|  标签必须闭合 大小写敏感 |*  
  
  WXML特性：
  
    数据绑定  列表渲染  条件渲染 模板引用
    
    数据绑定
    Mustache 语法 变量名加双括号{{message}} 
    例： <view>{{message}}</view>
          name.js
          Page({
            data:{
                message:"第一次渲染数据"
            }
        })
        
    属性绑定
    
    <view>
        <text data-name="{{dataname}}"></text>
    </view>
            name.js
            Page({
            data:{
                dataname:"test"
            }
        })
        
    运算绑定
    <view hidden=“{{flan ？ true ：false}}”>
           
     </view>
                name.js
                Page({
                data:{
                    flag:false
                }
            })     
  详情见官方文档`
   *|  组件 属性小写 |*
     
  基本组件 
     
    icon  图标组件  text 文本组件 rich-text 富文本组件 progress 进度条组件
    
    icon  有效值 例：success_no_circle 成功类型图标 info 提示信息  warn警告 cancel取消 clear关闭 
    
    text 组件
    selectable 长安是否可选 （默认不可选） space 设置文本空格字符大小  decode 字符编码解码 &nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;
    
    rich-text 不能够嵌套多个
    rich-tap 事件流 请看demo->pages->richtext 或者 查看官方文档
    
    progress ->进度条 详情见demo->pages->progress 或者 查看官方文档
  
  表单组件
  
    button ->有时间继续  