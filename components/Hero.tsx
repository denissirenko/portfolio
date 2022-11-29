import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import foto from '/public/assets/myFoto.jpg';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      'Hi, The Name`s Denis Sirenko ',
      'I`m A FrontEnd Engineer',
      'I like to learn and improve the professional level',
    ],
    loop: 0,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full mx-auto overflow-hidden h-32 w-32">
        <Image width={128} height={128} src={foto} alt="My foto" />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 mb-2 tracking-[15px]">FrontEnd Engineer</h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10 mb-5">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
