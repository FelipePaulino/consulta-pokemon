import Footer from '../Footer'
import Header from '../Header'
import * as S from './styles'

interface IBasicTemplateProps {
  children: React.ReactNode
}

const Template = ({ children }: IBasicTemplateProps) => {
  return (
    <main>
      <Header />
      <S.Content>
        {children}
      </S.Content>
      <Footer />
    </main>
  )
}

export default Template