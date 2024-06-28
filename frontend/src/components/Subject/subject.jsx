import React from 'react'
import "./subject.css"
import { useNavigate } from 'react-router-dom';

export default function Subject() {
  const navigate = useNavigate();
  return (
    <div className="subject-container">
      <h2>Choose your Subject</h2>
      <ol className="ol">
        <li>
          <button style={{ color: "black", }}>
            Physics
          </button>
        </li>
        <li>
          <button style={{ color: "black",}}>
            Biology
          </button>
        </li>
        <li>
          <button style={{ color: "black",  }}>
            Chemistry
          </button>
        </li>
        <li>
          <button style={{ color: "black",}}>
            Maths
          </button>
        </li>
        <li>
          <button style={{ color: "black",  }}>
            English
          </button>
        </li>
        <li>
          <button style={{ color: "black" }}>
            Commerce
          </button>
        </li>
      </ol>
      <button onClick={() => navigate("/chapter")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
