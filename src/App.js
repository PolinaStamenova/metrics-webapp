/* eslint-disable quotes, jsx-quotes */

import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Api from "./redux/Api";
import TestDisplay from "./components/TestDisplay";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div>Polina</div>
        <Api />
        <TestDisplay />
        <header className='App-header' />
      </div>
    </Provider>
  );
}

export default App;
