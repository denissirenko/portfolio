import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const About = (props: Props) => {
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
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.div
        className="flex -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h64 xl:w-[500px] xl:h-[600px] overflow-hidden"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}>
        <Image className="m-auto" src="/assets/myFoto.jpg" width={500} height={500} alt="MyFoto" />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
        </h4>
        <p className="text-base">
          At the moment I have more than 3 years of experience in developing websites using HTML /
          CSS, JavaScript, and jQuery / jQuery plugins, I have experience in SPA development using
          Vue / Nuxt. I want to be in a good team of professionals, where I could improve my skills
          and use them for interesting tasks. I'd like to work on the Front-End as a React developer
          or Vue developer.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
