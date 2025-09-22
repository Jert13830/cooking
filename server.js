//imported modules
const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const recipeRouter = require('./routers/recipeRouter');
const ingredientsRouter = require('./routers/ingredientRouter');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use(recipeRouter);
app.use(ingredientsRouter);


app.listen(port, (err)=>{
    if(err){
        console.log(err);
     } else {
        console.log("Connetion made");
     }

});

mongoose.connect("mongodb://localhost:27017/cookManager");
