import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './components/Counter';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h4>React-Redux 💍</h4>
        </header>
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
