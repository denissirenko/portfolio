import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

const skills = [
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
  'gulp',
  'lodash',
  'modernizr',
  'npm',
  'typescript',
  'webpack',
];

const Skills = (props: Props) => {
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
      className="relative flex flex-col text-center md:text-left md:flex-row max-w-[2000px] min-h-screen px-10 justify-center xl:space-y-0 mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking3[3px] text-gray-500 text-sm">
        The main skills that I use in projects
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <Skill key={skill} skill={skill} directionLeft={index <= 7 ? true : false} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
