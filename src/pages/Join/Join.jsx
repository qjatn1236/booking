import React from "react";
import MainLogo from "../../components/molecules/MainLogo/Logo";
import Join from "../../components/templates/JoinTemplates/Join";

export default function Main() {
  return (
    <>
      <MainLogo text={"회원가입"} />
      <Join />
    </>
  );
}
