//NO.1
let object = []

function equal (arr1, arr2){
 const obj1 = Object.values(arr1);
 console.log(obj1)
 const obj2 = Object.values(arr2);
 console.log(obj2)
 

 if (obj1.length !== obj2.length){
    return false
 }

 for (a = 0; a < obj1.length; a++){
    if (obj1[a] !== obj2[a]){
        return false
    }
 } 
 return true
}
//memanggil
obj1 = { a : 1}
obj2 = { a : 1}
console.log( equal(obj1,obj2))


//NO.2 
function intersection(obj1, obj2) {
    result = {}
    for(let key in obj1){
        if(obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            result[key] = obj1[key]
        }
    }
    return result
}

console.log(intersection({ a: 1, b: 3 }, { a: 1, c: 3 }))


//SOAL 3
const arr1 = [
    {name: 'Student 1', email: 'student1@mail.com'},
    {name: 'Student 2', email: 'student2@mail.com'}
]

const arr2 = [
    {name: 'Student 1', email: 'student1@mail.com'},
    {name: 'Student 3', email: 'student3@mail.com'}
]

const combineArray = function(arr1, arr2) {
    const combine = [...arr1, ...arr2]
    const uniqueSet = new Set(combine.map(JSON.stringify))
    const uniqueArr = Array.from(uniqueSet).map(JSON.parse)
    return uniqueArr
}

console.log(combineArray(arr1,arr2))

// Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 12

// Soal 4

const obj = [{name: "David", age: 20}];

function reverse(obj) {
    const c = {name: "David", age: 20}
    for(let a in c){
        a
    }

    const test = obj.map(item => {
        const tampung = {};
        for (let key in item) {
            tampung[item[key]] = key
        }
        return tampung;
    });
    return test;
}

console.log(reverse(obj));

//ATAU

const swapKeyValues = (input) => {
    let arrSwapped = [];
    for (let i = 0; i < input.length; i++) {
      let res = {};
      let obj = input[i];
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[obj[key]] = key;
        }
      }
      arrSwapped.push(res);
    }
    return arrSwapped;
  };
  
  console.log(swapKeyValues([{ name: "David", age: 20 }]));



function factorial (n){
    let tampung = 1
    for (let a = 1; a <= n; a++){
        tampung = a * tampung
        console.log(tampung)
        
    }
    return tampung
}

let n = 5;
console.log(factorial(n))


/** 6. Shooting Game */
class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health = this.health + item.health;
        this.power = this.power + item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const randomHealth = Math.floor(Math.random() * 2) * 10;
        const randomPower = Math.floor(Math.random() * 2) * 10;
            console.log(randomHealth)
            console.log(randomPower)
        return { health: randomHealth, power: randomPower };
        
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("Player Status Before Shooting:");
            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            console.log("Player Status After Shooting:");
            this.player1.showStatus();
            this.player2.showStatus();

            this.player2.hit(this.player1.power);
            this.player1.hit(this.player2.power);
        }

        if (this.player1.health <= 0) {
            console.log(`${this.player2.name} wins!`);
        } else {
            console.log(`${this.player1.name} wins!`);
        }
    }
}

// Example usage:
const player1 = new Player("bayu");
const player2 = new Player("erik");

const game = new ShootingGame(player1, player2);
game.start();
