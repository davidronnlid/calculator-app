import { useState } from "react";
import NumberButton from "./numberButtons";
import ManipulateNumbersButton from "./buttonsThatManipulateNumbers";

const Calculator = () => {
  const [digitList, setDigitList] = useState([]);

  const addToDisplayArray = (newDigit) => {
    setDigitList((digitList) => [...digitList, newDigit.toString()]);
  };

  const removeLastNumberFromDisplayArray = () => {
    digitList.pop();

    setDigitList((digitList) => [...digitList]);
  };
  const removeAllNumbersFromDisplayArray = () => {
    setDigitList((digitList) => {
      while (digitList.length > 0) {
        digitList.pop();
      }
      return [...digitList];
    });
  };

  const onePercentOfCurrentlyDisplayedVal = () => {
    setDigitList((digitList) => {
      let digitArr = [...digitList];
      let digitVar = digitArr.join("");

      let onePercent = digitVar / 100;

      onePercent = onePercent.toString().split("");
      return onePercent;
    });
  };

  const evaluateDisplayVal = () => {
    //Takes numbers before/after a possible user-selected arithmetic operator and carries out the operation in question on these two numbers

    setDigitList((digitList) => {
      let operator, operatorIndex;

      // const ifMultipleOperators = (digitList, operatorIndex) => {
      //   if (operatorIndex >= 0) {
      //     console.log("more than one operator selected");
      //     alert(
      //       "Only one operation per evaluation is allowed in this calculator."
      //     );
      //     return digitList;
      //   }
      // };

      for (let i = 0; i < digitList.length; i++) {
        // ifMultipleOperators(digitList, operatorIndex);

        switch (digitList[i]) {
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
      //Find possible operator and their index in digitList

      const firstVar = parseFloat(digitList.join("").slice(0, operatorIndex));
      const secondVar = parseFloat(digitList.join("").slice(operatorIndex + 1));
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

      if (
        !digitList.find((elm) => elm === operator) ||
        !secondVar ||
        !digitList.length
      ) {
        alert("No operations to evaluate");
        return digitList;
        // If there are no operators, or if there are no numbers after an operator, or if there are no numbers at all to evaluate, then return unmanipulated digitList
      } else {
        result = [...result.toString()];
        //Set result to be an array so that the user can continue to add and manipulate numbers in interaction with display (would not be possible if result was still of type number)
      }

      if (result.length > 8) {
        alert("Operations that return more than 8 digits are not allowed");
        return ["ERR"];
      }

      return result;
    });
  };

  return (
    <div className="calcContainer">
      <h2 className="calculatorDisplay">
        {Array.isArray(digitList)
          ? digitList.filter((elm, indx) => indx <= 7 && elm)
          : // If digitList is arr, then return first 8 items of this arr
            digitList}
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
        <ManipulateNumbersButton onClick={() => evaluateDisplayVal()}>
          =
        </ManipulateNumbersButton>
      </div>
    </div>
  );
};

export default Calculator;
