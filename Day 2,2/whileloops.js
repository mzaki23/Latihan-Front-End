console.log("-----Latian While Loops-------");
var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);

console.log("-----Latian For Loops-------");

var ourArray = [];

for (var i = 1; i <= 10; i++) {
  ourArray.push(i);
}

console.log(ourArray);

console.log("-----Latian Odd Number For Loops-------");
var Angkaganjil = [];
for (var i = 1; i < 11; i += 2) {
  Angkaganjil.push(i);
}
console.log(Angkaganjil);

console.log("-----Latian Even Number For Loops-------");
var Angkagenap = [];
for (var i = 2; i < 11; i += 2) {
  Angkagenap.push(i);
}
console.log(Angkagenap);

console.log("-----Latian For Loops Angka Mundur-------");
var Angkamundur = [];
for (var i = 10; i > 0; i -= 1) {
  Angkamundur.push(i);
}
console.log(Angkamundur);

console.log("-----Latian Menjumlah Item dengan For Loop-----");
var yangIngindijumlah = [1, 5, 7, 8, 9];
var Totalangka = 0;

for (var i = 0; i < yangIngindijumlah.length; i++) {
  Totalangka += yangIngindijumlah[i];
}

console.log(Totalangka);

console.log("-----Latian Melakukan perkalian antar Nested for loop-----");
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

console.log("-----Latian melakukan Do While Loops-----");

var Arrayku = [];
var m = 10;

do {
  Arrayku.push(m);
  m++;
} while (m < 5)

console.log(m,Arrayku);