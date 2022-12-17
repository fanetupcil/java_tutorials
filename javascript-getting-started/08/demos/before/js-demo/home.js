let mySymbol = Symbol();
let person = {
	name: "john",
	age: 32,
	partTime: false,
	[mySymbol]: "secretInformation",
};
person["age"] = 44;
//showMessage(person.age);

let message = {
	msg: "Hello",
};

function changeMessage(message) {
	message.msg = "hi";
}
changeMessage(message);
//showMessage(message.msg);

let myDate = new Date();
//showMessage( myDate.toDateString() );
let number = Math.random() * 100;

const header = document.getElementById("message");
header.style.color = "#FFF";
header.style.fontWeight = "100";

if (0) {
	const button = document.getElementById("see-review");
	button.addEventListener("mouseover", function () {
		console.log("click");
		const review = document.getElementById("review");
		let reviewText = document.getElementById("see-review");

		if (review.classList.contains("d-none")) {
			reviewText.textContent = "close Review";
			review.classList.remove("d-none");
			reviewText.style.color = "blue";
		} else {
			reviewText.textContent = "SEE REVIEW";
			review.classList.add("d-none");
			reviewText.style.color = "red";
		}
	});
}


// Arrays

if (0) {
let values = Array.of('a', 'b', 'c');
console.log(Array.isArray(values));
console.log(values[0]);

const containers = 
	document.getElementsByClassName('container');
console.log(containers);
containers[3].classList.add("d-none");
}

//scope $ hoisting

if (1) {

	
}