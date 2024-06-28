import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./otp.css";

export default function OtpVerification() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { verificationId } = location.state;

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp === verificationId) {
      alert("Phone authentication successful!");

      navigate("/chooseyourprofession");
    } else {
      alert("Phone authentication failed!");
    }
  };

  return (
    <div className="form-container">
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-vpn-illustration_23-2149229495.jpg?w=740&t=st=1719488630~exp=1719489230~hmac=f65b735eeb3ef5a29f1c4d95e6dfb8eaa1b77c9da4765a526b66b84f1a209464"
        alt=""
      />
      <h2>OTP Verification</h2>
      <form onSubmit={handleOtpSubmit} className="otp">
        <input
          type="text"
          placeholder="Enter your OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit" className="login">
          VERIFY OTP
        </button>
      </form>
    </div>
  );
}
