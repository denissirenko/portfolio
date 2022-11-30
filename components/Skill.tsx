import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

type Props = {
  skill: string;
  directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      className="flex justify-center items-center mx-3"
      data-tip={skill}>
      <ReactTooltip type="light" />
      <Image className="" src={`/assets/${skill}.svg`} width={50} height={50} alt={skill} />
    </motion.div>
  );
};

export default Skill;
