import "./App.scss";
import AboutProjectCard from "./aboutProjectComponents/aboutProjectCard";
import Calculator from "./calculatorComponents/calculator";

function App() {
  return (
    <div className="App">
      <h4 className="appTitle">
        Calculator developed by{" "}
        <a href="https://www.linkedin.com/in/davidronnlid/">David Rönnlid</a>
      </h4>
      <Calculator />
      <AboutProjectCard />
    </div>
  );
}

export default App;
