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
	            '<td class="zs"><a href="javascript:;" class="zs-num addbtn">+</a><span class="bagnum">'+carobj[key].num+
	            '</span><a href="javascript:;" class="zs-num lessbtn">-</a></br><a href="javascript:;" class="delBtn">移除</a></td>'+
	            '<td class="shop-price"><span class="inner-price">￥'+ carobj[key].price +'</span></td>'+
	            '<td class="single-add"><span class="allmoney">'+lasttd+'</span></td>'+
	      	 	'</tr>';   	 
		}

				$(".content-tbody").html(str);
				
				
				
	for (let i in carobj) {
   
  	 arr.push(carobj[i]);
    //遍历对象中的num
	}			
    //增加数量按钮  		
	//加减按钮绑定事件
	
//	$(".lessbtn").on("click",function(){
//		$(".bagnum").html(--bagnum);
//		if(bagnum<=1){
//		$(".bagnum").html(1);
//		}
//		add();
//	})
		
	//事件委派来增加减少
	//增加
	$(".shop-tr").on("click",".addbtn",function(){
			var detailnum = $(this).siblings(".bagnum").html();
			$(this).siblings(".bagnum").html(++detailnum);
			var dj = $(this).parent().siblings(".shop-price").children(".inner-price").html().slice(1);
			var sl = $(this).siblings(".bagnum").html();
			
			var singlesum = dj*sl;
			$(this).parent().siblings(".single-add").children(".allmoney").html(singlesum);
			
			//取下标
			var index = $(this).parent().parent().index();
//			console.log(index);
//			console.log(arr[index].num);
			arr[index].num++;
			//取小计
			let sumall = 0;
			for(var key of carobj){
				
				sumall += key.num*key.price;
				
			}
			console.log(sumall);
			$("#money").html(sumall);
			$.cookie("car",JSON.stringify(arr));
			console.log(arr);
		
	});
	//减法按钮
	$(".shop-tr").on("click",".lessbtn",function(){
			var detailnum = $(this).siblings(".bagnum").html();
			console.log(detailnum);
			$(this).siblings(".bagnum").html(--detailnum);
			if(detailnum <= 1){
				$(this).siblings(".bagnum").html(1);
			}
			var dj = $(this).parent().siblings(".shop-price").children(".inner-price").html().slice(1);
			var sl = $(this).siblings(".bagnum").html();
			
			var singlesum = dj*sl;
			$(this).parent().siblings(".single-add").children(".allmoney").html(singlesum);
			
				console.log(singlesum);
			//cookie
			var index = $(this).parent().parent().index();
//			console.log(index);
//			console.log(arr[index].num);
			arr[index].num--;
			//取小计
			//直接调用shopcarallbug
			let sumall = 0;
			for(var key of carobj){
				
				sumall += key.num*key.price;
				
			}
			console.log(sumall);
			$("#money").html(sumall);
			$.cookie("car",JSON.stringify(arr));
				console.log(arr);
				
	
	});
	
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
			$(".shop-tr").on("click",".delBtn",function(){
			var otr = $(this).parent(".zs").parent();
			
			var index = $(this).parent().parent().index();
			console.log(index);
			//cookie
			arr.splice(index,1);
			otr.remove();
			$.cookie("car",JSON.stringify(arr));
			console.log($.cookie("car"));			
			shopcarall();
	});

	
	//删除按钮结束
	
	


	//点击标题跳转回详情页
	var jumpDetail = $("tr td")[0];
	$(jumpDetail).on("click",function(){
		window.location.href = "/html/detail.html";

	})
	
//over
	})
})
