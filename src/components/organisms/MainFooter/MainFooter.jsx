import React from "react";

import LoginButton from "../../molecules/LoginButton/LoginButton";
import FindId from "../../molecules/FindId/FindId";
import FindPw from "../../molecules/FindPw/FindPw";
import GotoJoin from "../../molecules/GotoJoin/GotoJoin";

const MainFooter = () => {
  return (
    <div>
      <LoginButton />
      <FindId />
      <FindPw />
      <GotoJoin />
    </div>
  );
};
export default MainFooter;
