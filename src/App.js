import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import AuthProvider from "./components/Context/AuthProvider";
import Dining from "./components/Dining/Dining";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Suite from "./components/Suite/Suite";

function App() {
    return (
        <div className="App">
            <AuthProvider>
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
                        <PrivateRoute exact path="/suite/:suiteId">
                            <Suite />
                        </PrivateRoute>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
