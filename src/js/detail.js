require(["./requirejs.config"], () => {
  require(["jquery", "url","template", "header","footer","cookie"], ($, url,template) => {
  	//连接口
  	console.log("8885");
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
						var obj = {
								id:searchObj.id,
								title:title,
								price:price,
								img:img,
								num:1
							};
							var flag = true;
					//console.log(obj);				
			var arr = $.cookie("car")? JSON.parse($.cookie("car")) : [] ;
						console.log(obj);
						console.log(arr);
						
		
					
		for(let i = 0 ;i<arr.length;i++){
				
					
					if(arr[i].id == obj.id){					
							console.log(arr[i].num);
							arr[i].num++;
							flag=false;
					}
					if(flag === true){
							arr.push(obj); 
					}				
				}		

					arr.push(obj); 
					$.cookie("car",JSON.stringify(arr));
					console.log($.cookie("car"));

		
			
			$.cookie("car",JSON.stringify(arr));
			
			console.log($.cookie("car"));
			
				if(confirm("添加购物袋完成,是否去查看我的购物袋？")){
		    	window.location.href = "/html/shopcar.html";
		   };
   				 //添加购物车完成
         	//存cookie
         	
      		 })//加购物车
					}//sucess
      })//连接口完成
	

    })
    
  })
})
  