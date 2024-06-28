import React from 'react'
import "./contentclass.css"
import { useNavigate } from 'react-router-dom';

export default function Contentclass() {
    const navigate = useNavigate();
  return (
    <div className="contentclass">
      <div className="contentclassimg">
        <img
          src="https://media.tenor.com/b12QRVD-FEMAAAAi/science-doctor.gif"
          alt=""
        />
      </div>

      <div className="contentchoosetext">
        <p>You are in the right to Connect with Us!</p>
        <p className="p2">
          Goodway to hands on with key concepts in
          chemistry,physics,biology,english and commerce.You are all solve and
          building a foundation for the expoloration the subject.
        </p>
      </div>
      <button onClick={() => navigate("/subject")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
