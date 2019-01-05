require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
require(["jquery", "header","footer"], () => {

	})
})



//window.onload = function(){//样式先加载 最后执行
//	//向后台请求数据，如果数据库中存在就直接登陆成功跳转首页
//	//没有转回注册页注册  submit属于表单事件
//	tools.$("#div").onsubmit = function(e){//要阻止默认事件
//		e = e || window.event;
//			//数据请求到php
//			tools.ajax({
//				method : "post",
//				url:"api/v1/login.php",
//				params :{
//					username : tools.$("#username").value,
//					password :tools.$("#password").value
//				},
//				cbSucc:function(res){
//					
//					if(res.res_code){//返回值为1表示请求成功
//						//判断是否勾选记住我					
//						if(tools.$("#remember").checked){
//							//勾选checked的之后设置cookie值为3天过期
//							tools.cookie(
//								"user",
//								JSON.stringify(
//									{id : res.res_body.id,
//									name :res.res_body.username
//								}),
//								{expires:3}//cookie3天过期								
//							)
//						}else{//没有勾选记住我的就是会话过期
//							tools.cookie(
//								"user",
//								JSON.stringify({
//									id:res.res_body.id,
//									name:res.res_body.username
//								})
//							);						
//						}
//						//登录成功后跳转首页
//						if(confirm("登录成功去首页吧")){
//							window.location.href = "index.html";
//						}
//						
//					}
//					
//					else{
//							alert("找不到该用户名哦，请重新注册！");
//						}
//				},
//				cbFail:function(){
//					alert("网络错误，请重试");
//				}
//	
//			});
//		e.preventDefault();
//		return false;
//	}	
//}

