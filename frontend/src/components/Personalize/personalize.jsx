import React from 'react'
import "./personalize.css"
import { useNavigate } from 'react-router-dom';



export default function Personalize() {
    const navigate = useNavigate();
  return (
    <div className="personalize-conatainer">
      <h2>Which describes you Best?</h2>
      <ol className="ol">
        <li>
          <button style={{ color: "black" }}>
            <span>🧑‍🎓</span> &nbsp; &nbsp;Student
          </button>
        </li>
        <li>
          <button style={{ color: "black"}}>
            &nbsp; 👩‍🏫&nbsp; &nbsp; Teacher
          </button>
        </li>
        <li>
          <button style={{ color: "black" }}>
            🙎‍♂️ &nbsp; &nbsp;Parent
          </button>
        </li>
        <li>
          <button
            style={{
              color: "black",
              
              marginLeft: "20px",
            }}
          >
            &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            👨‍💼&nbsp;&nbsp;&nbsp;Professional
          </button>
        </li>
        <li>
          <button style={{ color: "black" }}>
            🙎‍♂️ &nbsp;&nbsp;Other
          </button>
        </li>
      </ol>

      <button onClick={() => navigate("/board")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
