//let name = 'Zaki';
//console.log(name);

// Cannod be reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

//let firstName = 'Muhammad';
//let lastName = 'Zaki';


//let interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);

//let name = 'Zaki'; // String Literal
//let age = '23'; // Number Literal

let person = {
    name: 'Zaki',
    age: 23
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);
