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
          console.log(res.res_body.img);
          $(".detail-bag-img").attr("src",res.res_body.img);
          $("#price").html("￥"+res.res_body.price);
          $("#title").html(res.res_body.title);
         	
         	
         		//存cookie
         		  //添加到购物车事件
		    $(".addshopcar").on("click",function(){
		    	    	
		    		var title = res.res_body.title,
								price = res.res_body.price,
								img = res.res_body.img;
						var obj ={
						"title":title,
						"price":price,
						"img":img
					};
					console.log(obj);
					$.cookie("car",JSON.stringify(obj));
		    	
					console.log($.cookie("car"));
					
		    	window.location.href = "/html/shopcar.html";
		    });
   				 //添加购物车完成
         	//存cookie

         	
        }
						
      })
	//连接口完成
	
	
						
	
    })
    
    
    
  
    
 
    
    
    
  })
})