require = require("esm")(module);

import nambah from "./math_function";
import { contacts } from "./daftarnama";

nambah = nambah(10, 2);
console.log(nambah);

const daftarprofil = (name, prop) => {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].nama === name) {
            return contacts[i][prop]||"tidak ada di daftar nama";
        }
    }
    "tidak ada di kontak";
};

console.log(daftarprofil("Muhammad Zaki","hobi"));
