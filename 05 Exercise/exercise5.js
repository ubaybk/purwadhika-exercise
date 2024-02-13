//NO. 1
//with function
function denganFunction (arr9){
   arr9.sort((a,b) => a- b)
   console.log(arr9)
   const min = arr9[0];
   const max = arr9[5];
   const sum = arr9.reduce((a,b) => a+b);
   const avg = sum/arr9.length
   console.log(sum)

   return {
    min,
    max,
    sum
   }
}

console.log(denganFunction([1,4,6,2,10,24]))

// wihtout sort function
function cariNilai (arr){
    
    let min = arr[0];
    let max = arr[0];
    let total = 0;
    for (let i = 0 ; i < arr.length; i++){
        
        if (arr[i] < min ){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }

        total = arr[i] + total
        console.log(total)

        };

        const rata = total /arr.length;
        return {
            nilaiTerkecil : min,
            nilaiTerbesar : max,
            rataRata : rata
            
    }

}
const arrayValue = [1,4,6,2,10,24];
const hasil = cariNilai(arrayValue);


console.log(`lowest : ` + hasil.nilaiTerkecil)
console.log(`highest : ` + hasil.nilaiTerbesar)
console.log('average ' + hasil.rataRata )

//NO.2
//Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
function concatenateWords(arr) {
    if (arr.length === 0) {
        return '';
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        const allButLast = arr.slice(0, -1).join(',');
        const lastWord = arr[arr.length - 1];
        return `${allButLast} and ${lastWord}`;
    }
}

// Example usage:
const arr = ["apple", "banana", "cherry", "date"];
const concatenatedString = concatenateWords(arr);
console.log(concatenatedString); // Output: "apple,banana,cherry, and date"



//NO.3
//Example : “Hello World” → [“Hello”, “World”]
function split(str){
    return str.split(" ")
}
console.log(split("hello word"))

//NO.4
//Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function calculate (value1, value2){
    if (value1.length !== value2.length){
        return "Kedua array harus punya panjang yang sama"
    }

    //untuk menampung hasil
    let hasil = [];

    for (let v = 0 ; v < value1.length; v++){
        console.log(v)
        hasil.push (value1[v] + value2[v])
    }

    return hasil; 
}

var value1 = [1,2,3,4];
var value2 = [2,1,3,2]
const value = calculate(value1,value2)
console.log(value)

var aar1 = [1,2,1,2];
var aar2 = [1,3,1,3]
const hasil2 = calculate(aar1,aar2)
console.log(hasil2)

//cara lain
function calculateArray(arrX,arrY){
    let total =[];

    for (let t = 0; t < arrX.length; t++){
        total.push(arrX[t]+arrY[t])
        console.log(total)
        
    }
return total
} 
var arrX1 = [1,2,3,4]
var arrY1 = [1,1,2,2]
console.log(calculateArray(arrX1, arrY1))

//NO.5
//a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4] 
//b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

function tambahBelakang (arr1, newValue){
  let sudahAda = false;
    for (let x = 0; x < arr1.length; x++){
        if (arr1[x] === newValue){
            sudahAda = true;
            break;
        }
    }
     
    if (!sudahAda){
        arr1.push(newValue);
    }
    return arr1;
}

let arr1 = [2,2,2,2];
let elemenBaru1 = 4;
arr1 = tambahBelakang(arr1,elemenBaru1);
console.log(arr1);

//Cara Lain
function tambah (arrI, valueI){
    for (let aI = 0; aI < arrI.length; aI++){
        if( arrI[aI] === valueI){
            return `${valueI} sudah ada`
        }
        
    }
    arrI.push(valueI)
 return arrI
}
let arrI = [1,2,3,4]
let valueI = 5
console.log(tambah(arrI,valueI))


//EXERCIXE II
//NO.1
//Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6] 
function removeOddNumber (number){
    let tampung = []
    for (let y = 0; y < number.length; y++){
        if (number[y] % 2 === 0 ){
            tampung.push(number[y]);
        }
    }
    return tampung;
}
let angka = [1,2,3,4,5,6]
console.log(removeOddNumber(angka))

