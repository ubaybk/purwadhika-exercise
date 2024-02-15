//NO.1
let students = [
    {
        name : "Bayu",
        email : "bayu@gmail.com",
        age : "05-06-1992",
        score : 80
    },
    {
        name : "rizal",
        email : "rizal@gmail.com",
        age : "12-08-1993",
        score : 76
    },
    {
        name : "anggi",
        email : "anggi@gmail.com",
        age : "11-03-1990",
        score : 50
    },
    {
        name : "erik",
        email : "erik@gmail.com",
        age : "11-03-1996",
        score : 90
    },
]

function hitungUsia(tanggalLahir) {
    var today = new Date();
    var birthDate = new Date(tanggalLahir);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


function calculate (students){
    let score = {}
    let age = {}
    let terbesar = 0
    let terkecil = students[0].score
    let total = 0
    let terbesarAge = 0;
    let terkecilAge = Infinity;
    let totalAge = 0;
    for (let i = 0; i < students.length; i++) {
        console.log(i)
        
        if (students[i].score > terbesar) {
            terbesar = students[i].score;
        }
        if (students[i].score < terkecil) {
            terkecil = students[i].score;
        }
        total = students[i].score + total
      

        //AGE
        console.log(hitungUsia(students[i].age))
        if (hitungUsia(students[i].age) > terbesarAge) {
            terbesarAge = hitungUsia(students[i].age);
        }
        if (hitungUsia(students[i].age) < terkecilAge) {
            terkecilAge = hitungUsia(students[i].age);
        }

        totalAge = hitungUsia(students[i].age) + totalAge
        console.log(totalAge)
        
                
    }
    //age
    age.highest = terbesarAge
    age.lowest = terkecilAge
    age.average = totalAge/students.length
    console.log(age)

    //score
    score.highest = terbesar
    score.lowest = terkecil
    score.average = total/students.length
    console.log(score)

    // console.log(terbesar)
    // console.log(terkecil)
    // console.log(total/students.length)  
   
}
console.log(calculate(students))




//NO.2
class Product {
    constructor() {
      this.name;
      this.price;
    }
  }
  
  class Transaction extends Product {
    constructor() {
      super();
      this.total = 0;
      this.products = [];
    }
  
    addToCart() {
      this.products.push({
        name: this.name,
        price: this.price,
        qty: this.qty,
      });
    }
  
    getTotalTransactions() {
      let sum = 0;
      for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].qty * this.products[i].price;
      }
      return sum;
    }
  
    getTransactions() {
      return {
        total: this.getTotalTransactions(),
        products: this.products,
      };
    }
  }
  
  const transact = new Transaction();
  
  transact.name = "pulpen";
  transact.price = 20000;
  transact.qty = 2;
  transact.addToCart();
  console.log(transact.name);
  console.log(transact.getTransactions());
  
  transact.name = "pensil";
  transact.price = 10000;
  transact.qty = 4;
  transact.addToCart();
  console.log(transact.getTransactions());
  
  transact.name = "Card";
  transact.price = 10000;
  transact.qty = 4;
  transact.addToCart();
  console.log(transact.getTransactions());
  
  transact.name = "Chess";
  transact.price = 10000;
  transact.qty = 4;
  transact.addToCart();
  console.log(transact.getTransactions());
  
  transact.name = "Card";
  transact.price = 10000;
  transact.qty = 4;
  transact.addToCart();
  console.log(transact.getTotalTransactions());
  console.log(transact.getTransactions());