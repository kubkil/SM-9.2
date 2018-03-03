"use strict";

// let namesFemale = ['Asia', 'Kasia', 'Ola', 'Jola'];
// let namesMale = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
// let namesAll = namesFemale.concat(namesMale);

// function addName(newName) {
//   if (namesAll.includes(newName) == false) {
//     return namesAll.push(newName);    
//   } else {
//     return console.log('Imię już istnieje');
//   }
// }

let namesFemale = ['Asia', 'Kasia', 'Ola', 'Jola'];
let namesMale = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
let namesAll = namesFemale.concat(namesMale);

let nameNew = prompt('Podaj imię');

if (namesAll.indexOf(nameNew) === -1) {
  namesAll.push(nameNew);
} else {
  alert('Imię już istnieje');
}