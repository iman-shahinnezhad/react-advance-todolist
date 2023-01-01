import React from "react";
import {
  NavbarBrand,
  NavbarConainer,
  NavBarSetting,
  NavbarSettingIcon,
} from "../../styles/navbar";

const Navbar = () => {
  return (
    <NavbarConainer>
      <NavbarBrand>Todo List Tasks</NavbarBrand>
      <NavBarSetting>
        <NavbarSettingIcon>am</NavbarSettingIcon>
      </NavBarSetting>
    </NavbarConainer>
  );
};

export default Navbar;
