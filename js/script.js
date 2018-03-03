"use strict";

let namesFemale = ['Asia', 'Kasia', 'Ola', 'Jola'];
let namesMale = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
let namesAll = namesFemale.concat(namesMale);

let newName = 'Marian';

if (namesAll.indexOf(newName) === -1) {
  namesAll.push(newName);
} else {
  console.log('Imię już istnieje');
}