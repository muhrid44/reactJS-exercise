// SOAL 1
function namaSaya(nama) {
    console.log(`Halo nama saya ${nama}`)
}

namaSaya("Muhammad Ridwan");

// SOAL 2
function penjumlahan(num1,num2){
    let output = num1 + num2;
    console.log(output);
}

penjumlahan(20,7);

// SOAL 3

const hello = () =>{
    return "Hello"
}

console.log(hello());

//SOAL 4
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    "nama":arrayDaftarPeserta[0],
    "jenisKelamin":arrayDaftarPeserta[1],
    "hobi":arrayDaftarPeserta[2],
    "tahun":arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)

//SOAL 5
let obj1 = {
  nama: "Nanas",
  warna: "Kuning",
  adaBijinya: "tidak",
  harga: 9000 
};
let obj2 = {
  nama: "Jeruk",
  warna: "Oranye",
  adaBijinya: "ada",
  harga: 8000
};
let obj3 = {
  nama: "Semangka",
  warna: "Hijau & Merah",
  adaBijinya: "ada",
  harga: 10000
};
let obj4 = {
  nama: "Pisang",
  warna: "Kuning",
  adaBijinya: "tidak",
  harga: 5000
};

let arr = [obj1,obj2,obj3,obj4]

const filteredArr = arr.filter(result => {
    return result.adaBijinya === "tidak"
});

console.log(filteredArr);

//SOAL 6
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 /* 
 Tulis kode jawaban destructuring di sini 
 */

 let {name,brand,year} = phone;
 
 
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(name, brand, year) 

 //SOAL 7

 let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = {...dataBukuTambahan, ...buku}
  
  // kode diatas ini jangan di rubah atau di hapus sama sekali
  
  /* 
      Tulis kode jawabannya di sini 
  */ 
  // kode di bawah ini jangan dirubah atau dihapus

  console.log(objOutput) 

  //SOAL 8
  let mobil = {

    merk : "bmw",
    
    color: "red",
    
    year : 2002
    
    }
    
     
    
    const functionObject = (param) => {
    
    return param
    
    }

    console.log(functionObject(mobil));