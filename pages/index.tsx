import type { NextPage } from 'next'
import Head from 'next/head'
import challenges from '../data.json'
import Grid from '../components/Grid'
import Header from '../components/Header'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Joseito Fernandes: Frontend Web Dev Challenges</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Header />

        <main>
          <Grid challenges={challenges} />
        </main>
        <br />
      </PageWrapper>
    </div>
  )
}

export default Home

const PageWrapper = styled.div`
  background-color: #131417;
  color: white;
`