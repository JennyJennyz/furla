define(["jquery"], () => {
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
				console.log("a");
				$(".woman-list").addClass("navshow").siblings().removeClass("navshow");
			
			})
			$("#nav li:eq(1)").on("mouseleave",function(){	
				this.timer=setTimeout(()=>{
						$(".woman-list").removeClass("navshow");
//						$(".woman-list").on("mouseenter",function(){
//							console.log("333");
//							clearTimeout(this.timer);
//						})
							
						}
				},1000)
			
			
			//Furla选项卡
			$("#nav li:eq(4)").on("mouseenter",function(){	
				console.log("b");
				$(".furla-world").addClass("navshow").siblings().removeClass("navshow");
				
			
			})
			$("#nav li:eq(4)").on("mouseleave",function(){	
				this.timer=setTimeout(()=>{
						$(".furla-world").removeClass("navshow");
				},1000)
		
			}
		}	
		
		//选项卡停留事件
		
		
		
		//点击logo回到主页
		index(){
		$("#logo").on("click",function(){
			location.href = "../index.html";
		})
		
		}
		
		
	//尾部
	
	}
	return new Header();
})

