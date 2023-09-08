import userData from '@/constants/data';
import getLatestRepos from '@/lib/getLatestRepos';

const getServerSideProps = async () => {
    console.log(process.env.GITHUB_AUTH_TOKEN);
    let token = process.env.GITHUB_AUTH_TOKEN;

    const repositories = await getLatestRepos(userData, token)
    //console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories
    }
  }
}

export default getServerSideProps