//Latian 1
var name = "Saya mengatakan, ";
var test = name + "ini kalimat saya yang pertama, ";

console.log(test);

//Latian 2 | Menambahkan Text tambahan di String 1
var test1 = "ini kalimat saya yang pertama, ";
test1 += "ini kalimat saya yang kedua";

console.log(test1);

//Latian 3 | Melakukan proses penghitungan
var a = 1;
var b = 2;
var c = a - b;
var hasil = '"jadi hasilnya," \n ';
hasil += c;
console.log(hasil);

//Latian 4 | Menambahkan String 1 dengan String 2
var myName = "Muhammad Zaki";
var myStr = "perkenalkan nama saya, " + myName;
console.log(myStr);

//Latian 5 | Berapa suku kata dari Nama
var firstNameLength = 0;
var firstName = "Muhammad Zaki";

firstNameLength = firstName.length;
console.log(firstNameLength);

//Latian 6 | Cara melihat kalimat pertama dari Nama
var firstLetterofFirstname = "";
var firstName2 = "Muhammad";

firstLetterofFirstname = firstName2[0];
console.log(firstLetterofFirstname);

//Latian 7 | Cara mengubah kalimat yang typo
var contohkalimat = "Jaki";
contohkalimat = "Zaki";

console.log(contohkalimat);

//Latian 8
var namaTerakhir = "Zaki";
var ketigasukukata = namaTerakhir[namaTerakhir.length - 2];

console.log(ketigasukukata);