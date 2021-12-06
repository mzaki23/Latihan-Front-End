//Memanggil Function Berkali kali
var a = 1;
var b = 3;

function prosesperhitungan() {
  var hasil = a + b;
  console.log(hasil);
}

prosesperhitungan();

//Proses Function menggunakan argumen
function ProsesnyadenganArgumen(a, b) {
  console.log(a / b);
}
ProsesnyadenganArgumen(10, 2);

//Skala global
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

//Skala Lokal
function SkalaLokal() {
  var myVar = 5;
  console.log(myVar);
}
SkalaLokal();

//console.log(myVar); // bagian ini tidak terbaca

//Global vs Lokal
var namaSaya = "Muhammad Zaki";

function NamaLengkap() {
  var namaSaya = "Arif"; //Terbaca yang didalam bukan yang variabel diluar
  return namaSaya;
}

console.log(NamaLengkap());
console.log(namaSaya);

//Return menjadi value
function kurangTujuh(angka) {
  return angka - 7; //menjadikan return sebagai argumen
}

console.log(kurangTujuh(15));

//Undefined Value returned
var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

// Assigment with a Returned Value
var processed = 0;

function processArg(num) {
  return (num + 3) / 2;
}

processed = processArg(7);

console.log(processed);

//Stand in Line ialah proses menambahkan depan dan menghapus belakang
function barisDepan(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(barisDepan(testArr,6));
console.log("After: " + JSON.stringify(testArr));