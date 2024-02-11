import React from "react";
import MainLogo from "../../components/molecules/MainLogo/Logo";
import Login from "../../components/templates/LoginTemplates/Login";

export default function Main() {
  return (
    <div>
      <MainLogo text={"예쁘다, 예약 플레이"} />
      <Login />
    </div>
  );
}
