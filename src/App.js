import "./App.scss";
import AboutProjectCard from "./aboutProjectComponents/aboutProjectCard";
import Calculator from "./calculatorComponents/calculator";

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <p>Calculator!</p>
      </header>
      <div className="calculatorContainer">
        <Calculator />
        <AboutProjectCard />
      </div>
    </div>
  );
}

export default App;
