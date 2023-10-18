import Head from "next/head";
import Template from "../../src/components/Template";
import Section from "../../src/components/Section";
import ScheduleForm from "../../src/components/ScheduleForm";
import { useRouter } from "next/router";
import slugify from "slugify";

type FormData = {
  nome: string;
  sobrenome: string;
  region: string;
  city: string;
  date: string;
  time: string;
  pokemons: string[];
}

export default function AgendarConsulta() {
  const router = useRouter();

  async function submitScheduleForm(data: FormData) {
    const makeHttpCall = (await import("../../src/utils/makeCall")).default
    try {
      await makeHttpCall({
        baseService: 'local',
        method: 'POST',
        url: '/scheduling/form',
        data: data
      }).then((res) => {
        res.status === 200 && router.push({
          pathname: `/agendar-consulta/success`,
          query: `date=${data.date.replaceAll("/", "-")}&time=${data.time}&pokemons=${data.pokemons.length}`
        })
      })

    } catch (err) {
      if (err instanceof Error) {
        router.push({
          pathname: "/agendar-consulta/error",
          query: `errorMessage=${slugify(err.message, { lower: true })}`,
        });
      }
    }
  }

  return (
    <>
      <Head>
        <title>Centro Pokémon - Agendar Consulta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <Section
          stylepattern='primary'
          title='Agendar Consulta'
          subTitle='Recupere seus pokémons em 5 segundos'
        />
        <ScheduleForm submitScheduleForm={submitScheduleForm} />
      </Template>
    </>
  );
}