import  { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // const { title, image, day, time, address, description} = data;

        const client = await MongoClient.connect("mongodb+srv://venlig:taleromto382BWG@cluster0.hq9gh.mongodb.net/?retryWrites=true&w=majority");
        const db = client.db;
        const cohortCollection = db.collection("cohorts");
        const result = await cohortCollection.insertOne(data)

        client.close();

        res.status(201).json{message: "Cohort added"}
    }
}

export default handler;