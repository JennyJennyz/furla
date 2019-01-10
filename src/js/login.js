require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
require(["jquery","url", "header","footer","cookie"], ($,url) => {
	

	$(function(){		
		//ajax 起
			$("#login-submit").on("click",function(e){		
						//ajax请求数据
				e.preventDefault();
				
				$.ajax({
				type: "post",
				url:url.baseUrlPhp+"/api/v1/login.php",
				data: {
					"username": $("#username").val(),
					"password": $("#password").val()
				},
					
				dataType:"json",
				success: function(res){
					console.log(res);
					if(res.res_code){
							
						//是否记住我
						if($("#remember:checked")){
							//把用户名和用户id存cookie
							
							$.cookie(
								"user", //cookie的名字
								JSON.stringify({ //cookie的存入值
									id:res.res_body.id, 
									name:res.res_body.username,
									password:res.res_body.password
								}),
								{expires:3,
								path:"/"}//存根路径
							);
							console.log($.cookie("user"));
						}else{
							//把用户名和用户id存cookie
							console.log("meicun");
							$.cookie(
								"user", 
								JSON.stringify({
									id:res.res_body.id, 
									name:res.res_body.username
								}),
								{path:"/"}//存根路径
							);
						
						}						
						if(confirm("登录成功，去首页")){
							window.location.href = "/index.html";
						}
					}else{
						alert("数据请求失败，请重试");
					}
				}
			
			})
			
		})
	//click
	//	//ajax 终
		
			
		
//				$("#login-submit").on("click",function(e){	
//				var flag = false;//如果已经有cookie则将用户名与密码放入input框中
//				if($.cookie("user")!=null){
//					var arr = JSON.parse($.cookie("user"));
//					console.log(arr);
//					$("#username").val(arr.username);
//					$("#password").val(arr.password);
//				}
//				
//				//old事件
//					console.log("1");
//					e.preventDefault();
//					let usern = $("#username").val();
//					let	psd = $("#password").val();	
//					let arr = JSON.parse($.cookie("user"));
//					
//					console.log(usern);
//					console.log(arr.username);
//					console.log(psd);
//					console.log(arr.password);
//				
//					if(usern == arr.username && psd == arr.password){
//						flag = true;
//					}else{
//						flag = false;
//					}                           
//					//如果flag为真则正确
//					if(flag){
//						if(confirm("登录成功去首页吗？")){
//							window.location.href ="/index.html";
//						};
//						
//					}else{
//						alert("请输入正确的账号密码");
//					}

	//结束
		})

	})
})


