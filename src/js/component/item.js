define(["jquery","template"], ($,template) => {
	function Item(){
		
	}
	
	Item.prototype.init = function(url){
		//得到url 请求数据 渲染解构
		console.log(url);
		//load
		new Promise((resolve,reject)=>{
			$("#list-item").load("/html/component/item.html",()=>{
				resolve();
			})
		}).then(() =>{
			
			$.ajax({
			url:url,
			type:"get",
			success:function(res){
//				console.log(res);
//渲染
				if(res.res_code ===1 ){
					let list = res.res_body.data;
					
					let html = template("list-template",{list:res.res_body.data});
					console.log(html);
					$("#list-item ul").html(html);
				}
			}

		
		})
			
		})
		
		
		
	}
	return new Item();
})