import Layout from '../../../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../../../config';
import ProjectItem from '../../../components/project/project-item';
import { NotionDatabaseResponse, NotionPage } from '../../../src/types/notion-types';
import Link from 'next/link';


export default async function Projects() {
    const projects = await getProject();
    // console.log(JSON.stringify(projects, null, 2));


    if(projects != null){
        return (
            <Layout>
            <div className="relative">
                <Head>
                <title>TAE's portfolio</title>
                <meta name="description" content="TAE's portfolio" />
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <h3 className="text-2xl font-bold  absolute top-0 left-20 p-4 mb-4">
                총 프로젝트 :
                <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h3>

                <div className="grid grid-cols-1 gap-8 p-20 m-4 md:grid-cols-2 mt-6">
                {projects.results.map((aProject: NotionPage) => (
                    <Link key={aProject.id} href={`/project/${aProject.id}`} legacyBehavior>
                        <ProjectItem data={aProject} />
                    </Link>
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