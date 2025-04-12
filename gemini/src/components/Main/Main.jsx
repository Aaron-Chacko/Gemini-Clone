import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  const handleSend = () => {
    console.log("Prompt sent!");
    // Your sending logic goes here
};
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.favicon_logo} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <h1>
            <span>Welcome to Gemini Clone</span>
          </h1>
          <p>How may I assist you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Who is this so called Aaron?</p>
            <img src={assets.question_icon} alt="" />
          </div>
          <div className="card">
            <p>Where is this so called Aaron?</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>WHY is Aaron?</p>
            <img src={assets.question_icon} alt="" />
          </div>
          <div className="card">
            <p>Tell me more about Aaron?</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter your prompt here" 
             onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
            <div onClick={handleSend}>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
              Gemini may display/convey incorrect information, please verify important information before blindly believing it.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
