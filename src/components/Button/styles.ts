import styled from "styled-components";
import { IButtonProps } from "./IButtonProps";

const stylePatternProps = {
  primary: {
    backgroundColor: '#E40F0F',
    color: '#FFFFFF',
    border: 'none',
    padding: '13px 30px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.5s cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#E40F0F',
      border: '0.5px solid #E40F0F',
    }
  },
  secondary:{
    backgroundColor: '#FFFFFF',
    color: '#1D1D1D',
    border: '1px solid #1D1D1D',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '13px 30px',
    cursor: 'pointer',
    borderRadius: '50px',
    '&:hover': {
      backgroundColor: '#1D1D1D',
      color: '#FFFFFF',
    }
  }
}


export const ButtonStyled = styled.button<IButtonProps>`
  ${({stylepattern}) => stylepattern === 'primary' && stylePatternProps.primary}
  ${({stylepattern}) => stylepattern === 'secondary' && stylePatternProps.secondary}
  ${({fullwidth}) => fullwidth ? `width:100%`: 'width: fit-content;'}

  &::disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`