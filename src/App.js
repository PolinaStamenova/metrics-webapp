/* eslint-disable quotes, jsx-quotes */

import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Api from "./redux/Api";
import Home from "./components/home/Home";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Api />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
