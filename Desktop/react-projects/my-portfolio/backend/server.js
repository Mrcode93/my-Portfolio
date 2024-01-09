const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://ameralazawi69:nbpWlD4d3ZXeYAcr@cluster0.h8cj3o3.mongodb.net/booking-data?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const mongodb = require("mongodb");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const BookingSchema = new mongoose.Schema({
  doctor: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const Booking = mongoose.model("booking", BookingSchema);

app.get("/api/data", async (req, res) => {
  try {
    // const collection = collection("booking");
    const data = await Booking.find({}).toArray(); // Retrieve all documents from the "booking" collection
    res.json(data); // Send the retrieved data as a response
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/data");
    const result = await response.json();
    // setData(result);
    console.log("result is:" + result);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
// app.listen(4000, () => console.log("API server listening on port 4000"));

// app.post("/register", async (req, res) => {
//   try {
//     await client.connect();

//     const collection = client.db("booking-data").collection("booking");

//     const result = await collection.insertOne(req.body);

//     if (result) {
//       res
//         .status(200)
//         .json({ message: "Data saved successfully", data: result });
//     } else {
//       throw new Error("Failed to save data");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Something went wrong" });
//   } finally {
//     await client.close();
//   }
// });

app.listen(4000, () => console.log("Server running on port 4000"));
