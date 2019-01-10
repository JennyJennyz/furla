//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
require(["jquery","header","footer","cookie"], ($) => {
	
	//拼接
	var carobj = JSON.parse($.cookie("car"));
	var arr = [];
	var str = "";
	var allmoney = 1;
	
	
//拼接
	for(var key in carobj){
		var lasttd =carobj[key].num*carobj[key].price;
		str += '<tr class="shop-tr">'+
	            '<td>'+ carobj[key].title +'</td>'+
	            '<td class="zs"><span class="bagnum">'+carobj[key].num+
	            '</span></br></td>'+
	            '<td class="shop-price"><span class="inner-price">￥'+ carobj[key].price +'</span></td>'+
	            '<td class="single-add"><span class="allmoney">'+lasttd+'</span></td>'+
	      	 	'</tr>';   	 
		}

				$(".content-tbody").html(str);
				
				
				
	for (let i in carobj) {
   
  	 arr.push(carobj[i]);
    //遍历对象中的num
	}			
	

	//总价结算
	
		shopcarall();
		function shopcarall(){
			var carobj = JSON.parse($.cookie("car"));
			let sumall = 0;
			for(var key of carobj){		
				sumall += key.num*key.price;		
				}
			console.log(sumall);
			$("#money").html(sumall);
			$.cookie("car",JSON.stringify(arr));
			console.log(arr);
		}
	
	//删除按钮

	
	//删除按钮结束
	
	


	//点击标题跳转回详情页
	var jumpDetail = $("tr td")[0];
	$(jumpDetail).on("click",function(){
		window.location.href = "/html/detail.html";

	})
	
//over
	})
})
