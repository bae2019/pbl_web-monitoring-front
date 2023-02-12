import React from "react";
import Mainchart from "../components/mainchart";

const Main2 = () => {
    return (
      <div>
        <div>
          <div className = "pagename">
            M A I N
          </div>
          <div className="HorizontalLine" />
          <div className="TextBox">
          [ 생산량 추이 ]
        </div>
        <Mainchart/>
        <div className="HorizontalLine"></div>
        <div className="margin_short" />
        <div className="margin_last">
          2023 Hustar PBL project with SL
        </div>
        </div>
      </div>
    );
  };
  
  export default Main2;