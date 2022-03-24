const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, "The joke setup is required"],
        minlength: [3, "Please type more than just 1 or 2 letters..."],
    },
    punchline: {
        type: String,
        required:[true, "The joke setup is required"],
        minlength: [3, "Please type more than just 1 or 2 letters..."],
    },
    },
    {timestamps: true}
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
