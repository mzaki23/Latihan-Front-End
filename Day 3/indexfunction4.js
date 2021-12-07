function Title(val) {
  console.log(val);
}
Title("----------Latian cara Convert String to Integer--------");
function converToInteger(str) {
  return parseInt(str);
}

converToInteger("56");

function converToInteger2(str) {
  return parseInt(str, 2);
}
converToInteger2("10011");

Title("----------Latian Ternary Operator---------");
function checkSign(num) {
  return num > 0 ? "Positif" : num < 0 ? "Negatif" : "Nol";
}

console.log(checkSign(1));

Title("----------Latian apa itu Const Keyword---------");

function cetakBanyak(str) {
  "use strict";

  const SENTENCE = str + " is cool !"; //jadi const digunakan apabila 
                                       //objek tersebut tidak dipanggil lagi dalam skala
                                       //global dan biasanya menggunakan huruf
                                       //kapital untuk nama objeknya

  //SENTENCE = str + " amazing";        //contohnya objek ini tidak bisa aktif 
                                        //karena sudah di panggil sblmnya
  for (let i = 0; i < str.length; i++) {
    console.log(SENTENCE);
  }
}
cetakBanyak("Zaki");

Title("----------Latian untuk melakukan perubahan isi objek---------");

const angka1 = [1,2,3];

angka1[0] = 3;
angka1[1] = 4;
angka1[2] = 5;

console.log(angka1);