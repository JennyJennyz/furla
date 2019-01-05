define(["jquery"], () => {
	class List{
		constructor(){
			this.init();
			
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("list").load("/html/component/list.html", () => {
					resolve();
				})
			}).then(() => {
				
			})
		}

		
	
		
	}
	return new List();
})