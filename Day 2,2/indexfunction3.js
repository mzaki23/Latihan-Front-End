console.log("------Latian Lookup pengganti switch-----");
function latianLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
  };
  result = lookup[val];

  return result;
}
console.log(latianLookup("alpha"));

console.log("-----Latian Testing object Properties");
var Barangku = {
  laptop: "lenovo",
  mouse: "acer",
  keyboard: "keycron k2",
};
function cekBarangku(checkProp) {
  if (Barangku.hasOwnProperty(checkProp)) {
    return Barangku[checkProp];
  } else {
    return "Tidak Ada";
  }
}
console.log(cekBarangku("laptops"));

console.log("-----Latian Nested Objects------");
var penyimpananKu = {
  tas: {
    kocekdepan: {
      didalamkocekdlm1: "pensil",
      didalamkocekdlm2: "pena",
    },
    kocekbelakang: {
      didalamkocekblkg1: "chargerlaptop",
    },
  },
};
var caripensil = penyimpananKu.tas.kocekdepan["didalamkocekdlm1"];
console.log(caripensil);

console.log("--------Latian Nested Array-------");
var Kucingku = [
  {
    type: "Kucing_kampung",
    list: ["Mueza", "Chimmy"],
  },
  {
    type: "Kucing_bulupanjang",
    list: ["milky"],
  },
];

var kucingBulupanjang = Kucingku[1].list[2];

