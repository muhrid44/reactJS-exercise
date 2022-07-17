///////////////////////////////////////////////////////// SOAL 1 /////////////////////////////////////////////////////////////////

let namaLengkap = "Muhammad Ridwan";
console.log(namaLengkap);

///////////////////////////////////////////////////////// SOAL 2 /////////////////////////////////////////////////////////////////

let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let outputGabunganVariable = word + " " + second + " " + third;
console.log(outputGabunganVariable);

///////////////////////////////////////////////////////// SOAL 3 /////////////////////////////////////////////////////////////////

let hello = 'Hello '; 
let world = 'World!!'; 

let output = `${hello}${world}`
console.log(output)


///////////////////////////////////////////////////////// SOAL 4 /////////////////////////////////////////////////////////////////

let panjangPersegiPanjang = parseInt("8");
let lebarPersegiPanjang = parseInt("5");
let kelilingPersegiPanjang = 2 * ( panjangPersegiPanjang + lebarPersegiPanjang );

console.log(kelilingPersegiPanjang)


///////////////////////////////////////////////////////// SOAL 5 /////////////////////////////////////////////////////////////////

let sentences= 'wah javascript itu keren sekali'; 

let firstWords = sentences.substring(0, 3); 
let secondWords = sentences.substring(4, 14) 
let thirdWords = sentences.substring(15, 18); 
let fourthWords = sentences.substring(19, 24);
let fifthWords = sentences.substring(25, 31)

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);


///////////////////////////////////////////////////////// SOAL 6 /////////////////////////////////////////////////////////////////

var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)


///////////////////////////////////////////////////////// SOAL 7 /////////////////////////////////////////////////////////////////

let txt = "I can eat bananas all day";
let hasil = txt.slice(10,17)

console.log(hasil)


///////////////////////////////////////////////////////// SOAL 8 /////////////////////////////////////////////////////////////////

var nilaiDoe = 50;

if (nilaiDoe >= 80){
    console.log("A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80){
    console.log("B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70){
    console.log("C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60){
    console.log("D");
} else {
    console.log("E");
};

///////////////////////////////////////////////////////// SOAL 9 /////////////////////////////////////////////////////////////////

let angka = 2;

angka === 2 ? console.log("angka nya 2") : console.log("angka nya bukan 2");

///////////////////////////////////////////////////////// SOAL 10 /////////////////////////////////////////////////////////////////

var traffic_lights = "red";

switch(traffic_lights){
    case "red" : {
        console.log("berhenti");
        break;
    }
    case "yellow" : {
        console.log("hati-hati");
        break;
    }
    case "green" : {
        console.log("jalan");
        break;
    }
}
///////////////////////////////////////////////////////// SOAL 11 /////////////////////////////////////////////////////////////////

for (var i = 0 ; i < 10 ; i++){
    console.log(i);
};

///////////////////////////////////////////////////////// SOAL 12 /////////////////////////////////////////////////////////////////

for (var i = 0 ; i < 10 ; i++){
    if (i % 2 != 0){
        console.log(i)
    }
};

///////////////////////////////////////////////////////// SOAL 13 /////////////////////////////////////////////////////////////////

for (var i = 0 ; i < 10 ; i++){
    if (i % 2 === 0){
        console.log(i)
    }
};

///////////////////////////////////////////////////////// SOAL 14 /////////////////////////////////////////////////////////////////

let array1 = [1,2,3,4,5,6];

console.log(array1[5]);


///////////////////////////////////////////////////////// SOAL 15 /////////////////////////////////////////////////////////////////

let array2 = [5,2,4,1,3,5];
const sortedArray = array2.sort((x, y) => {
    return x-y;
});
    
console.log(sortedArray);


///////////////////////////////////////////////////////// SOAL 16 /////////////////////////////////////////////////////////////////

let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

for (var i = 0 ; i < array3.length ; i++){
    console.log(array3[i]);
};

///////////////////////////////////////////////////////// SOAL 17 /////////////////////////////////////////////////////////////////

let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

for (var i = 0 ; i < array4.length ; i++){
    if (array4[i] % 2 === 0){
        console.log(array4[i])
    };
};


///////////////////////////////////////////////////////// SOAL 18 /////////////////////////////////////////////////////////////////

let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]

const joinedKalimat = kalimat.join(" ");

console.log(joinedKalimat);

///////////////////////////////////////////////////////// SOAL 19 /////////////////////////////////////////////////////////////////

var sayuran = [];

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

console.log(sayuran);


