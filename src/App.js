import { useState } from "react";
import "./App.scss";
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
    setNumberList((numberList) => {
      let operator, operatorIndex;

      for (let i = 0; i < numberList.length; i++) {
        switch (numberList[i]) {
          case "+":
            operator = "+";
            operatorIndex = i;
            break;
          case "/":
            operator = "/";
            operatorIndex = i;
            break;
          case "-":
            operator = "-";
            operatorIndex = i;
            break;
          case "X":
            operator = "X";
            operatorIndex = i;
            break;
          default:
            break;
        }
      }
      //Find possible operator and their index in numberList

      const firstVar = parseFloat(numberList.join("").slice(0, operatorIndex));
      const secondVar = parseFloat(
        numberList.join("").slice(operatorIndex + 1)
      );
      //Assign all numbers before/after the operator to separate variables and turn these numbers into type float

      let result;
      if (operator === "+") {
        result = firstVar + secondVar;
      } else if (operator === "/") {
        result = firstVar / secondVar;
      } else if (operator === "-") {
        result = firstVar - secondVar;
      } else if (operator === "X") {
        result = firstVar * secondVar;
      }
      //Carry out the user-selected operation and assign it to a new variable "result"

      result = [...result.toString()];
      //Set result to be an array so that the user can continue to add and manipulate numbers in interaction with display (would not be possible if result was still of type number)

      if (result.length > 8) {
        return "ERR";
      }

      return result;
    });
  };

  return (
    <div className="App">
      <header className="appHeader">
        <p>Calculator!</p>
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
      <p>
        This calculator was inspired by the user stories defined in{" "}
        <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md">
          this repo
        </a>{" "}
        but was coded by David Rönnlid with no further instructions from
        external parties (except Google, StackOverflow, etc.) regarding how to
        develop it.
      </p>
    </div>
  );
}

export default App;
