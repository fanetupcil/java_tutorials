if (0) { //switch
	const button = document.getElementById("see-review");

	button.addEventListener("click", function () {
		let productid = 2;
		switch (productid) {
			case 1:
			case "2":
				console.log("product 1 " + productid);
				break;
			case 3:
				console.log("product 2 ");
				break;
			default:
				console.log("unknown prod");
		}
	})
}

//for if module 3
if (0) {
	const button = document.getElementById("see-review");
	
	button.addEventListener("click", function(){
		let product = {
			productid: 690,
			"name": "Stefan boss",
			"name2": "Stefan boss2",
			"productNumber": "fr-231-ss",
			"color": "black",
			"standardCost": 1060.31,
			"listPrice": 1231,
			addStandardList: function(){
				return this.listPrice + this.standardCost;
			}
		}
		let _products = [
			{
				productid: 690,
				"name": "Stefan boss",
				"name2": "Stefan boss2",
				"productNumber": "fr-231-ss",
				"color": "black",
				"standardCost": 1060.31,
				"listPrice": 1231,
				addStandardList: function(){
					return this.listPrice + this.standardCost;
				}
			},
			{
				productid: 691,
				"name": "Stefan boss",
				"name2": "Stefan boss2",
				"productNumber": "fr-231-ss",
				"color": "black",
				"standardCost": 1060.31,
				"listPrice": 1231,
				addStandardList: function(){
					return this.listPrice + this.standardCost;
				}
			}
		];
		const { productid, name: bossname } = product; // object destucturing with alias variable!!
		console.log (productid + bossname ) ;
		for (let key in product) {
			console.log (typeof(key) + " " + product[key]);
			
			if (typeof(product[key]) == 'function' ) {
				console.log("TADAAA " + product[key]());
			};
		}

		const property = 'name'; // prop din obiect 
		const { [property]: name2 } = product; // name2 => alias 
		console.log("name : " + name2 );

		// iterate over object in array
		for (const key of _products) { //of is taking _porducts as an iterable obj, 
										//it will take as an obj even if is a string 
			console.log(JSON.stringify(key));
		}
	


	})
}

//module 6 operators 
if (0) {
	const button = document.getElementById("see-review");
	button.addEventListener("click", operators);
	
	function operators () {
		let test = new String;
		if (isString(test)) {
			console.log("It's a string : " + isString(test)) ;
		}

		console.log("instance of " + (test instanceof String));
	};

	function isString(string) {
		console.log(string.constructor.toString().indexOf('String') >= 0)
		return string.constructor.toString().indexOf('String') >= 0;
	}

	
}


// this 
if (1) {
	const button = document.getElementById("see-review");
	button.addEventListener("click", myfunct)

	function myfunct() {
		let product = {
			productid : 100,
			listPrice : 200,
			profit : function (){
				return (this.productid + this.listPrice)
				.toLocaleString('en-US' , {
					style: 'currency', currency: 'USD'
				});
			}
		}
		let product2 = {
			productid : 101,
			listPrice : -1
		}

		console.log(product.profit());
		console.log(product.profit.call(product));
	}
}
console.log (this.toString());