import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 py-3 px-5 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="logo">
        DS
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex items-center text-gray-300 cursor-pointer">
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <div className="uppercase hidden md:inline-flex text-sm text-gray-4">Get In Touch</div>
      </motion.div>
    </header>
  );
};

export default Header;
