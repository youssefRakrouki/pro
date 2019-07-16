

let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
const getAge =(pet) =>{  return new Date().getFullYear() - pet.bornOn; };

  
let petsWithAge = [];
pets.forEach((pet, i)=> {
   pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
});
console.log(petsWithAge);
const dogs = pets.filter(  (pet) => { return pet.type==="dog"});
console.log(dogs);

var jasper = petsWithAge.filter( pet => pet.name === "Jasper");

console.log(`Japser is ${jasper[0].age} years old`);