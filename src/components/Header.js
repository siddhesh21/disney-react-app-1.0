import React from "react";
import styled from "styled-components";

function Header() {
  return <Nav>Header</Nav>;
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: black;
  display: flex;
`;
