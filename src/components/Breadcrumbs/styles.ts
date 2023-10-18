import styled from "styled-components";

export const BreadCrumbsList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap:4px;

`

export const CrumbHome = styled.li`
   display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  gap:4px;
  text-decoration: none;
  
  &:hover{
    text-decoration: underline;
  }
`

export const CrumbLink = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  gap:4px;
  text-decoration: none;

  &:before{
    content: ' > ';
    font-weight: 300;
  }
`