import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Dining from "./components/Dining/Dining";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Suite from "./components/Suite/Suite";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/dining">
            <Dining />
          </Route>
          <Route exact path="/suite/:suiteId">
            <Suite />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
