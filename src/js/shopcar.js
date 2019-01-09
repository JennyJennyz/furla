//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
require(["jquery","header","footer","cookie"], ($) => {
	
	
	var arr = JSON.parse($.cookie("car"));
	console.log(arr);
	var bagnum = 1;
	var str = "";
//	for(var value of arr){	
		str += '<tr>'+
	            '<td>'+ arr.title +'</td>'+
	            '<td class="zs"><a href="javascript:;">+</a href="javascript:;"><span>'+bagnum+'</span><a href="javascript:;">-</a href="javascript:;"></td>'+
	            '<td><span>'+ arr.price +'</span><input type="text"></td>'+
	            '<td><span></span></td>'+
	      	 	'</tr>';
	      	 
//		}

				$(".content-tbody").html(str);
		
		
	

	})
})
