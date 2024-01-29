"use client"

import Image from "next/image";
import { NotionPage } from '../../src/types/notion-types';


export default function ProjectItem({ data }: {data : NotionPage}) {
    const title = data.properties.Project.title[0].plain_text;
    const github = data.properties.GitHub.url;
    const descriptionBlocks = data.properties["\bDescription"].rich_text;
    const fullDescription = descriptionBlocks
        .map((block) => block.text.content)
        .join('');
    const role = data.properties.Role.rich_text[0].plain_text;
    const imgSrc = data.cover.external.url;
    const tags = data.properties.Tag.multi_select;
    const start = data.properties.WorkPeriod.date.start;
    const end = data.properties.WorkPeriod.date.end;

    const calculatedPeriod = (start: string, end: string): number => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        const startDate = new Date(
            Number(startDateStringArray[0]),
            Number(startDateStringArray[1]) - 1,
            Number(startDateStringArray[2])
        );
        const endDate = new Date(
            Number(endDateStringArray[0]),
            Number(endDateStringArray[1]) - 1,
            Number(endDateStringArray[2])
        );

        const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`startDate: ${startDate}`);
        console.log(`endDate: ${endDate}`);
        console.log(`기간 : ${result}`);
        return result;
    };

    return (
        <div className="project-card min-w-0 max-w-full">
            
            <Image
            className="rounded-t-xl"
            src={imgSrc}
            alt="cover image"
            width={50}
            height={50}
            layout="responsive"
            objectFit="cover"
            quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-lg font-bold mb-2">{title}</h1>
                <p className="text-sm mb-2">{fullDescription}</p>
                <h3 className="mt-4 mb-2">{role}</h3>
                <a href={github}>깃허브 바로가기</a>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                </p>
                <div className="flex items-start flex-wrap mt-2">
                    {tags.map((aTag) => (
                    <h1
                        className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 mb-2" 
                        key={aTag.id}
                    >
                        {aTag.name}
                    </h1>
                    ))}
                </div>
            </div>
        </div>
    );
}
