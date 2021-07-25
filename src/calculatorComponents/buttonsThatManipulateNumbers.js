import Button from "react-bootstrap/Button";

const ManipulateNumbersButton = (props) => {
  const conditionalClassName = `${
    props.children === "=" ? "calculatorButton equalTo" : "calculatorButton"
  }`;
  //Only add class "equalTo" to component with display text "=" (in order for the equal sign to span two grid columns)

  return (
    <Button
      variant="dark"
      onClick={props.onClick}
      className={conditionalClassName}
    >
      {props.children}
    </Button>
  );
};

export default ManipulateNumbersButton;
