//starter data
const express = require('express');
const app = express();
const pets = require('./database.js')

const PORT = 8080;

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
    const filteredResults = pets.filter((pet) => pet.owner ===owner)
      if (filteredResults.length > 0) {
        res.send(filteredResults);
      } else {
        res.send('Owner not found');
    }
  } else {
    res.send('Owner not specified')
  }
  
});

//GET PET BY ID
app.get('/pets/:name', (req, res) => {
  const name = req.params.name;
  res.send(pets.filter((pet) => pet.name === name));
  });

app.listen(PORT, () => {
  console.log(`successfully running on Port ${PORT}`)
});

