import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Api from './redux/Api';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>Polina</div>
        <Api />
        <header className="App-header" />
      </div>
    </Provider>
  );
}

export default App;
