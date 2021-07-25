import "./App.scss";

import AppTitle from "./aboutProjectComponents/appTitle";
import Calculator from "./calculatorComponents/calculator";
import AboutProjectCard from "./aboutProjectComponents/aboutProjectCard";

function App() {
  return (
    <div className="app">
      <AppTitle />
      <Calculator />
      <AboutProjectCard />
    </div>
  );
}

export default App;
