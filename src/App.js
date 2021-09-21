import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Landing } from "./Pages";
// import { Setup } from "./Pages";
// import { WaitingRoom } from "./Pages";
// import { Quiz } from "./Pages";
// import { Results } from "./Pages";
import { Leaderboard } from "./Pages";
// import { JoinQuiz } from "./Pages";


function App() {
  return (
    <div id="app">
   
      <main>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          {/* <Route path="/setup">
            <Setup />
          </Route>
          <Route path="/waitingroom">
            <WaitingRoom />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          
          <Route path="/joinquiz">
            <JoinQuiz />
          </Route> */
          // commented out as they will error until they are being used! 
        } 
        </Switch>
      </main>
    </div>
   
  );
}

export default App;
