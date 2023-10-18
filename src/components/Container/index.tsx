import * as S from './styles'
import { IContainerProps } from "./IContainerProps"

const Container = ({ children, stylepattern }: IContainerProps) => {
  return (
    <S.ContainerStyled data-testid='container-styled' stylepattern={stylepattern}>
      <S.Container>
        {children}
      </S.Container>
    </S.ContainerStyled>
  )
}

export default Container