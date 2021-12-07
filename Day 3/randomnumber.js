console.log("------Latian Mengacak angka------");
var angkaAcakdari0sampai19 = Math.floor(Math.random() * 20);

function mengacaksemuaAngka() {
  return Math.random();
}

console.log(angkaAcakdari0sampai19);

console.log("------Latian Mengacak angka dengan jarak------");

function mengacakAngkadenganJarak(Minimal, Maksimal) {
  return Math.floor(Math.random() * (Maksimal - Minimal + 1)) + Minimal;
}

var acaklah = mengacakAngkadenganJarak(5, 15);

//console.log(mengacakAngkadenganJarak(1,10));
console.log(acaklah);
