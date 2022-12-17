function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function setDiscount(discount) {
    document.getElementById('reducere').textContent = discount + "% OFF";
}


function add (a, b) {
    console.log(a+b);
}

let functionExpresion = function loggingFunction () {
    console.log("merge");
}