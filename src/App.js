import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonContent="I am the label" />
        <ImageComponent
          imagesource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU52MiyVLEEID7q4yBqJFqKYTUuhzNQDo7TA&usqp=CAU"
          imagealternative="this is an alternative"
        />
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
      </header>
    </div>
  );
}

export default App;
