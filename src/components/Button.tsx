import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
function Button(props: ButtonProps) {
  return (
    <button onClick={(event) => props.handleClick(event, 10)}>
      CLick!!!!!
    </button>
  );
}

export default Button;
