console.log("----gunakan getter & setter untuk control access ke objek");
//Contoh Kasus 1
class Book {
  constructor(author) {
    this._author = author;
  }
  get writer() {
    return this._author;
  }

  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

//Contoh Kasus 2


function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp){
        this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

