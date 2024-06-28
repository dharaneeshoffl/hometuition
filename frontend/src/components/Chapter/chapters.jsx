import React from 'react'
import "./chapters.css"
import { useNavigate } from 'react-router-dom';

export default function Chapter() {
   const navigate = useNavigate();
  return (
    <div className="chapter-container">
      <h2>Choose your Chapter</h2>
      <ol className="ol">
        <li>
          <button style={{ color: "black", }}>
            Electric Charges{" "}
          </button>
        </li>
        <li>
          <button style={{ color: "black",}}>
            Genetics and Evolution
          </button>
        </li>
        <li>
          <button style={{ color: "black",}}>
            ElectroChemistry
          </button>
        </li>
        <li>
          <button style={{ color: "black",}}>
            Probablity
          </button>
        </li>
        <li>
          <button style={{ color: "black",}}>
            Business Trade
          </button>
        </li>
        <li>
          <button style={{ color: "black", }}>
            The Indian Constitution
          </button>
        </li>
      </ol>
      <button onClick={() => navigate("/address")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
