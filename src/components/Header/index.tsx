import * as S from './styles'
import Button from '../Button'
import Link from 'next/link'
import Logo from '../Logo'

const Header = () => {
  return (
    <S.Header>
      <Logo data-testid='logo-container' />
      <S.Nav>
        <S.NavList>
          <li>
            <Link href='/quem-somos'>
              <S.NavLink>Quem Somos</S.NavLink>
            </Link>
          </li>
          <li>
            <Link href='/agendar-consulta'>
              <Button stylepattern='primary' >
                Agendar Consulta
              </Button>
            </Link>
          </li>
        </S.NavList>
      </S.Nav>
    </S.Header>
  )
}

export default Header