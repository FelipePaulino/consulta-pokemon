import styled from "styled-components";
import { IContainerProps } from "./IContainerProps";

const stylePatternProps = {
  primary: {
    backgroundColor: '#E40F0F',
    color: '#FFFFFF',
  }
}

export const ContainerStyled = styled.div<IContainerProps>`
  width: 100%;
  ${({stylepattern}) => stylepattern === 'primary' && stylePatternProps.primary};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
  padding: 32px 106px;
  padding-bottom: 60px;
  width: 100%;
`