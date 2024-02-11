import React from "react";
import "./style.scss";

import Logo from "/src/assets/logo.png";

const LoginButton = (props) => {
  return (
    <>
      <img src={Logo} alt="로고" className="Logo" />
      <p>{props.text}</p>
    </>
  );
};

export default LoginButton;
