//Latian Statement
console.log("-------------------Latian Statement---------------------------");
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(false));

//Latian Equality Operators
console.log(
  "-------------------Latian Equality Operators---------------------------"
);
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));

console.log("-------------------Latian Test Strict---------------------------");
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(7));

console.log(
  "-------------------Latian Compare Equality---------------------------"
);
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, 5));

console.log(
  "-------------------Latian Compare Not Equality---------------------------"
);
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(99));

console.log("-------------------Latian Lebih Dari---------------------------");
function testLebihDari(val) {
  if (val > 100) {
    return "Lebih dari 100";
  }
  if (val > 10) {
    return "Lebih dari 10";
  }
  return "10 atau dibawah";
}

console.log(testLebihDari(100));

console.log(
  "-------------------Latian Lebih Dari dan setara---------------------------"
);
function testLebihdariatauSetara(val) {
  if (val >= 20) {
    return "Lebih dari 20 atau pas";
  }
  if (val >= 10) {
    return "10 atau pas";
  }
  return "Kurang dari 10";
}
console.log(testLebihdariatauSetara(20));

console.log(
  "-------------------Latian Test Logika dan Operasi---------------------------"
);
function testLogikaDan(val) {
  if (val <= 50 && val >= 25) {
    // "&&" digunakan untuk Dan
    return "Yes";
  }
  return "No";
}

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    // "||" digunakan untuk Atau
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(11));

console.log(
  "-------------------Latian Test Else Statment---------------------------"
);
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Lebih dari 5";
  } else {
    result = "Kurang dari 5";
  }
  return result;
}
console.log(testElse(5));

console.log(
  "-------------------Latian Test Chain Else If Statment---------------------------"
);
function testUkuran(num) {
  if (num < 5) {
    return "Mungil";
  } else if (num < 10) {
    return "Kecil";
  } else if (num < 15) {
    return "Sedang";
  } else if (num < 20) {
    return "Besar";
  } else {
    return "Besar Sekali";
  }
}
console.log(testUkuran(21));

console.log(
  "-------------------Latian Test Golf Code---------------------------"
);
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function skorGolf(par, Strokes) {
  if (Strokes == 1) {
    return names[0];
  } else if (Strokes <= par - 2) {
    return names[1];
  } else if (Strokes == par - 1) {
    return names[2];
  } else if (Strokes == par) {
    return names[3];
  } else if (Strokes == par + 1) {
    return names[4];
  } else if (Strokes >= par + 1) {
    return names[5];
  } else if (Strokes >= par + 3) {
    return names[6];
  }
}

console.log(skorGolf(5, 8));
/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"
*/

console.log(
  "-------------------Latian Test Switch Statement---------------------------"
);
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(2));

console.log(
  "-------------------Latian Test Switch Statement---------------------------"
);
function gantiBarang(val) {
  var jawaban = "";
  switch (val) {
    case "a":
      jawaban = "Keyboard";
      break;
    case "b":
      jawaban = "Mouse";
      break;
    default:
      jawaban = "Pilih Barang!";
      break;
  }
  return jawaban;
}
console.log(gantiBarang("a"));

console.log(
  "-------------------Latian Test Switch Multi Statement---------------------------"
);
function sequentialSizes(val) {
  var answer2 = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer2 = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer2 = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer2 = "High";
      break;
  }
  return answer2;
}
console.log(sequentialSizes(4));

console.log(
  "-------------------Latian Test Retuning Boolean Value from Functions---------------------------"
);
function iniKurang(a, b) {
  return a > b;
}
console.log(iniKurang(10, 15));

console.log(
  "-------------------Catatan Add New Properties---------------------------"
);
var kucingKu = {
  nama: "Milky",
  kaki: 4,
  ekor: 1,
  teman: ["banyak ada dirumah"],
};
kucingKu.musuh = "KucingHitam"; //Pilih metode salah satu untuk menambahkan objek
kucingKu["Saudara"] = "Chimmy";
delete kucingKu.musuh; //metode untuk menghapus 
