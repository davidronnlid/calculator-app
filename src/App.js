import { useState } from "react";
import "./App.css";
import NumberButton from "./calculatorComponents/numberButtons";
import ManipulateNumbersButton from "./calculatorComponents/buttonsThatManipulateNumbers";

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
          <ManipulateNumbersButton
            onClick={() => removeLastNumberFromDisplayArray()}
          >
            C
          </ManipulateNumbersButton>
          <ManipulateNumbersButton
            onClick={() => removeAllNumbersFromDisplayArray()}
          >
            AC
          </ManipulateNumbersButton>
          <ManipulateNumbersButton
            onClick={() => onePercentOfCurrentlyDisplayedVal()}
          >
            %
          </ManipulateNumbersButton>
          <ManipulateNumbersButton onClick={() => addToDisplayArray("/")}>
            /
          </ManipulateNumbersButton>
          <NumberButton onClick={() => addToDisplayArray(7)}>7</NumberButton>
          <NumberButton onClick={() => addToDisplayArray(8)}>8</NumberButton>
          <NumberButton onClick={() => addToDisplayArray(9)}>9</NumberButton>
          <ManipulateNumbersButton onClick={() => addToDisplayArray("X")}>
            X
          </ManipulateNumbersButton>{" "}
          <NumberButton onClick={() => addToDisplayArray(4)}>4</NumberButton>
          <NumberButton onClick={() => addToDisplayArray(5)}>5</NumberButton>
          <NumberButton onClick={() => addToDisplayArray(6)}>6</NumberButton>
          <ManipulateNumbersButton onClick={() => addToDisplayArray("-")}>
            -
          </ManipulateNumbersButton>{" "}
          <NumberButton onClick={() => addToDisplayArray(1)}>1</NumberButton>
          <NumberButton onClick={() => addToDisplayArray(2)}>2</NumberButton>
          <NumberButton onClick={() => addToDisplayArray(3)}>3</NumberButton>
          <ManipulateNumbersButton onClick={() => addToDisplayArray("+")}>
            +
          </ManipulateNumbersButton>
          <NumberButton onClick={() => addToDisplayArray(0)}>0</NumberButton>
          <NumberButton onClick={() => addToDisplayArray(".")}>.</NumberButton>
          <ManipulateNumbersButton
            className="equalTo"
            onClick={() => evaluateDisplayVal()}
          >
            =
          </ManipulateNumbersButton>
        </div>
      </div>
    </div>
  );
}

export default App;
