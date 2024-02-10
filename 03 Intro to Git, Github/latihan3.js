//latihan3
// NO.1
let numbers = 9;
for (let i = 1; i <= 10; i++){
console.log(`${numbers} x ${i}`)
}

//NO.2

let string = "wadidaw";
let kata = string.length;
// console.log(string[6])
let result

for (let a = 0 ; a < kata; a++){
    console.log(string[a])
    if (string[a] !== string[kata - 1 - a]){
        result = false;
        // console.log(false)
        break;
    }  else {
        result = true
        // console.log(true)
    }    
}
if (result) console.log("palidrome")
else  console.log("bukan palindrome");



 

//NO.3 

let cm = 100000;
let hasil = cm / 100000
console.log(hasil + " km")
console.log(`${hasil} km`)

//NO.4

let currency = "25000";
let len2 = currency.length; //5
let rupiah = ""; //.0 0 0 
let pemisah = 1 // 2 3

for(let b = 0 ; b < len2; b++){ //putaran 0 1 2
        // console.log(currency[b])
        // console.log(currency[len2 - 1 - b])
        rupiah = currency[len2 - 1 - b] + rupiah; 
        console.log(rupiah)

        if (pemisah !== 3){
            pemisah = pemisah + 1 
        } else {
            rupiah = "." + rupiah;
            pemisah = 1
        }
    } console.log(rupiah)
console.log("Rp." +rupiah +",00");

//NO. 5
// let string2 = "Hello Word";



//NnoO.6
// var kalimat = "hello word";
// console.log(kalimat.toUpperCase())




//Example : “hello world” → “Hello World”
// let str = "hello word";
// let len4 = str.length;
// console.log(len4);
// let tampung4 ="";

// for (a4 =0 ; a4 < len4; a4++);{
//     if ( str[a4] == str[a4].toLowerCase){
//         tampung4 = tampung4 + str[a4]
//     }
// }

// for (let a = 0; a < len4 ; a++){
//     tampung2 = (str[a])
//     console.log(tampung2)
//     if ( tampung2 !== tampung2.toLocaleLowerCase){
//        tampung2 = tampung2.toUpperCase
//         console.log(tampung2)
//     } else {
//         console.log("false")
    
// }
// }

//Example : “hello” → “olleh”
let str5 = "hello";
let len5 = str5.length;
let tampung5 ="" //4
console.log(len5)

for (a5 = len5 -1 ; a5 >= 0; a5--){
    tampung5 = tampung5 + str5[a5]
} console.log(tampung5)



// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}

var text = 'So, today we have REALLY good day';

var swappedText = swapCase(text);



// let cap = str.charAt(0) + str.slice(1)
// console.log(cap)

// // let pemisah2 = str.charAt;
// console.log(str.charAt(0).toUpperCase + str.slice(1))


// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let num1 = 42 ;
let num2 = 27 ;
let num3 = 18 ;

if ( num1 < num2 && num1 < num3 ){
    if ( num2 < num3){
        console.log(num3, num2, num1)
    } else{
        console.log(num1, num3, num2)
    }
} else if( num2 < num1 && num2 < num3){ // 1=x 2=y 3=z
    if ( num1 < num3){
        console.log(num2, num1, num3)
    }else{
        console.log (num2, num3, num1)
    }        
} else if ( num3< num1 && num3 < num2){
    if (num1 < num2){
        console.log(num3, num1, num2)
    }else{
        console.log(num3, num2, num1)
    }
}


// string = 1, number = 2, boolean = 3

let input = 

console.log(typeof str5) 

if (typeof input == "string"){
    console.log(`${input} adalah string`)
} else if (
    typeof input == "number"){
    console.log(`${input} adalah number`)
    } else if (
        typeof input == "boolean"){
            console.log(`${input} adalah boolean`)
        }
    

let str7 = "An apple a day keeps the doctor away";
let len7 = str7.length; //36
let tampung7 =""


for (let a7 = 0; a7 < len7; a7++){
    if (str7[a7] === "A" || str7[a7] === "a"){
        console.log(str7[a7])

        tampung7 = tampung7 + "*"
        
    //   str7.length[a7] = "*" 
    } else{
    //    tampung7 = str7[a7] 
       tampung7 = tampung7 + str7[a7]
    }
} 
console.log(tampung7)


// Example : num1 = 42, num2 = 27 → 42
let numX = 42 ;
let numY = 50 ;

if (numX > numY){
    console.log(numX)
} else {
    console.log (numY)
}