import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  jobTitle: string;
  jobPlace: string;
  technologies: string[];
  jobPeriod: string;
  responsibilities: string[];
};

const ExperienceCard = (props: Props) => {
  const { jobTitle, jobPlace, technologies, jobPeriod, responsibilities } = props;
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{jobPlace}</p>
        <div className="flex justify-start space-x-2 my-2">
          {technologies.map((technologiesItem) => (
            <Image
              key={technologiesItem}
              className="mx-3"
              src={`/assets/${technologiesItem}.svg`}
              width={50}
              height={50}
              alt={technologiesItem}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{jobPeriod}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {responsibilities.map((responsibilitiesItem) => (
            <li key={responsibilitiesItem}>{responsibilitiesItem}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
