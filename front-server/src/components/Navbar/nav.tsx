import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div>
        <NavLink to="/signup">SignUp</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">MyPage</NavLink>
      </div>
    </nav>
  );
}

export default Nav;