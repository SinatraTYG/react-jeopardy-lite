import "./App.css";

import Welcome from "./Components/Welcome/Welcome";
import Error from "./Components/404 Page/404page";
import Clock from "./Components/Clock/Clock";
import Contact from "./Components/Contact/Contact";
import Jeopardy from "./Components/Jeopardy/Jeopardy";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Donta" />}
        />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
