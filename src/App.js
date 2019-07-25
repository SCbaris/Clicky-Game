import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import games from "./games.json";
import Wrapper from "./components/Wrapper";

class App extends Component {
  // this part add games to state, topScore and current Score.
  state = {
    games,// this games came from games.json.
          //  it has 4 properities.
          //  games.id , games.name , games.image, games.clicked
    topScore :0, // this one is our top score. it will increase with our score.
                //if our score more than topscore topscore = score.
    score:0, // this one increase every true guess. after 1 false it turn to 0.
    clickResult: false, // this one is always true if guess true, if guess false it turn to false. 
    midNavBarText:" Welcome to Clicky game! Click to start. "
  };

  shuffle = (array) => {
    array=array.sort(() => Math.random() - 0.5);
    return array;
  }
  

  reset = () => {
    const games = this.state.games.map(function(game) {
      game.clicked=false;
      return game;
    })
    this.setState({
      games,
      score:0,
      clickResult: false,
      midNavBarText:"You guessed incorrectly!"
    });
    console.log(games)
    
  }

  clicked = id => {
    var clcResult=false;
    var score=this.state.score;
    var topScore=this.state.topScore;

    const clickedGame = this.state.games.filter(function(clickGame) {
      if(clickGame.id === id){
        var ccc = clickGame; // ccc is filtered clicked game.
        if(ccc.clicked===false){
          ccc.clicked=true;  // change click properities.
          score++;
          if(topScore<score) topScore=score;
        }else{
          console.log("Clicked Again!")
          clcResult=true;
        }
      }  
      return ccc;
    });
    console.log(games)

    this.setState({
      games:this.shuffle(this.state.games),
      clickResult:clcResult,
      score:score,
      topScore:topScore,
      midNavBarText:"You guessed correctly!"
    });

    console.log(clickedGame);

    if(clcResult) {
      console.log("reset Called")
      this.reset();
    }
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          clickResult = {this.state.midNavBarText}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <br>
        </br>
        <Header />
        <div className="img-container row d-flex justify-content-center">
          {this.state.games.map(game => (
            <Main 
              clicked={this.clicked}
              gameID={game.id}
              gameKey={game.id}
              gameName={game.name}
              gameImg={game.image}
              gameClicked={game.clicked}
            />
          ))}
        </div>
        <Footer />
      </Wrapper> 
    );
  }
}

export default App;