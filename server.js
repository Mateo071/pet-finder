//starter data
const express = require('express');
const app = express();
const pets = require('./database.js')

const PORT = 3000;

//get all pets
//fetch pet data
//turn to html to display on screen

//GET ALL PETS
app.get('/', (req, res) => {
  res.send(`<h1>Hello Pets</h1><h3>The pets' names are ${
    pets.map((pet) => {
      return (
        pet.name +
        pet.breed +
        pet.owner
      )
    })}</h3>`);
})

app.get('/pets/owner', (req, res) => {
  const owner = req.query.owner;
  if (owner) {
    const filteredResults = pets.filter((pet) => pet.owner.toLowerCase() === owner.toLowerCase())
      if (filteredResults.length > 0) {
        res.send(filteredResults);
      } else {
        res.send('<h1>Owner not found</h1>');
    }
  } else {
    res.send('<h1>Owner not specified</h1>')
  }
  
});

//GET PET BY ID
app.get('/pets/:name', (req, res) => {
  const name = req.params.name;
  const filteredPet = pets.filter((pet) => pet.name.toLowerCase() === name.toLowerCase());
  console.log(pets[1].name);
  console.log(name);
  if (filteredPet.length > 0) {
    res.send(filteredPet);
    console.log(filteredPet);
    console.log('success');
  } else {
    res.send('<h1>Pet not found</h1>');
    console.log(filteredPet);
    console.log('fail');

  }
  });

app.listen(PORT, () => {
  console.log(`successfully running on Port ${PORT}`)
});

