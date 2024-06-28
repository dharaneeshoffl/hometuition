import React from "react";
import "./home.css";
import logo from './logo.jpg'
import SimpleBottomNavigation from "../bottomnavigation/bottomnavigation";


const HomePage = () => {
  

  return (
    <div className="home-container">
      <header className="header">
        <SimpleBottomNavigation />
        <div className="logo-container">
          <img
            src={logo}
            alt=""
            className="logo"
            style={{ height: "60px", width: "120px" }}
          />
          <h1 className="company-name">ntutuition</h1>
        </div>
        <div className="user-icon-container">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png"
            alt="User Icon"
            className="user-icon"
          />
        </div>
      </header>
      <main className="main-content">
        <h2>Available Tutors</h2>
        <div className="teachers-container">
          <div className="teacher-card">
            <div className="div1">
              <img
                src="https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg?t=st=1719391602~exp=1719392202~hmac=e8072fddaefe49554c0f8a27696d121e6fc72237b943b9c039313c1f73e4ae64"
                alt=""
                className="teacher-image"
              />
              <p>Liam</p>
              <p>5 Years in Physics</p>

              <img
                src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=1060&t=st=1719391658~exp=1719392258~hmac=9853f11c79704e45a83493c9468d88dec9f3fc8f823bed99e8a7f5b77d726de5"
                alt=""
                className="teacher-image"
              />
              <p>Henry</p>
              <p>4 Years in Chemistry</p>

              <img
                src="https://img.freepik.com/free-photo/experienced-businessman-standing-office-room-indian-content-office-employee-eyeglasses-smiling-posing-with-folded-hands-business-management-corporation-concept_74855-11681.jpg?w=1060&t=st=1719391712~exp=1719392312~hmac=06ad23e55ae223c191420f0f316a285561359cd7b4e53ecb657f17a3ad351c1c"
                alt=""
                className="teacher-image"
              />
              <p>Theodore</p>
              <p>6 Years in Biology</p>
            </div>

            <div className="div2">
              <img
                src="https://img.freepik.com/free-photo/portrait-indian-pregnant-woman_23-2151426881.jpg?t=st=1719392847~exp=1719396447~hmac=760576b949d4a4e1a99542135fffc8b164f5ca7648162b0da4af007f311b96a6&w=826"
                alt=""
                className="teacher-image"
              />
              <p>Lucas</p>
              <p>9 Years in Maths</p>

              <img
                src="https://img.freepik.com/free-photo/impressed-young-female-teacher-sits-table-with-school-tools-raising-pen-classroom_141793-106366.jpg?w=826&t=st=1719392925~exp=1719393525~hmac=f154fe8fdfdaba04b1889aee470186b4dc6208d943b312553f063d3d157a95be"
                alt=""
                className="teacher-image"
              />
              <p>Jesiah</p>
              <p>7 Years in Economics</p>
              <img
                src="https://st4.depositphotos.com/13194036/22902/i/450/depositphotos_229023724-stock-photo-female-teacher-pointing-finger-mathematical.jpg"
                alt=""
                className="teacher-image"
              />
              <p>Elio</p>
              <p>5 Years in Civics</p>
            </div>
          </div>
        </div>
      </main>

      <div></div>
    </div>
  );
};

export default HomePage;