//EXERCIXE II
//NO.2
// Example : 
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
//  The function will return [5, 10, 24, 3, 6]
function element5 (maxSize, ...element){
    const tampung2 = []
   for (const el of element ){
        if (tampung2.length < maxSize){
            tampung2.push(el)
        }else{
            break;
        }
       
   }
   return tampung2
}
let maxSize = 5;
let element = element5 (maxSize,5, 10, 24, 3, 6, 7, 8)
console.log(element)

//cara lain
function insertArray (max, element){
    let tmp = []
    for(let a = 0; a < max ; a++){
        if (element[a] !== undefined)
       
            tmp.push(element[a])
        }
    
    return tmp
}
let max1 = 4
let element1 = [3,2,1,4,5]
console.log(insertArray(max1,element1))

//EXERCIXE II
//NO.3
//Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] 

function combine (bentuk1, bentuk2){
    let gabung = bentuk1.concat(bentuk2)
return gabung
}

let bentuk1 = [1,2,3]
let bentuk2 = [4,5,6]
console.log(combine(bentuk1,bentuk2))

//EXERCIXE II
//NO.4
//Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 

function hapusDuplikat (arrDup){
    let tmp2=[]
    let ubahUrutan = arrDup.sort()
    console.log(ubahUrutan)

    for (let a = 0; a < arrDup.length; a++){
        console.log(a)
        if (
            ubahUrutan[a] === ubahUrutan [a - 1] || ubahUrutan[a] === ubahUrutan [a +1]
        ){
            if (!tmp2.find((x) => x == ubahUrutan[a])){
                tmp2.push(ubahUrutan[a])
            }
        }
    }
return tmp2
}
let arrDup = [3,3,2,2,1,2,6,5,4,2,1,6]
console.log(hapusDuplikat(arrDup))


function removeDuplicates(array) {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


//EXERCIXE II
//NO.5
//Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
function cariNilaiBerbeda(array1, array2) {
    var nilaiBerbeda = [];

    // Loop melalui array pertama
    for (var i = 0; i < array1.length; i++) {
        var nilai = array1[i];
        var ditemukan = false;

        // Periksa apakah nilai dari array pertama juga ada di array kedua
        for (var j = 0; j < array2.length; j++) {
            if (nilai === array2[j]) {
                ditemukan = true;
                break;
            }
        }

        // Jika nilai tidak ditemukan di array kedua, tambahkan ke nilaiBerbeda
        if (!ditemukan) {
            nilaiBerbeda.push(nilai);
        }
    }

    // Loop melalui array kedua untuk menemukan nilai yang tidak ada di array pertama
    for (var k = 0; k < array2.length; k++) {
        var nilai = array2[k];
        var ditemukan = false;

        // Periksa apakah nilai dari array kedua juga ada di array pertama
        for (var l = 0; l < array1.length; l++) {
            if (nilai === array1[l]) {
                ditemukan = true;
                break;
            }
        }

        // Jika nilai tidak ditemukan di array pertama, tambahkan ke nilaiBerbeda
        if (!ditemukan) {
            nilaiBerbeda.push(nilai);
        }
    }

    return nilaiBerbeda;
}

// Contoh penggunaan
var array1 = [1, 2, 3, 4, 5];
var array2 = [4, 5, 6, 7, 8];

var nilaiBerbeda = cariNilaiBerbeda(array1, array2);
console.log(nilaiBerbeda); // Output: [1, 2, 3, 6, 7, 8]


var array11 = [1, 2, 3, 4, 8,9];
var array21 = [4, 5, 6, 7, 8,0];

var nilaiBerbeda1 = cariNilaiBerbeda(array11, array21);
console.log(nilaiBerbeda1); 

// cara lain
function findDupe(arr) {
    let dupe = [];
    let reverseArr = arr.sort();
    console.log(reverseArr);
    for (let i = 0; i < arr.length; i++) {
      if (
        reverseArr[i] === reverseArr[i - 1] ||
        reverseArr[i] === reverseArr[i + 1]
      ) {
        if (!dupe.find((x) => x == reverseArr[i])) {
          dupe.push(reverseArr[i]);
        }
      }
    }
  
    return dupe;
  }
  
  console.log(findDupe([5, 4, 6, 5, 2, 3, 1, 6, 1]));

//EXERCIXE III
//NO.1
function sumNum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i])) result++;
    }
    return result;
  }
  
  console.log(sumNum([1, [], undefined, {}, "string", {}, [], null, true]));
  
  const primitiveDataOnly = (arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "object" || arr[i] === null) res.push(arr[i]);
    }
    return res;
  };
  
  console.log(
    primitiveDataOnly([1, [], undefined, {}, "string", {}, [], null, true])
  );

  //cara lain
  //cara lain
