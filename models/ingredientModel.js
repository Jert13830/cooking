const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is required"],
        match:/^[\p{L}\p{M}0-9 ,.'’"!?&:;()\-]+$/u
    },
    colour: {
            type: String
    },
    origin: {

            type: String
    }

});

const ingredientModel = mongoose.model("ingredients", ingredientSchema);
module.exports = ingredientModel;