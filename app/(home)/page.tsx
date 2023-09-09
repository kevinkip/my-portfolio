"use client";

import FavoriteProjects from "@/components/favoriteprojects";
import Hero from "@/components/hero";
import LatestCode from "@/components/latestcode";
import Container from "../(dashboard)/(routes)/container/page";

const Home = () => {
  return (
    <Container>
      <Hero />
      <FavoriteProjects />
      <LatestCode />
    </Container>
  );
};

export default Home;
