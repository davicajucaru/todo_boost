import { Route, Switch } from "react-router";
import App from "./pages/App";
import InProgress from "./pages/InProgress";
import Done from "./pages/Done";
import { BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/inprogress" exact component={InProgress} />
        <Route path="/done" exact component={Done} />
      </Switch>
    </Router>
  );
};

export default Routes;
