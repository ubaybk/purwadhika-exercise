const panjang1 = 5; 
const lebar1 = 3;
const hasil2 = 2*(panjang1+lebar1);
console.log(hasil2);

const radius = 5;
const phi = Math.PI;
const area = phi * radius * radius;
const diameter = 2* radius
const circumference = phi * diameter
console.log("diameter = "+ diameter,"circumference = "+ circumference, "area = "+ area);

const nilai = {panjang5 : 5, lebar5 : 3 };
const hasil5 = nilai.panjang5 * nilai.lebar5;
console.log(hasil5)


const nilaiSegitiga = {alas : 80, tinggi : 65};
const segitiga = 180 - (nilaiSegitiga.alas + nilaiSegitiga.tinggi)
console.log(segitiga)


let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let betwen = date2.getTime() - date1.getTime();
console.log(betwen)
let different_in_days = Math.round(betwen / (1000 * 3600 *24));
console.log(different_in_days)

function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    
    console.log(yearsDisplay)
}