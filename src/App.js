import logo from './logo.svg';
import './App.css';
import Login from './component/Login'
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <div>
    <h5>Hello</h5>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    {/* <div className="App"> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Login />
    {/* </div> */}
    </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
