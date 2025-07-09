const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/otp-data", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});


const otpSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  otp: String,
  createdAt: { type: Date, default: Date.now, expires: 300 },
});

const Otp = mongoose.model("Otp", otpSchema);


const addressSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
});

const Address = mongoose.model("Address", addressSchema);


app.post("/api/send_otp", async (req, res) => {
  const { name, phoneNumber, otp } = req.body;

  const newOtp = new Otp({ name, phoneNumber, otp });
  try {
    await newOtp.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/api/address", async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).send("Address added successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
