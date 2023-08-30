import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../HOC';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';
import { styles } from '../styles';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(e, e.target);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_zmlo9sc',
        'template_vtf1y5p',
        {
          from_name: form.name,
          to_name: 'Sodiq',
          from_email: form.email,
          to_email: 'ganiyusodiq059@gmail.com',
          message: form.message,
        },
        'lmsvl8V5rUVoulyzg'
      )
      .then(
        (result) => {
          alert("Thanks, I'll be in touch soon.");
          setLoading(false);
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          console.log(err);
          setLoading(false);
          alert('Something went wrong...');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Name</span>
            <input
              name="name"
              type="text"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="Type your message?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none outline-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary outline-none py-3 px-8 w-fit shadow-md shadow-primary font-bold rounded-xl"
          >
            {loading ? ' Sending..' : 'Submit'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
