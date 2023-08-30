import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../HOC';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 x-12 min-h-[280px] flex justify-center items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-[20px] text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Onboarding</p>
        <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text=[17px] max-w-3xl leading-[30px]"
      >
        I'm an adept full-stack JavaScript developer with a wide-ranging skill
        set in software development. I'm well-versed in both monolithic and
        microservice architectures, proficiently using JavaScript and
        TypeScript. My toolkit includes Node.js, React, Next.js, React Native,
        along with diverse databases like MongoDB, MySQL, and PostgreSQL. I'm
        also skilled in GraphQL implementation and have hands-on experience with
        Docker, Kubernetes, AWS, and serverless applications. I prioritize
        application security and have a strong foundation in Agile and Scrum
        methodologies, making me an adaptable and knowledgeable collaborator.
      </motion.p>
      <div className="flex flex-wrap mt-20 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
