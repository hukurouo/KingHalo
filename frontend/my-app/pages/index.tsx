import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Box, Heading, Link } from '@chakra-ui/react'
import data from '../utils/halo.json'

type Halo = {
  date: string,
  list: Horse
}

type Horse = {
  horse_name: string,
  horse_url: string
}

const Home: NextPage = () => {
  return (
    <Container maxW='container.lg'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box py="4">
          <Heading>今週の母父キングヘイロー</Heading>
        </Box>

        <Box py="4">
          {data.map((halo: any, index: number) => {
            return (
              <Box key={index} pb="4">
                <Heading size="md" pb="2">{halo.date}</Heading>
                {halo.list.map((horse: any, index2: number) => {
                  return (
                    <div key={index2}>
                      <Link color='teal.500' href={horse.horse_url} target="_blank" rel="noopener">
                        {horse.horse_name}
                      </Link>
                      
                    </div>
                  )
                })}
              </Box>
            )
          })}
        </Box>
      </main>
    </Container>
  )
}

export default Home