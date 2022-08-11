const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://final_project_3:1234567890@cluster0.gi7pf.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = "Hotel_Booking"
const db = {}

async function connectToDb() {
    await client.connect();
    console.log('Connected successfully to Database');
    const database = client.db(dbName);

    db.users = database.collection("Users");
    db.rooms = database.collection("Rooms");
    db.bookingbills = database.collection("Bookingbills");
    // the following code examples can be pasted here...

    return 'done.';
}

module.exports = { connectToDb, db }