import React from "react";
import "./style.css";


function Main(props) { // This part will show 12 picture that already taking with json.
  return (
    <div className="card">    
        <div className="col-xl-3 col-sm-12 col-md-6 col-lg-4">
          <img onClick={() => props.clicked(props.gameID)} data-clicked={props.gameClicked} alt={props.gameName} data-id={props.gameID} src={props.gameImg} />
          {/*Main will take id for mixing images.*/}
          {/*Alt is name of this picture*/}
          {/*image is source of this picture*/}
          {/*Clicked for check this pictures click status*/}
          {/*on click, This part call a function. this function will change this pictures clicked properities.*/}
          {/*And this function will check is clicked again or not.*/}
          {/*And this function will mix the pic.*/}
        </div>
    </div>
  );
}

export default Main;