import React from "react";

import EmailInput from "../../molecules/EmailInput/EmailInput";
import PwInput from "../../molecules/PwInput/PwInput";
import KeepLogin from "../../molecules/KeepLogin/KeepLogin";

const LoginForm = () => {
  return (
    <div>
      <EmailInput></EmailInput>
      <PwInput></PwInput>
      <KeepLogin></KeepLogin>
    </div>
  );
};
export default LoginForm;
