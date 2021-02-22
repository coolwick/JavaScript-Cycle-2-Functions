//function definition

//let bill = 100;
//let taxRate = 0.13;
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  //console.log(billAmount, taxRate);
  //this is the function body
  console.log("Run Calculate Bill!!");
  const total = billAmount + (billAmount * taxRate) +(billAmount * tipRate);
  return total;
}

//Function call. or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate);
//const myTotal2 = calculateBill(200, 0.13);
//console.log(myTotal, myTotal2);

//bill = 200;
//const myTotal2 = calculateBill();
//console.log(myTotal, myTotal2);
//console.log ('your total is $${my total}');

//console.log("Your total is $${calculateBill()}");

//const firstName = "wes";
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

//const greeting = sayHiTo("Wes");
//console.log(greeting);

//const kait = 100;
//const myTotal3 = calculateBill(kait + 50, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  return `HEY ${(name, toUpperCase())}`;
}


const myBill4 = calculateBill(100, , 0.2);
console.log(myBill4);