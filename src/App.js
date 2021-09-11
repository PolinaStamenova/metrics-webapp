/* eslint-disable quotes, jsx-quotes */

import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Home from "./components/home/Home";
import Details from "./components/Details";
import Api from "./redux/Api";

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/c/:name",
//     name: "Details",
//     component: Details,
//   },
// ];

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

// {/* <Switch>
//   {routes.map(({ path, component }) => (
//     <Route key={path} exact path={path} component={component} />
//   ))}
// </Switch> */}
