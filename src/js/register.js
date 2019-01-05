//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
require(["jquery", "header","footer"], () => {

	})
})

//window.onload = function(){
//	tools.$("#div").onsubmit = function(e){
//		//绑定提交时间 注意清除默认事件
//		e = e || window.event;
//		//获取数据
//		tools.ajax({//请求数据的封装函数 属性值属性名冒号连接
//			method:"post",//使用post的获取方式
//			//路径为php文件  从后台数据获取
//			url:"api/v1/register.php",
//			//得到输入框里面的注册框内的内容返回到后台，添加到数据库的表中
//			params: {
//				"username":tools.$("#username").value,
//				"password":tools.$("#password").value,
//				"email" :tools.$("#email").value
//			},
//			//请求数据成功后返回成功的回调函数
//			cbSucc:function(res){//php文件返回的一个	结果用res接收 属性包含res_code 接下来判断res_code的值为1是就是成功的请求到了数据
//				//判断返回值为0 还是1 
//				if(res.res_code){//表示返回值为1 的时候的情况
//					//表示注册成功可以直接去登陆
//					if(confirm("注册成功，去登陆")){
//					//跳转到登陆页面
//					console.log(res);
//					window.location.href = "login.html";
//					}
//				}
//	
//			}
//			
//		})
//		
//		//清除提交的默认事件
//		e.preventDefault();
//		return false;	
//	}
//
//}
//

