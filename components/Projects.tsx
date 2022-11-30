import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const projects = [
  {
    name: 'Grillclub',
    img: 'grillclub',
    desc: 'Official dealer and exclusive representative in the Kharkiv region, owned by the manufacturers of grills and barbecues GRILLCLUB',
  },
  {
    name: 'Bmmoto',
    img: 'bmmoto',
  },
  {
    name: 'Computherm',
    img: 'computherm',
  },
];

const Projects = (props: Props) => {
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
      className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((projectItem) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}>
              <Image
                className=""
                src={`/assets/${projectItem.img}.jpg`}
                width={500}
                height={500}
                alt={projectItem.img}
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="underline decoration-[#F7AB0A]/50 text-4xl font-semibold text-center">
                {projectItem.name}
              </h4>
              <p className="text-lg text-center md:text-left">{projectItem.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
