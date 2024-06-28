import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./welcome.css"

export default function Welcome() {
    const navigate = useNavigate();
  return (
    <div className="contentclass">
      <div className="contentclassimg">
        <img
          src="https://pic.chinesefontdesign.com/uploads/2017/02/chinesefontdesign.com_2017-02-06_17-28-15.gif"
          alt=""
        />
      </div>

      <div className="contentchoosetext">
        <p>You are most Welcome to home tuition connect encouraging to our team ! </p>
        <p className="p2">
         A good tutor will help your child turn into a good Student or Professional and etc...
        </p>
      </div>
      <button onClick={() => navigate("/home")} className="c">
        CONTINUE
      </button>
    </div>
  );
}
