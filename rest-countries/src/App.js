import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Country from "./components/Country";
import { StateProvider } from "./state/store.js";

import "./App.scss";

function App() {
  return (
    <StateProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={["/", "/countries"]} component={Countries} />
            <Route path="/countries/:id" component={Country} />
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
