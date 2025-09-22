const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required"],
        match:/^[A-Za-z\s]+[A-Za-z0-9\s\-\'\(\)&,]+$/
    },
    ingredients: [{

      ingredient :{   
            type: mongoose.Schema.Types.ObjectId,
            ref : 'ingredients',
            required: [true, "Enter an ingredient"],
        },
        quantity:{
            type : Number,
            required: [true, "Enter the quantity"],
        },
        unit:{
            type: String,
            enum: ['g','kg','ml','l','pcs'],
            required: [true, "Enter a unit"],
        }

    }],
    instructions: {
        type: String,
        required: [true, "The instructions are required"],
        match:/^[A-Za-z0-9\s.,:;!?'"()\-]{10,}$/m
    },
    preparationTime: {
        type: Number,
        required: [true, "The preparation time is required"],
    },
    cookingTime: {
        type: Number,
        required: [true, "The cooking time is required"],
    },
    difficulty: {
        type: String,
        required: [true, "The difficulty level is required"],
        match:/^[A-Za-z\s]+[A-Za-z0-9\s\-\'\(\)&,]+$/,
        enum: {
            values: ["easy", "average", "difficult"],
            message: "The value should be Easy, Average or Difficult"
        }
    },
    category: {
        type: String,
        required: [true, "The difficulty level is required"],
        match:/^[A-Za-z\s]+[A-Za-z0-9\s\-\'\(\)&,]+$/,
        enum: {
            values: ["starter", "main dish", "dessert"],
            message: "The value should be Starter, Main dish or Dessert"
        }
    },
    serves: {
        type: Number,
        required: [true, "This meal is for how many"],
    },

});

const recipeModel = mongoose.model("recipes", recipeSchema);
module.exports = recipeModel;