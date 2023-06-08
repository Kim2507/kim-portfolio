import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./main-pages/Home";
import Our from "./main-pages/Our";
import home from "./images/home/home.png";
import smileHeart from "./images/home/smile-heart.png";

function App() {
  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/kim-portfolio/">
              <img
                src={home}
                alt="smile-icon"
                className="icon"
                style={{ width: "70px", height: "70px" }}
              />
            </Link>
          </li>
          <li>
            <Link to="/kim-portfolio/us">
              <img
                src={smileHeart}
                alt="smile-icon"
                className="icon"
                style={{ width: "70px", height: "70px" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/kim-portfolio/" element={<Home />} />
        <Route path="/kim-portfolio/us/" element={<Our />} />
      </Routes>
    </div>
  );
}
export default App;
