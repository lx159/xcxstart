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
