import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    {/* <p className='text-white font-black text-[48px]'>"</p> */}

    <div className='mt-1'>
      <p className='text-white text-[35px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <a href={name}>
        <img
          src={image}
          
          className='w-100 h-100 object-cover'
        />
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Make sure to visit these links</p>
          <h2 className={styles.sectionHeadText}>Attatchments</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");