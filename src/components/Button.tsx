import React from 'react';

interface ButtonProps {
    onClickButton: ()=>void | null;
  }
  
const Button: React.FC<ButtonProps> = ({onClickButton}) =>{
  return (
    <button onClick={onClickButton}>ok</button>
  );
}

export default Button;
