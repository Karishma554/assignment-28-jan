var input = prompt("Enter the size of fibonaci series")
var num1 = 0;
var num2 = 1;


console.log(num1);
console.log(num2);
var num3;
for(i = 5; i<=input; i++){

  num3 = num1+num2;

  console.log(num3);
num1=num2;
num2=num3;
}