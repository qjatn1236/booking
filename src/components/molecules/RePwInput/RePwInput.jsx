import React from "react";

const RePwInput = () => {
  return (
    <>
      <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
      <p>
        * 영문/숫자 /특수문자등 3가지 이상 조합한
        <br />
        6~15자리만 가능합니다.
      </p>
    </>
  );
};

export default RePwInput;
