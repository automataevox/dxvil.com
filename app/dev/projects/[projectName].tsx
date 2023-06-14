import { GetStaticProps, GetStaticPaths  } from 'next';
import { useRouter } from 'next/router';
import { siteConfig } from '@/config/site';

interface projectInterface {
    img_src: string;
    img_alt: string;
    name: string;
    url: string;
}

async function getData() {
    const data = JSON.parse(siteConfig.projects.toString());

    return data;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const itemID = context.params?.something;
    const data = await getData();
    const foundItem = data.stars.find((item: projectInterface) => itemID === item.name);
  
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
      specificStarData: foundItem
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();
    const pathsWithParams = data.stars.map((project: projectInterface) => ({ params: { something: project.name }}))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

function ProjectPage(props: { projectData: projectInterface, hasError: boolean }) {
      const router = useRouter();
    
      if (props.hasError) {
        return <h1>Error - please try another parameter</h1>
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }
    
      return (
        <div>
          <h1>{props.projectData.name}</h1>
          <p>{props.projectData.img_alt}</p>
          <a href={props.projectData.url}>More Information here (link)</a>
        </div>
      )
    }
    
    export default ProjectPage;