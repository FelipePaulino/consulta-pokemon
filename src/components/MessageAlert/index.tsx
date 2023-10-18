import * as S from './styles'
import { useRouter } from 'next/router';
import Button from '../Button';
import SuccessIcon from '../SVGS/SuccsessIcon';
import ErrorIcon from '../SVGS/ErrorIcon';
import formatData from '../../utils/formatDate';



interface MessageAlertProps {
  result: 'success' | 'error'
  date?: string
  time?: string
  pokemons?:string
  error?: string
}

function MessageAlert({ result, date, time, pokemons, error }: MessageAlertProps) {
  const router = useRouter()

  return (
    <S.Container>
      {result === 'success' ? (
        <S.Wrapper>
          <S.WarningTitle>Consulta Agendada</S.WarningTitle>
          <div>
            <SuccessIcon />
          </div>
          <S.WarningText>Seu agendamento para dia {date && formatData(date, 'dash')}, às {time}, para {pokemons} pokémon{pokemons && parseInt(pokemons) > 1 && <>s</>} foi realizado com sucesso!</S.WarningText>
          <Button stylepattern='primary' onClick={() => router.push('/agendar-consulta')}>Fazer Novo Agendamento</Button>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.WarningTitle>Houve um problema no agendamento</S.WarningTitle>
          <div>
            <ErrorIcon />
          </div>
          <S.WarningText>{error}</S.WarningText>
          <Button stylepattern='primary' onClick={() => router.push('/agendar-consulta')}>Fazer Novo Agendamento</Button>
        </S.Wrapper>
      )}
    </S.Container>
  );
}

export default MessageAlert;