function findPrimitive (arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if ( 
        typeof arr[i] === "number" ||
        typeof arr[i] === "string" ||
        typeof arr[i] === "boolean" ||
        arr[i] == null
      ){
        newArr.push(arr[i])
      }
    }return newArr
  }
  console.log(findPrimitive([1, [], undefined, {}, "string", {},[], null, true]))
  

//EXERCIXE III
//NO.2
//Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// function terkecilKedua (number2Terkecil){
//     for (let t = 0 ; t < number2Terkecil.length; t++){
//         if( )
//     }
// }

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array tidak memiliki cukup elemen.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "Tidak ada nilai terkecil kedua dalam array.";
    }

    return secondSmallest;
}
// Contoh penggunaan
const array4 = [5, 3, 1, 7, 2, 6];
console.log("Nilai terkecil kedua dalam array:", findSecondSmallest(array4));


//cara lain
function nilaiTerkecil2 (arr){
    let arrSort = arr.sort((a, b) => a - b)
    console.log(arrSort)
    return arrSort[1]
} 
console.log(nilaiTerkecil2([5,6,7,8,2,3]))



//EXERCIXE III
//NO.3
//Write a function from a given array of mixed data types and return the sum of all the number
//a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function tambahNumber (number3){
    let sum1 = 0
    for (let a = 0; a < number3.length; a++){
        if ( typeof number3[a] == "number"){
            sum1 = sum1 + number3[a]
        }
    }

return sum1
}
console.log(tambahNumber(["3", 1, "string", null, false, undefined, 2,1] ))


//EXERCIXE III
//NO.4
//Write a function from the below array of number that will return sum of duplicate values. let 
//arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
//a. The function will return 40

function tambahDuplikat (arrDuplikat){
    let tampung = 0;
    let urutanDup = arrDuplikat.sort ((a,b)=>(a-b))
    console.log(urutanDup)
    for (let i = 0; i < arrDuplikat.length; i++){
        if (urutanDup[i] == urutanDup[i-1]||
            urutanDup[i] == urutanDup[i+1]){
                tampung = tampung + urutanDup[i]
            }

        
    }
    return tampung
}
console.log(tambahDuplikat([10,10,10,40,10,20,30,40]))

//EXERCIXE III
//NO.5
// game of rock
function rockPaperScissor(playerHand) {
    // 1 untuk gunting
    // 2 untuk batu
    // 3 untuk kertas
    let message = "";
    let functionHand = Math.floor(Math.random() * 3) + 1;
    if (playerHand.toLowerCase() == "gunting".toLowerCase()) {
      if (functionHand == 1) {
        message = "function return gunting its a tie";
      } else if (functionHand == 2) {
        message = "function return batu its a lose";
      } else {
        message = "function return kertas its a win";
      }
    } else if (playerHand.toLowerCase() == "batu".toLowerCase()) {
      if (functionHand == 1) {
        message = "function return gunting its a win";
      } else if (functionHand == 2) {
        message = "function return batu its a tie";
      } else {
        message = "function return kertas its a lose";
      }
    } else if (playerHand.toLowerCase() == "kertas".toLowerCase()) {
      if (functionHand == 1) {
        message = "function return gunting its a lose";
      } else if (functionHand == 2) {
        message = "function return batu its a win";
      } else {
        message = "function return kertas its a tie";
      }
    }
    return message;
  }
  
  console.log(rockPaperScissor("Gunting"));
  console.log(rockPaperScissor("kertas"));
  console.log(rockPaperScissor("batu"));
  