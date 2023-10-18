import { IButtonProps } from './IButtonProps'
import * as S from './styles'


const Button = ({ children, stylepattern = 'primary', ...props }: IButtonProps) => {
  return (
    <S.ButtonStyled
      {...props}
      stylepattern={stylepattern}
      data-testid='button-styled-component'
    >
      {children}
    </S.ButtonStyled >
  )
}

export default Button