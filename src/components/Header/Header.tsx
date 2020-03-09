import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <a href="https://www.sapperdem.com/api/v1/discord">Login</a>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Header;
