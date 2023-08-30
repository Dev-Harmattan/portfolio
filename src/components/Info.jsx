import React from 'react';
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { socialMedias } from '../constants';
import { fadeIn } from '../utils/motion';

const SocialCard = ({ social, index }) => {
  return (
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.7)}>
      <div className="bg-tertiary rounded-xl mt-4 py-4 px-4 max-w-full lg:max-w-[500px] ">
        <p className="text-white font-medium sm:text-[24px] text-20">
          {social.name}
        </p>
        <p
          className="sm:text-[18px] text-[14px] text-secondary cursor-pointer"
          onClick={() => window.open(social.link, '_blank')}
        >
          {social.link}
        </p>
      </div>
    </motion.div>
  );
};

const Info = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Follow the Buzz</p>
        <h1 className={`${styles.sectionHeadText}`}>Stay Connected.</h1>
      </motion.div>
      <div className="flex flex-col flex-1/3 mt-15 gap-10">
        {socialMedias.map((social, index) => (
          <SocialCard key={social.name} index={index} social={social} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Info, '');
