import * as S from './styles'

interface ICustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = (props: ICustomInputProps) => {
  return (
    <S.InputWrapper data-testid='input-styled-component'>
      {props.label && <S.Label htmlFor={props.id}>{props.label}</S.Label>}
      <S.InputStyled {...props} />
      {props.error && <S.Error data-testid='error-message'>{props.error}</S.Error>}
    </S.InputWrapper>
  )
}

export default Input;