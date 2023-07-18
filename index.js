import mongoose from "mongoose";
import express from 'express'

mongoose
    .connect('mongodb+srv://vlevlashin:TqRrFCRdrmPeIYyV@cluster0.wyfjzkf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB is starting!'))
    .catch(e => console.log(e))


const app = express();
const port = 4004;



app.listen(port, (err) => {
    err ? console.log(err) : console.log('Server is starting')
})