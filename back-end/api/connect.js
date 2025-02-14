import {MongoClient} from "mongodb"

const URI ="mongodb+srv://arturllopes:DntIWy8KWQFLcBE4@cluster0.6c5is.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection =  db.collection('songs').find({}).toArray();


// console.log(songCollection);
