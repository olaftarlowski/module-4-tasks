import React, { useEffect, useRef } from "react";
import Button from "./Button";

const App = () => {
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.style.background = "red";
    btnRef.current.style.color = "white";
  }, []);

  const mouseOverHandler = () => {
    btnRef.current.innerText = "Mouse over ";
  };

  return (
    <div>
      <h2>Ref Button</h2>
      <Button ref={btnRef} mouseOver={mouseOverHandler}>
        My Button
      </Button>
    </div>
  );
};

export default App;
