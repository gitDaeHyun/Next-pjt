import React from 'react';
// import Nav from '../../components/Navbar/nav';
import useInput from '../../hooks/useInput';

function SignUp() {
  const [inputValue, handleChange, handleSubmit] = useInput("", (value : string) => {
    console.log("아이디 저장 버튼이 클릭되었습니다.");
    console.log("입력된 아이디:", value);
  });
  const [inputValue2, handleChange2, handleSubmit2] = useInput("", (value : string) => {
    console.log("비밀번호 저장 버튼이 클릭되었습니다.");
    console.log("입력된 비밀번호:", value);
  });

  return (
    <>
      <h1>SignUp</h1>
      <form>
        <input value={inputValue} onChange={handleChange} placeholder="아이디를 입력하세요" />
        <input value={inputValue2} onChange={handleChange2} type="password" placeholder="비밀번호를 입력하세요" />
        <button onClick={handleSubmit}>아이디 저장 버튼</button>
      </form>
    </>
  );
}

export default SignUp;