import './App.css';
import { Provider } from 'react-redux';
import store  from './redux/store';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
        <Home/>
       </Provider>
     
    </div>
  );
}

export default App;
