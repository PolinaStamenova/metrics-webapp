/* eslint-disable quotes, jsx-quotes */

import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Home from "./components/home/Home";
import Details from "./components/Details";
import Api from "./redux/Api";

function App() {
  return (
    <Provider store={store}>
      <Api />
      <Router basename='/' key='ppp'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/city' component={Details} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
