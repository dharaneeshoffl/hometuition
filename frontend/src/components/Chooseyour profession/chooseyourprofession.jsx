import React from 'react'
import "./chooseyourprofession.css"
import { useNavigate } from 'react-router-dom';

export default function Chooseyourprofession() {
     const navigate = useNavigate();
  return (
    <div className="chooseyourprofession">
      <div className="professionimg">
        <img
          src="https://thumbs.dreamstime.com/b/young-graduate-man-thinks-future-profession-wearing-graduation-cap-thinking-choosing-building-engineer-doctor-159185727.jpg"
          alt=""
        />
      </div>

      <div className="choosetext">
        <p>Thank You For Login! Please Continue with Choose Your Best Profession!</p>
      </div>
      <button onClick={() => navigate("/personalize")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
