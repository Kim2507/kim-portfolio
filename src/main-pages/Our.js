import React from "react";
import "../css/our.css";
import cmu from "../images/family/IMG_2328.jpg";
import promhome from "../images/family/IMG_2417.jpg";
import nyc from "../images/family/IMG_2374.jpg";
import nymuseum from "../images/family/IMG_2377.jpg";

function Our() {
  return (
    <div className="container">
      <div>
        <h1>Things that I love</h1>
        <h2>Family</h2>
        <article>
          <p>
            <strong>Breaking news: </strong> My little sister just graduated
            from high school and she got admitted into CARENEGIE MELLON
            UNIVERISTY WOO~HOO~~!
          </p>
        </article>
      </div>
      <img
        src={cmu}
        alt="#"
        className="pic-frame"
        style={{ width: "50rem", height: "40rem" }}
      />
      <div>
        <div class="pics-item">
          <img
            src={nyc}
            alt="#"
            className="pic-frame"
            style={{ width: "30rem", height: "50rem" }}
          />
        </div>
        {/* <div class="pics-item">
          <img
            src={nymuseum}
            alt="#"
            style={{ width: "20rem", height: "20rem" }}
          />
        </div> */}

        {/* <div class="pics-item">Item 4</div>
        <div class="pics-item">Item 5</div>
        <div class="pics-item">Item 6</div>
        <div class="pics-item">Item 7</div>
        <div class="pics-item">Item 8</div>
        <div class="pics-item">Item 9</div> */}
      </div>
    </div>
  );
}
export default Our;
