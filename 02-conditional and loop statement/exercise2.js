let n = 60;
let convert = (n * 9 / 5) + 32;
console.log(convert +" farenheit")

let no = 4;
let no1 = 2 ;
if (no % 2 == true){
    console.log("ganjil")
} else{
    console.log("genap")
}

if (no1 % 2 == false){
    console.log("genap")
}

let prime = 6 ;
flag = true
for (i = 2; i <= prime-1; i++)
    if (prime % i == 0) {
        flag = false;
        break;
    }

if (flag == true)
        console.log(prime + " is prime");
    else
        console.log(prime + " is not prime");


const numbers = 5 ;
let sum = 0;
for (i = 0; i <=numbers; i++){
    sum = sum + i;

}
console.log(`sum of first ${numbers} natural numbers is: `, sum);


const numbers1 = 4 ;
let sum1 = 0;
for (i = 0; i <=numbers; i++){
    sum1 = sum1 * i;


}
console.log(`sum of first ${numbers1} natural numbers is: `, sum1);


function factorial(n){
  let answer = 1;
  if (n2 == 0 || n2 == 1){
    return answer;
  }
  else if(n2 > 1){
    for(var i = n2; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return "number has to be positive."
  }  
}
let n2 = 6;
answer = factorial(n2)
console.log("Factorial of " + n2 + " : " + answer);