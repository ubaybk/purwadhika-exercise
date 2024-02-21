//NO.1
//Input: nums = [3,2,3]
//Output: 3

function perulanganTerbanyak (arr){
    let urutkan = arr.sort()
    console.log (urutkan)
    let hasil = [];
    let jumlahSaatIni = 1
    let jumlahMaximum = 0 

    for (let a = 0; a < arr.length; a++){
        if (urutkan[a] === urutkan [a + 1]){
           jumlahSaatIni++;
           console.log (jumlahSaatIni)
        }else {
            if ( jumlahSaatIni >= jumlahMaximum ){
                jumlahMaximum = jumlahSaatIni;
                hasil = [arr[a - 1]]
                console.log(hasil)
            }
            jumlahSaatIni = 1;

        }
    }
    return hasil
}
console.log(perulanganTerbanyak([3,2,1,1]))



// //N0.2
function roman (isi){
    const angkaRomawi = {
        "I"  : 1,
        "V" : 5,
        "X": 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000}
    let total = 0;
    let nilaiSebelum = 0
    let newIsi = isi.toUpperCase();
    console.log (newIsi.length)

    for (let i = newIsi.length - 1; i >= 0; i--){
        console.log(i)
        const nilai = angkaRomawi[newIsi[i]]
        console.log(nilai)
        if (nilai < nilaiSebelum){
            total = total - nilai
        }else{
            total = total + nilai
        }
        nilaiSebelum = nilai
    }
    return total
}
console.log(roman("iX"))



//NO.3
//SEGITAIGA PASCAL
function generateSegitigaPascal(jumlahBaris) {
    if (jumlahBaris <= 0) return ["Tidak dapat menampilkan segitigas pascal"];

    const segitigaPascal = [[1]];

    for (let i = 1; i < jumlahBaris; i++) {
        const baris = [1];
        const barisSebelumnya = segitigaPascal[i - 1];
        console.log(barisSebelumnya)

        for (let j = 1; j < i; j++) {
            baris.push(barisSebelumnya[j - 1] + barisSebelumnya[j]);
        } console.log(baris)

        baris.push(1);
        console.log(baris)
        segitigaPascal.push(baris);
        
    }

    return segitigaPascal;
}

const jumlahBaris = 3;
const segitigaPascal = generateSegitigaPascal(jumlahBaris);
console.log(segitigaPascal);


//NO.4
function maksimumKeuntungan(harga) {
    let maksimumKeuntungan = 0;
    let hargaTerendah = harga[0];
    
    for (let i = 1; i < harga.length; i++) {
        // Memperbarui harga terendah yang ditemui sejauh ini
        hargaTerendah = Math.min(hargaTerendah, harga[i]);
        console.log(hargaTerendah)
        // Menghitung keuntungan maksimum yang bisa didapat pada setiap langkah
        maksimumKeuntungan = Math.max(maksimumKeuntungan, harga[i] - hargaTerendah);
        console.log(maksimumKeuntungan)
    }
    
    return maksimumKeuntungan;
}

// Contoh 1
const harga1 = [2,8,1,3,5];
console.log(maksimumKeuntungan(harga1));

// // Contoh 2
// const harga2 = [7, 6, 4, 3, 1];
// console.log(maksimumKeuntungan(harga2)); // Output: 0


function getRow(rowIndex) {
    let row = [];
    for (let i = 0; i <= rowIndex; i++) {
        row.unshift(1); // Menambahkan 1 di awal array
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = row[j] + row[j + 1]; // Menambahkan elemen baru dengan menjumlahkan dua elemen sebelumnya
        }
    }
    return row;
}

const rowIndex = 3;
const result = getRow(rowIndex);
console.log(result); // Output: [1, 3, 3, 1]

