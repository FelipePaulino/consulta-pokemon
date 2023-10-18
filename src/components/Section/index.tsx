import * as S from './styles'
import Container from "../Container";
import Breadcrumbs from "../Breadcrumbs";

interface ISessionProps {
  title: string;
  subTitle: string;
  stylepattern?: 'primary' | 'white'
  breadCrumbs?: boolean;
}

const Section = ({ title = '', subTitle = '', stylepattern = 'primary' }: ISessionProps) => {
  return (
    <Container stylepattern={stylepattern}>
      <Breadcrumbs />
      <S.SectionContainer data-testid="section-component">
        <S.SectionTitle>{title}</S.SectionTitle>
        <p>{subTitle}</p>
      </S.SectionContainer>
    </Container>
  )
}

export default Section