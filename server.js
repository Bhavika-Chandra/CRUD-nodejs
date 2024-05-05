import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import animalRoutes from './routes/animalRoutes.js';

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/animals', animalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
