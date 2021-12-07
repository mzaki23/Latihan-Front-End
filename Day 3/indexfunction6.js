console.log("-----Cara buat template HTML dengan java script-----");
//Contoh Kasus 1
const person1 = {
  nama: "Muhammad Zaki",
  umur: 23,
};

const pembukaan = `Halo, nama saya ${person1.nama}!
dan umur saya sekarang ${person1.umur} Tahun.`;

console.log(pembukaan);

//Contoh Kasus 2
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function buatList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = buatList(result.failure);
console.log(resultDisplayArray);

console.log("-----Cara buat Simple Fields-----");
//Menggunakan Function
//const Pendaftaranhogwarts = (nama,umur,jk,house) => {
//    return {
//        nama:nama,
//        umur:umur,
//        jk:jk,
//        house:house
//    };
//};

//Menggunakan Arrow Function
const Pendaftaranhogwarts = (nama, umur, jk, house) => ({nama,umur,jk,house,});
console.log(
  Pendaftaranhogwarts("Muhammad Zaki", 23, "Laki-Laki", "Griffindor House")
);

console.log("-----Cara deklarasi function-----");
//menghapus function namun tanpa merubah fungsi function
//Contoh Kasus 1

const sepeda = {
  gear: 2,
  setGear(gearBaru) {
    "use strict";
    this.gear = gearBaru;
  },
};

sepeda.setGear(3);
console.log(sepeda.gear);

console.log("-----Cara buat Class Syntax-----");
//Contoh tanpa Class Syntax
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet);

//Contoh menggunakan Class Syntax
class SpaceShuttle1 {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus1 = new SpaceShuttle1("Jupiter");

console.log(zeus1.targetPlanet);


//Contoh Kasus 1
function makeClass() {
    class Sayur{
        constructor(name){
            this.name = name;
        }
    }
    return Sayur;
};
const Sayur = makeClass();
const carrot = new Sayur('Wortel');
console.log(carrot.name);