import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    const { data } = await axios.post(
      "https://dremerz-erp.com/twilio/boys11_otp/send_otp",
      {
        mobile_number: phoneNumber,
        otp: generatedOtp,
      }
    );
    if (data) {
      try {
        await axios.post("http://localhost:4000/api/send_otp", {
          name,
          phoneNumber,
          otp: generatedOtp,
        });
      } catch (error) {}

      navigate("/verify-otp", {
        state: { verificationId: generatedOtp, name, phoneNumber },
      });
    } else {
      alert("Failed to send OTP");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log(user);
      navigate("/chooseyourprofession");
      alert("Google authentication successful!");
    } catch (error) {
      console.error("Google   authentication error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
   
      console.log(user);
       navigate("/chooseyourprofession");
      alert("Facebook authentication successful!");
    } catch (error) {
      console.error("Facebook  authentication error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ marginTop: "50px" }}>Welcome</h2>
      <p>
        Get the best Home tuition at your doorstep! for Academics, Hobbies &
        many more.
      </p>

      <form onSubmit={handlePhoneSubmit}>
        <div className="input-field1">
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-field2">
          <input
            type="tel"
            placeholder="MOBILE NUMBER"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          LOGIN
        </button>
        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          LOGIN WITH GOOGLE
        </button>
        <button
          type="button"
          className="facebook-btn"
          onClick={handleFacebookLogin}
        >
          LOGIN WITH FACEBOOK
        </button>
      </form>
    </div>
  );
}
