import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
    name: String,
    species: String
});

const Animal = mongoose.model('Animal', AnimalSchema);

export default Animal;
