//N0.1
//Create a function to convert Excel sheet column title to its corresponding column number.
function nilaiAlpha (alpha){
    let tampung = 0;
    for (let a = 0; a < alpha.length; a++){
        tampung = tampung * 26
        tampung = tampung + alpha.toUpperCase().charCodeAt(a) - "A".charCodeAt(0) + 1;
        console.log(tampung)
        console.log("A".charCodeAt(0) + 1)
        console.log(alpha.charCodeAt(0))
    }
    return tampung
}
console.log(nilaiAlpha("C"))

//NO.2
function findNonDuplicate(arr = []) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
  }
  console.log(findNonDuplicate([1,1,2,2,4,6]))


//NO.3
//ANAGRAM
function cekAnagram (kata1, kata2){

    // return kata1.split('').sort().join('') === kata2.split('').sort().join('')
    if (kata1.split('').sort().join('') === kata2.split('').sort().join('') ){
        return `${kata1} dan ${kata2} adalah anagram`
    }else {
        return "bukan anagram"
    }
}
console.log (cekAnagram("rac", "car"))

//NO.4
//jumlahLangkah

function cariLangkah (n){
  
    let cari = new Array(n)
    console.log(cari)
    cari[1] = 1;
    cari[2] = 2;

    for (let i = 3; i <= n; i++){
        cari[i] = cari[i - 1] + cari[i - 2]
        
    }
    
    return cari[n];
}
console.log (cariLangkah(5))