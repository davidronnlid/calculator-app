import { useState } from "react";
import "./App.css";
import NumberButton from "./calculatorComponents/numberButtons";
// import ManipulateNumbersButton from "./calculatorComponents/buttonsThatManipulateNumbers";

function App() {
  const [numberList, setNumberList] = useState([]);

  const addToDisplayArray = (newNumber) => {
    setNumberList((numberList) => [...numberList, newNumber]);
  };

  const removeLastNumberFromDisplayArray = () => {
    numberList.pop();

    setNumberList((numberList) => [...numberList]);
  };
  const removeAllNumbersFromDisplayArray = () => {
    setNumberList((numberList) => {
      while (numberList.length > 0) {
        numberList.pop();
      }
      return [...numberList];
    });
  };

  const onePercentOfCurrentlyDisplayedVal = () => {
    setNumberList((numberList) => {
      let numberArr = [...numberList];
      let numberVar = numberArr.join("");

      let onePercent = numberVar / 100;

      onePercent = onePercent.toString().split("");
      return onePercent;
    });
  };

  const evaluateDisplayVal = () => {
    // Addition seems to work in the most common cases
    // Subtraction, multiplication, and division seem to yield multiplication but with 2 only?

    setNumberList((numberList) => {
      function checkForOperatorAndExecuteOperation(operator) {
        console.log(operator);

        let operatorIndex = numberList.findIndex((char) => char === operator);

        if (operatorIndex === 0) {
        } else {
          const firstVar = parseFloat(
            numberList.join("").slice(0, operatorIndex)
          );
          const secondVar = parseFloat(
            numberList.join("").slice(operatorIndex + 1)
          );

          console.log(
            "1: ",
            firstVar,
            typeof firstVar,
            "2: ",
            secondVar,
            typeof secondVar,

            firstVar + secondVar
          );

          if (operator === "+") {
            return firstVar + secondVar;
          } else if (operator === "-") {
            return firstVar - secondVar;
          } else if (operator === "X") {
            return firstVar * secondVar;
          } else if (operator === "/") {
            return firstVar / secondVar;
          } else {
            return "Error";
          }
        }
      }

      for (
        let operators = ["+", "-", "/", "x"], i = 0;
        i < operators.length;
        i++
      ) {
        return checkForOperatorAndExecuteOperation(operators[i]);
      }
    });
  };

  const calcBtnElms = [
    "C",
    "AC",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="App">
      <header className="appHeader">
        <p>Calculator</p>
      </header>
      <div className="calculatorContainer">
        <h2 className="calculatorDisplay">
          {Array.isArray(numberList)
            ? numberList.filter((elm, indx) => indx <= 7 && elm)
            : numberList}
        </h2>
        <div className="calculatorButtons">
          {calcBtnElms.map((elm) => (
            <NumberButton onClick={addToDisplayArray(elm)}>{elm}</NumberButton>
          ))}
        </div>
      </div>
    </div>
  );
}

// Consider whether you might want to reverse your changes so that each button is rendered by itself, or whether you want to find a solution so that the operatorFunctions can be carried out per appropr. button and so that this renders without errors

export default App;
