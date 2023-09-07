import FavoriteProjects from '@/components/favoriteprojects'
import Hero from '@/components/hero'
import LatestCode from '@/components/latestcode'
import React from 'react'
import Container from '../(dashboard)/(routes)/container/page'
import { ThemeProvider } from 'next-themes'


const Home = () => {
  return (
    <Container>
      <Hero />
      <FavoriteProjects />
      <LatestCode />
    </Container>
  )
}

export default Home