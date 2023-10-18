
import { formatCurrency } from '../../../utils/formatCurrency'
import Button from '../../Button'
import * as S from '../styles'

interface IScheduleFormCheckoutProps {
  pokemons: string[] | []
  calTax: string
}

function ScheduleFormCheckout({ pokemons, calTax }: IScheduleFormCheckoutProps) {
  return (
    <>
      <S.FormInfoContainer>
        <S.InfoText>Número de pokémons a serem atendidos:</S.InfoText>
        <S.InfoText>{pokemons.length.toString().padStart(2, '0')}</S.InfoText>
      </S.FormInfoContainer>
      <S.FormInfoContainer>
        <S.InfoText>Atendimento unitário por pokémon: </S.InfoText>
        <S.InfoText>{formatCurrency(70)}</S.InfoText>
      </S.FormInfoContainer>
      <S.FormInfoContainer>
        <S.InfoText>Subtotal:</S.InfoText>
        <S.InfoText>{formatCurrency(70 * pokemons.length)}</S.InfoText>
      </S.FormInfoContainer>
      <S.FormInfoContainer>
        <S.InfoText>Taxa geracional*: </S.InfoText>
        <S.InfoText>{calTax}</S.InfoText>
      </S.FormInfoContainer>
      <S.InfoSmallText>*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</S.InfoSmallText>
    </>
  )
}

export default ScheduleFormCheckout