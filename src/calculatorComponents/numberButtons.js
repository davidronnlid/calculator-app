import Button from "react-bootstrap/Button";

const NumberButton = (props) => {
  return (
    <Button onClick={props.onClick} className="calculatorButton" variant="dark">
      {props.children}
    </Button>
  );
};

export default NumberButton;
