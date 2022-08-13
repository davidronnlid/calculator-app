import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useEffect, useState } from "react";

function ErrorToast({ errorMessage, resetError }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    resetError();
    setShow(false);
  };

  useEffect(
    (errorMessage) => (errorMessage === "" ? null : setShow(true)),
    [errorMessage]
  );

  return (
    <ToastContainer>
      <Toast bg="danger" show={show} onClose={() => toggleShow()}>
        <Toast.Header>
          <strong className="me-auto">Error!</strong>
        </Toast.Header>
        <Toast.Body>{errorMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ErrorToast;
