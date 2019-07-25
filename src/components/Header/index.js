import React from "react";
import "./style.css";
function Header() { // Header contains header and desction of the game. 
  return (
    <div className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <h1>
                    Game Clicky Game
                </h1>
                <p>
                    There are some game banners. Click on an image to earn points, but don't click on any more than once!
                </p>
            </div>
        </div>
    </div>
  );
}
export default Header;