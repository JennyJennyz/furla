define(["jquery","cookie"], () => {
	
	class Header{
		constructor(){
			this.init();
	
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
					this.login();
					this.tab();
					this.index();
					this.liststay();
					this.top();
					this.username();
					this.exit();
			})
		}
		
		
		//登录注册弹窗
		login(){
				
				$(".login-btn").on("mouseenter",function(){
						$(".login-window").addClass("loginshow");
						
				});
				$(".login-btn").on("mouseleave",function(){
					this.timer=setTimeout(()=>{
						$(".login-window").removeClass("loginshow");
					},1000);	
				})
			
				
			
			}
		
		//选项卡
		tab(){
			
			//woman选项卡
			$("#nav li:eq(1)").on("mouseenter",function(){	
				$(".woman-list").addClass("navshow").siblings().removeClass("navshow");
			})
			$("#nav li:eq(1)").on("mouseleave",function(){	

						$(".woman-list").removeClass("navshow");


		})
			
			//Furla选项卡
			$("#nav li:eq(4)").on("mouseenter",function(){	
				$(".furla-world").addClass("navshow").siblings().removeClass("navshow");
				
			
			})
			$("#nav li:eq(4)").on("mouseleave",function(){	

					$(".furla-world").removeClass("navshow");

		
		})
		}	

		//选项卡停留事件
		liststay(){
			
			$(".stay").on("mouseenter",function(){				
				$(this).addClass("navshow").siblings().removeClass("navshow");

			})
			$(".stay").on("mouseleave",function(){
					$(this).removeClass("navshow");

			})
		}
		
		
		//点击logo回到主页
		index(){
			
		$("#logo").on("click",function(){
			location.href = "../index.html";
		})
		
		}
		
		//滚动条事件
		top(){
			
			//当滚动条的位置处于距顶部200像素以下时，跳转链接出现，否则消失
			$(window).on("scroll",function(){
				var scrollTop = $(window).scrollTop();//scrollTop()垂直位置的
				if(scrollTop > 200){
					//console.log(1);
					$("#totop").fadeIn(500);
				}else{
					//console.log(0);
					$("#totop").fadeOut(500);
				}
				//当点击跳转链接后，回到页面顶部位置
			})
			
			$("#totop").on("click",function(){
					
					$("body,html").animate({scrollTop:0},500);
					
			})

		}
		//top结束
			
		//存用户名
		username(){
			if($.cookie("user")){
				$(".welcome-username").html(JSON.parse($.cookie("user")).name);
			}else{
				$(".welcome").html("");
			}
								
		}
			
		//退出登录删除cookie
		exit(){
					
			$(".exit").on("click",function(){
				if(confirm("确定要退出登录吗？")){
				$.cookie("user","", {expires:-1,path:"/"});
				window.location.href = "/html/login.html";
				
				}
			})
		
		}
	
			
	//尾部
	
	}
	return new Header();
		//存用户名
		
})

