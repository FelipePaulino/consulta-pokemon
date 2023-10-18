import Head from 'next/head'
import Template from '../src/components/Template'
import HomeContainer from '../src/components/HomeContainer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Centro Pokémon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        <HomeContainer />
      </Template>
    </>
  )
}
