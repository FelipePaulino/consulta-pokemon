import Head from "next/head";
import Template from "../../src/components/Template";
import Section from "../../src/components/Section";
import WarningContainer from "../../src/components/MessageAlert";
import { useRouter } from "next/router";

export default function AgendarConsulta() {
  const router = useRouter();
  const { errorMessage } = router.query;

  return (
    <>
      <Head>
        <title>Centro Pokémon - Agendar Consulta</title>
        <meta name="description" content="Recupere seus pokémons em 5 segundos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <Section
          stylepattern='primary'
          title='Agendar Consulta'
          subTitle='Recupere seus pokémons em 5 segundos'
        />
        <WarningContainer result='error' error={errorMessage as string} />
      </Template>
    </>
  );
}