console.log("-----Menggunakan Arrow Head Function-----");

const myconcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myconcat([1, 2], [3, 4, 5]));

console.log("-----Default Parameter-----");
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));

console.log("-----Rest Operator-----");

const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log("-----Spread Operator-----");
const arr3 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr4;
(function () {
  arr4 = [...arr3];
  arr3[0] = "potato";
})();

console.log(arr4);

console.log("-----Latian Rest dan Spread Operator-----");
const angka = [1, 2, 3]; //---->Sblm menggunakan Spread Operator
const angkaBaru = [angka, 4, 5];

console.log(angkaBaru); //Hasilnya [[1,2,3],4,5]

const angka1 = [1, 2, 3]; //---->Setelah menggunakan Spread Operator
const angkaBaru1 = [...angka1, 4, 5];

console.log(angkaBaru1);

console.log(sum(1, 2, 3, 4, 5)); //Hasilnya [1,2,3,4,5]

const jumlah = (...args) => {
  //---->Menggunakan Rest Operator
  let result = 0;
  args.filter((Element) => (result = result + Element));

  return result;
};
console.log(jumlah(1, 2, 3, 4, 5)); //Hasilnya 15

//Menurut Nashir Jamali dari Website Medium.com (https://medium.com/linux-user-group-surabaya/rest-dan-spread-pada-javascript-13f572ab85f4#:~:text=Spread%20Operator.%20Spread%20Operator%20digunakan%20untuk%20membagi%20elemen,array%20yaitu%20array%20numbers%20di%20dalam%20array%20)
//Rest Parameter : menggabungkan semua paramater pada function ke dalam array
//Spread Operator: membagi elemen berbentuk array menjadi elemen tunggal

console.log("-----Destructuring Assignment-----");
//Contoh Kasus 1
const AVG_TEMPERATURES = {
  hariini: 70.5,
  kemarin: 69.9,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { kemarin: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}
//getTempOfTmrw = (avgTemperatures) => {
//   const{kemarin:tempOfTomorrow} = avgTemperatures;
//   tempOfTomorrow;
//}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

console.log("-----Destructuring Assignment 2-----");
//Contoh Kasus 2
const LOCAL_FORECAST = {
  today: { min: 72, max: 82 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMax(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOf },
  } = forecast;
  return maxOf;
}
console.log(getMax(LOCAL_FORECAST));


console.log("-----Destructuring Assignment with Rest Operator-----");
//Contoh Kasus 1
const sumber = [1,2,3,4,5,6,7,8,9,10];

function hapuskeduapertama(list) {
    const [,,...arr6] = list;

    return arr6;
}
const arr6 = hapuskeduapertama(sumber);
console.log(arr6);
console.log(sumber);

console.log("-----Destructuring Assignment with passing Function-----");
//Contoh Kasus 1
const status = {
    max:50,
    min:30,
    a:11,
    b:55
};
const setengah = (function () {
    
    return function setengah({min,max}) {
        return (max + min) / 2.0;
    };
})();
console.log(status);
console.log(setengah(status));

