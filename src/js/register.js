//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
require(["jquery","url", "header","footer","cookie"], ($,url) => {
			
	$(function(){
				
				console.log("2456")
				
				var flagA = false;
				var flagB = false;	
				var flagC = false;	
				var flagD = false;	
		$("#username").on("blur",function(){
					
					let nameReg = /^\w+$/;
					let username = $("#username").val();
						if(!(nameReg.test(username))){
						
							$(".username-wranning").addClass("warnningshow");	
							flagA = false;
						}else{
							flagA = true;
							$(".username-wranning").css({display:"none"});
						}
				})
				//验证密码
		$("#password").on("blur",function(){
						let pwd = $("#password").val();
						let pwdReg = /^.{6,}$/;
						
						if(!(pwdReg.test(pwd))){
							$(".password-wranning").addClass("warnningshow");	
							flagB = false;
						}else{
							flagB = true;
							$(".password-wranning").css({display:"none"});
						}
				})
				
				//邮件
		$("#email").on("blur",function(){
						let email = $("#email").val();
						let emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
						
						if(!(emailReg.test(email))){
							$(".email-wranning").addClass("warnningshow");	
							flagC = false;
						}else{
							flagC = true;
							$(".email-wranning").css({display:"none"});
						}
				})
				//复选框
//				if($(".checkbox").cheked){
//					flagD = true;
//				}else{
//					flagD = false;
//				}
				
				
				//提交事件
				$("#zc").on("click" , function(e){
				//判断是否注册成功
				e.preventDefault();
				
				$.ajax({
					type:"post",
					url:url.baseUrlPhp+"/api/v1/register.php",
					data: {
						"username": $("#username").val(),
						"email": $("#email").val(),
						"password": $("#password").val()
					},
					dataType:"json",
					success: function(res){
								
						if(res.res_code){
							
							if(confirm("注册成功，去登录")){
								window.location.href = "/html/login.html";
							}
						}
				}
				
			})
				
				if(flagA&&flagB&&flagC){
					//取用户名密码邮箱存入cookie
					let username = $("#username").val(),
						password = $("#password").val();
					var obj ={
						username:username,
						password:password
					};
					$.cookie("user",JSON.stringify(obj));
					console.log($.cookie("user"));
					
			}
					
			})
			
			//结尾
	})
})
})



