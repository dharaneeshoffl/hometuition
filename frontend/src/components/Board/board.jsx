import React from 'react'
import "./board.css"
import { useNavigate } from 'react-router-dom';

export default function Board() {
  const navigate = useNavigate();
  return (
    <div className="board-conatainer">
      <h2>Choose Our Boards</h2>
      <ol className="ol">
        <li>
          <button style={{ color: "black" }}>
            State Board
          </button>
        </li>
        <li>
          <button style={{ color: "black",  }}>
            CBSE
          </button>
        </li>
        <li>
          <button style={{ color: "black", }}>
            ICSE
          </button>
        </li>
        <li>
          <button style={{ color: "black", }}>
            CISCE
          </button>
        </li>
        <li>
          <button style={{ color: "black", }}>
            NIOS
          </button>
        </li>
      </ol>

      <button onClick={() => navigate("/classchoose")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
