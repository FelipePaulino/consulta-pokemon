import styled from "styled-components";

interface ClockAnimationProps{
  $showtext?: boolean;
}

export const LogoContainer = styled.div<ClockAnimationProps>`
  display: flex;
  background-color: #E40F0F;
  padding: 13px;
  border-radius: 50px;
  align-items: center;
  cursor: pointer;
  height: 60px;

  ${({ $showtext}) => `
    width: ${ $showtext ? '259px' : '61px'};
  `}
  transition: all 0.5s cubic-bezier(0.250, 0.250, 0.750, 0.750); 

`

export const LogoText = styled.h1<ClockAnimationProps>`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  ${({ $showtext}) => `
    margin-left: ${ $showtext ? '50px' : '0px'};
    opacity: ${ $showtext ? 1 : 0};
  `}
  transition: all 0.5s cubic-bezier(0.250, 0.250, 0.750, 0.750); 
`