import React from "react";

import EmailInput from "../../molecules/EmailInput/EmailInput";
import PwInput from "../../molecules/PwInput/PwInput";
import RePwInput from "../../molecules/RePwInput/RePwInput";

import JoinButtom from "../../molecules/JoinButton/JoinButton";

const JoinForm = () => {
  return (
    <>
      <EmailInput />
      <PwInput />
      <RePwInput />

      <JoinButtom />
    </>
  );
};

export default JoinForm;
