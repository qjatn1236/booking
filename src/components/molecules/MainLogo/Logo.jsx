import React from "react";
import Logo from "/src/assets/logo.png";

const LoginButton = (props) => {
  return (
    <>
      <img src={Logo} alt="로고" />
      <p>{props.text}</p>
    </>
  );
};

export default LoginButton;
