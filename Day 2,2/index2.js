// Latian 1 Function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Latian 2 Array
var ourArray = ["John", 23];

var myArray = ["Quincy", 1];

// Latian 3 Array
var ourArray2 = [
  ["the universe", 42],
  ["everything", 101010],
];

var myArray2 = [
  ["Bulls", 23],
  ["Whitse Sox", 45],
];

//Latian 4 | Memanggil satu array dari 3 data
var daftarAngka = [1, 20, 300];
var dataKu = daftarAngka[1];

console.log(dataKu);

//Latian 5 | Mengganti salah satu array dari 3 data

var daftarAngka2 = [1, 2, 300];
daftarAngka2[1] = 20;

console.log(daftarAngka2);

//Latian 6 | Memanggil satu angka dari 3 array (multi-dimensional Array)
var Arrayku = [[1, 2, 3],[4,5,6],[7,8,9],[[10,11,12],13,14]];

var dataKu2 = Arrayku[2][1];
console.log(dataKu2);

//Latian 7 | Push
var daftarBarang = [["Buku Tulis",10],["Pena",15]];

daftarBarang.push(["Penghapus", 11]);
console.log(daftarBarang);

//Latian 8 | Pop
var daftarBarang2 = [["Buku Tulis",10],["Pena",15]];

var hapusbarangDariArray = daftarBarang2.pop();
console.log(daftarBarang2);

//Latian 9 | Shift
var daftarBarang3 = [["Buku Tulis",10],["Pena",15]];

var hapusbarangDariArray2 = daftarBarang3.shift();
console.log(daftarBarang3);

//Latian 10 | unShift
var daftarBarang4 = [["Buku Tulis",10],["Pena",15]];
daftarBarang4.shift();
daftarBarang4.unshift(["Pensil", 100]);
console.log(daftarBarang4);

//Latian 11 | Task Manager
var myTask = [["Desain 2D",3],["Desain KV",1],["Motion KV",3],["Learn Code",2],["Sleep",1]];

//Latian 12