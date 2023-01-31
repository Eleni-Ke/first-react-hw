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
      </header>
    </div>
  );
}

export default App;
