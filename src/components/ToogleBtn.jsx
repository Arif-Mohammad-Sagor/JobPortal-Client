import React, { useState } from "react";
import "../styles/common.css";

const ToogleBtn = () => {
  const [isLeft, setIsLeft] = useState(true);

  function toggleClass() {
    setIsLeft(!isLeft);
  }
  return (
    <div className="form-box">
      <div className="button-box">
        <div className={`Btn ${isLeft ? "left-slide" : "right-slide"}`}></div>
        <button
          type="button"
          className={`toggle-btn ${isLeft ? "active" : ""}`}
          onClick={toggleClass}
        >
          Job Seeker
        </button>
        <button
          type="button"
          className={`toggle-btn ${!isLeft ? "active" : ""}`}
          onClick={toggleClass}
        >
          Job Poster
        </button>
      </div>
    </div>
  );
};

export default ToogleBtn;
