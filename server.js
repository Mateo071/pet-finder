//starter data
const express = require('express');
const app = express();
const path = require('path');
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

//GET PET BY ID
app.get('/pets/:name', (req, res) => {
  const name = req.params.name;

  const newPetArray = pets.map((pet) => {
    return pet.name.toLowerCase();
  })
  if (newPetArray.some((petName) => petName === name.toLowerCase())) {
    const foundName = () =>{
      newPetArray.find((petName) => petName == name);
      return (this.name)
    } 

    console.log(foundName);
    res.send(`
    <div>
      <h1>Pet Name: ${name}</h1>
      <p>Pet Breed: ${pets[1].breed}</p>
      <p>Pet Owner: ${pets[1].owner}</p>
    </div>
    `)
  } else {
    res.send(`
    <h1>Sorry. Pet not found.</h1>
    `);
  }
})

app.listen(PORT, () => {
  console.log(`successfully running on Port ${PORT}`)
});

