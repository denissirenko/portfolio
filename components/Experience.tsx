import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

const experienceDate = [
  {
    jobTitle: 'FrontEnd Developer',
    jobPlace: 'Freelance',
    technologies: [
      'html5',
      'css3',
      'sass',
      'javascript',
      'vuejs',
      'react',
      'redux',
      'jquery',
      'bootstrap',
      'github',
    ],
    jobPeriod: 'April 2021 - March 2022',
    responsibilities: [
      'Building new elements and features for the web',
      'Participating in creation UI design',
      'Bug fixing',
    ],
  },
  {
    jobTitle: 'FrontEnd Developer',
    jobPlace: 'MiruMir',
    technologies: ['html5', 'css3', 'sass', 'javascript', 'jquery', 'bootstrap', 'github'],
    jobPeriod: 'November 2018 - March 2021',
    responsibilities: [
      'Building new elements and features for the web',
      'Collaborating with in-house web designers to create sleek and innovative UI design',
      'Taking part in optimizing Fastlane flow',
      'Bug fixing',
    ],
  },
];

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experienceDate.map((experienceItem) => (
          <ExperienceCard {...experienceItem} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
