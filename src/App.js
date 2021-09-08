import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Test from './Test';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>Polina</div>
        <Test />
        <header className="App-header" />
      </div>
    </Provider>
  );
}

export default App;
