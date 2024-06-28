import React from 'react'
import "./classchoose.css"
import { useNavigate } from 'react-router-dom';

export default function Classchoose() {
   const navigate = useNavigate();
  return (
    <div className="classchoose-container">
      <h2>Choose your Class</h2>
      <ol className="ol">
        <li>
          <button style={{ color: "black" }}>IX</button>
        </li>
        <li>
          <button style={{ color: "black" }}>X</button>
        </li>
        <li>
          <button style={{ color: "black" }}>XI</button>
        </li>
        <li>
          <button style={{ color: "black" }}>XII</button>
        </li>
      </ol>
      <button onClick={() => navigate("/contentchoose")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
