//Create a function that can create a triangle pattern according to the height we provide like the 
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height

function triangle (){
    var len = 10;
    var tampung = '';
    var count = 1
    for (var a = 1; a <= len; a++){
      for (let b = 1; b <= a; b++);{
        console.log(a);
          tampung = count + ' ';
          count ++;
        }
        console.log(tampung)
        tampung = '/n';
      }
        
    }


triangle();


function generatePyramid() {
  var totalNumberofRows = 7;
  var output = '';
  for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 0; j <= i; j++) {
        output = output + j + '  ';  
        // output += j + '  ';
      }
      console.log(output);
      output = '';
  }
}

generatePyramid();


// console.log(pertambahan(2, 5));

// function pertambahan(angka1, angka2) {
//   console.log(angka1 + angka2);
//   return angka1 + angka2;
// }
// console.log(pertambahan(2, 2));

// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var arr = new Array();
//     for (var i = 1; i <= totalNumberofRows; i++) {
//       for (var j = 1; j <= i; j++) {
//         arr.push(j);
//         console.log(j);
//       }
//       console.log("\n");
//     }
//   }


// function looping(listData) {
//     let temp;
//     for (let i = 0; i < listData.length; i++) {
//       console.log(i);
//       if (listData[i] == 3) {
//         return listData[i];
//       }
//     }
  
//     return temp;
//     let a = "b";
//   }

// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
let tampung = ""
let angka = [1,2,3,4,5,6,7,8,9,10]
let len = angka.length

  for (a = 0; a < angka.length; a++)
  if (angka % 2 === 1){
  let tampung = tampung + angka; 
} else {

}

console.log(tampung)

let myArray = [1,2,3,4,5,6,7,8,9,10]
let it = myArray.length

for(let i = 0; i < it; i++) {
  console.log(i)
  for(let j = 0; j < myArray.length; j++ ) {
    console.log('checking:', myArray[j])
    if(myArray[j] % 2 === 1) {
      myArray.splice(j,1)
      break
    }
  }
}

console.log(myArray)


let weight = 80;
let height = 1.80;
let BMI = ""

BMI = weight/height;
console.log(BMI)
if (BMI < 18.5){
  console.log("less weight")
}else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("ideal")
} else if ( BMI >= 25.0 && BMI <= 29.9){
  console.log("overweight")
} else if (BMI >= 30.0 && BMI <= 39.9){
  console.log("very overweight")
}else if ( BMI > 39.9) {
  console.log("obesity")
}


function badan (weight, height){

  let tinggi = height ** 2;
  let ukur = weight / tinggi
  console.log(ukur)

  if (ukur < 18.5){
    return "less weight"
    // console.log("less weight");
    
  } else if ( ukur >= 18.5 && ukur <= 24.9){
    return "ideal"
    // console.log ("ideal")

  } else if ( ukur >= 25.0 && ukur <=29.9){
    return "overweight"
    // console.log ("overweight");

  } else if ( ukur >= 30.0 && ukur <= 39.9){
    return "very overweight"
    // console.log("very overweight")

  } else if ( ukur > 39.9){
    return "obesity"
    // console.log ("obesity")

  } else {
    return "Anda bukan manusia"
    // console.log ("Anda bukan manusia")
  };
  
};
console.log(badan(65, 1.80));

console.log(badan(67, 1.65));




function fizzBuzz(n) { 
	// Declare an array to store the results 
	let result = []; 

	// Loop from 1 to n (inclusive) 
	for (let i = 1; i <= n; ++i) { 
	
		// Check if i is divisible by both 3 and 5 
		if (i % 3 === 0 && i % 5 === 0) { 
		
			// Add "FizzBuzz" to the result array 
			result.push("FizzBuzz"); 
		} 
		
		// Check if i is divisible by 3 
		else if (i % 3 === 0) { 
		
			// Add "Fizz" to the result array 
			result.push("Fizz"); 
		} 
		
		// Check if i is divisible by 5 
		else if (i % 5 === 0) { 
		
			// Add "Buzz" to the result array 
			result.push("Buzz"); 
		} 
		else { 
		
			// Add the current number as a string to the 
			// result array 
			result.push(i.toString()); 
		} 
	} 

	// Return the result array 
	return result; 
} 

// Driver code 
let n = 20; 

// Call the fizzBuzz function to get the result 
let result = fizzBuzz(6); 

// Print the result 
console.log(result.join(' ')); 
console.log(fizzBuzz(7))


//Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function removeEvenNumber(){
  let myArray = [1,2,3,4,5,6,7,8,9,10];
  let len3 = myArray.length
  console.log(len3)

  let newArray = [];
  
  for(let i = 0; i < myArray.length; i++){

      if(myArray[i] % 2 !== 1) newArray.push(myArray[i]);
      
  }

  console.log(newArray);

  
}

removeEvenNumber();


const splitString = (string) => {
  let newWord = ""
  let resultArray = []

  for(let i = 0; i<string.length; i++){
    if(string[i] !== " "){
      newWord += string[i];
    } else {
      resultArray.push(newWord)
      newWord = "";
    }
  }
  if(newWord !== ""){
    resultArray.push(newWord);
  }
  return console.log(resultArray);
};

splitString("Hello World");