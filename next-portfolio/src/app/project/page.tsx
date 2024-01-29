import Layout from '../../../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../../../config';
import ProjectItem from '../../../components/project/project-item';
import { NotionDatabaseResponse, NotionPage } from '../../../src/types/notion-types';


export default async function Projects() {
    const projects = await getProject();
    // console.log(JSON.stringify(projects, null, 2));


    if(projects != null){
        return (
            <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
                <Head>
                <title>TAE's portfolio</title>
                <meta name="description" content="TAE's portfolio" />
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl ">
                총 프로젝트 :
                <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>

                <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                {projects.results.map((aProject: NotionPage) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
                </div>
            </div>
            </Layout>     
        );
    }
    }

    async function getProject() {
        const options = {
            method: 'POST',
            headers: {
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`,
            },
            body: JSON.stringify({
                sorts: [
                    {
                        property: 'Project',
                        direction: 'descending',
                    },
                ],
                page_size: 100,
            }),
        };

        const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
        // console.log(`response status: ${response.status}`);

        const projects: NotionDatabaseResponse = await response.json();

        // const projectNames = projects.results.map((aProject: any) =>(
        //     aProject.properties.Project.title[0].plain_text
        // ))
        // console.log(`projectNames : ${projectNames}`);

        
        return projects;
    }