import styled from "styled-components";

export const NavbarConainer = styled.nav`
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarBrand = styled.h1`
  width: 50%;
`;

export const NavBarSetting = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarSettingIcon = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  background-color: blue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
`;
