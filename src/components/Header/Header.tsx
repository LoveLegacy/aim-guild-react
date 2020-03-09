import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu>
      <Link to={""}>
      <Menu.Item>
        Login
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default Header;