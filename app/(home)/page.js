import FavoriteProjects from '@/components/favoriteprojects'
import Hero from '@/components/hero'
import LatestCode from '@/components/latestcode'
import Container from '../(dashboard)/(routes)/container/page'

const Home = ({ repositories }) => {
  return (
    <Container>
      <Hero />
      <FavoriteProjects />
      <LatestCode repositories={repositories}/>
    </Container>
  )
}

export default Home
