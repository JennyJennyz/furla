require(["./requirejs.config"], () => {
  require(["jquery", "url","template", "header","footer","cookie"], ($, url,template) => {
  	//连接口
    $(function(){
      //获取id
      let arrSearch = location.search.slice(1).split("=");
      let searchObj = {};
      searchObj[arrSearch[0]] = arrSearch[1];

      $.ajax({
        url:url.baseUrlRap+"/detail",
        type:"GET",
        data: searchObj,
        dataType:"json",
        success: function(res){
          
          console.log(res);
          //添加到页面
          $(".detail-bag-img").attr("src",res.res_body.img);
          $("#price").html("￥"+res.res_body.price);
          $("#title").html(res.res_body.title);
          $(".detail-bag-smallimg1").attr("src",res.res_body.img1);
          $(".detail-bag-smallimg2").attr("src",res.res_body.img2);
          $(".detail-bag-smallimg3").attr("src",res.res_body.img3);
          $(".detail-bag-smallimg4").attr("src",res.res_body.img4);       
  		 		$(".detail-bag-img").attr("src",res.res_body.img1);
         		//存cookie
         		  //添加到购物车事件
  		 
		    $(".addshopcar").on("click",function(){
		    	
		    	 var title = res.res_body.title,
								price = res.res_body.price,
								img = res.res_body.img;
						var obj = {
								id:searchObj.id,
								title:title,
								price:price,
								img:img,
								num:1
							};
							var flag = true;
								
		var arr = $.cookie("car")? JSON.parse($.cookie("car")) : [] ;
			
		for(let i = 0 ;i<arr.length;i++){
					if(arr[i].id == obj.id){					
						console.log("s");
							arr[i].num++;
							flag=false;
							break;
					}
									
			}		
					if(flag === true){
							arr.push(obj); 
					}
				
					$.cookie("car",JSON.stringify(arr));
					console.log($.cookie("car"));
					
					alert("添加购物车成功");
   				 //添加购物车完成
         	//存cookie
         	
      		 })//加购物车
      		 //跳转页面
      		   $(".seeshopcar").on("click",function(){
      		  		
		    						window.location.href = "/html/shopcar.html";
		  						 
      		   })
      		   
      		   //详情页选项卡
      		   $(".detail-bag-smallimg").on("click",function(){
      		   	$(this).addClass("bord").parent().siblings().children().removeClass("bord");
						
							$(".detail-bag-img").attr("src",$(this).attr("src"));
      		   })
      		   
      		   
      		   //微信二维码
      		   $(".wechat").on("mouseenter",function(){
      		   		$(".wechati").removeClass("wechatnone").addClass("wechatshow");
      		   })
      		    $(".wechat").on("mouseleave",function(){
      		   		$(".wechati").removeClass("wechatshow").addClass("wechatnone");
      		   })
      		 
					}//sucess
      })//连接口完成
	

    })
    
  })
})
  