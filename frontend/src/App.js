
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form/form';
import Personalize from "./components/Personalize/personalize";
import Board from "./components/Board/board"
import Classchoose from "./components/Classchoose/classchoose"
import Subject from "./components/Subject/subject"
import Chapter from "./components/Chapter/chapters"
import Address from "./components/Address/address"
import Home from "./components/HomePage/home"
import Chooseyourprofession from './components/Chooseyour profession/chooseyourprofession';
import Contentclass from "./components/Contentclass/contentclass"

import Welcome from "./components/Welcome/welcome"
import OtpVerification from './components/Otp/otp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/personalize" element={<Personalize />} />
          <Route path="/board" element={<Board />} />
          <Route path="/classchoose" element={<Classchoose />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/chapter" element={<Chapter />} />
          <Route path="/address" element={<Address />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/chooseyourprofession"
            element={<Chooseyourprofession />}
          />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="contentchoose" element={<Contentclass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
