import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 104px;
  margin: 0 auto;
  padding: 0 83px;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-end;
  gap: 30px;
  list-style: none;
`

export const NavLink = styled.span`
  color: #000000;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`