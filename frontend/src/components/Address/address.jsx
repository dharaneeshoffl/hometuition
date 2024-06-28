import React, { useState } from "react";
import axios from "axios";
import "./address.css";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).every((field) => field.trim() !== "")) {
      try {
        await axios.post("http://localhost:4000/api/address", formData);
        alert("Address added successfully!");
        navigate("/welcome");
      } catch (error) {
        console.error("Error adding address:", error);
        alert("Failed to add address.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="address-container">
      <h2>Enter your Address</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
          required
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Mobile Number"
          onChange={handleChange}
          name="mobile"
          value={formData.mobile}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={formData.address}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="City"
          onChange={handleChange}
          name="city"
          value={formData.city}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="State"
          onChange={handleChange}
          name="state"
          value={formData.state}
          required
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Pincode"
          onChange={handleChange}
          name="pincode"
          value={formData.pincode}
          required
        />
        <br />
        <br />
        <button type="submit" className="c">
          CONTINUE
        </button>
      </form>
    </div>
  );
}
