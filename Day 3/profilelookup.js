var contacts = [
  {
    firstname: "Muhammad",
    lastname: "Zaki",
    number: "0812345678",
    likes: ["Hogwarts", "Magic", "Griffindor"],
  },
  {
    firstname: "Harry",
    lastname: "Potter",
    number: "0812345679",
    likes: ["Hermione", "Dark Art Magic"],
  },
  {
    firstname: "Hermione",
    lastname: "Granger",
    number: "0812345611",
    likes: ["Draco Malfoy", "Death Eater"],
  },
  {
    firstname: "Ron",
    lastname: "Weasley",
    number: "0812345613",
    likes: ["Menulis", "Mengusil"],
  },
];

function daftarProfil(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstname === name || contacts[i].lastname === name) {
      return contacts[i][prop] || "Gaada di List";
    }
  }
  return "Gaada di daftar Kontak";
}

var data = daftarProfil("Ron", "likes");
console.log(data);
