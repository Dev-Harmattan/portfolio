import React from 'react';
import { technologies } from '../constants';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../HOC';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {technologies.map((tech) => (
        <div key={tech.name} className="h-28 w-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
