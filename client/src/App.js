import React from "react";
// import { spring, AnimatedRoute } from "react-router-transition";
import { Switch, Route } from "react-router-dom";
import { Landing } from "./Pages";
import { Setup } from "./Pages";
import { WaitingRoom } from "./Pages";
import { Quiz } from "./Pages";
import { Results } from "./Pages";
import { Leaderboard } from "./Pages";
import { JoinQuiz } from "./Pages";

function App() {
  return (
    <div id="app">
      <main>
        <Switch atEnter>
          <Route exact path="/" component={Landing} />
          <Route path="/setup" component={Setup} />
          <Route path="/waitingroom" component={WaitingRoom} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/results" component={Results} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/joinquiz" component={JoinQuiz} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
