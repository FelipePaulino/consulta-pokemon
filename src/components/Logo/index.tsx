import React, { useEffect, useState } from 'react';
import * as S from './styles'
import Image from "next/image"
import Link from 'next/link';
import { useLogo } from '../../context/LogoContext/logoProvider';

const Logo = () => {
  const { showLogo } = useLogo();
  const [showText, setShowText] = useState<boolean>(showLogo);
  useEffect(() => {
    setShowText(showLogo)
  }, [showLogo]);
  return (
    <Link href='/'>
      <S.LogoContainer data-testid="logo-container"
        $showtext={showText}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <div>
          <Image
            src="/images/white-pokeball.svg"
            alt="Pokebola"
            width={34}
            height={34}
          />
        </div>
        <S.LogoText data-testid='logo-text' $showtext={showText}>Centro Pokémon </S.LogoText>
      </S.LogoContainer>
    </Link>
  )
}

export default Logo