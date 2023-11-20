import React from "react";
import frame120 from "./assets/Frame120.png";
import frame10 from "./assets/Group10.png";
import frame126 from "./assets/Frame126.png";
import frame129 from "./assets/Frame129.png";
import {motion} from 'framer-motion'

const Testimonial = () => {
  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
  const containerVariant = {
    hidden: { opacity: 0, x: 75, y: 75 },
    visible: { opacity: 1, x: 0, y: 0 },
  }
  return (
    <div className="bg-[#E0EBF4] py-[6rem] pl-[18rem] ">
      <motion.div className="flex justify-center "
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5, delay: 0.10 }}>
        <div className="relative">
          <img src={frame120} alt="" />
          <div className="absolute bottom-[-2rem]   left-[-20rem]">
            <img src={frame10} alt="" />
          </div>
        </div>
      </motion.div>
      <div className="flex justify-between mt-[4rem] mr-[4rem]">
        <div className="w-[50%]">
          <motion.p
          
          variants={wordVariant}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5, delay: 0.10 }}>
            As a CEO, I've seen Employee365 transform our organization. It's not
            just about efficiency; it's about the culture we've built. Our
            employees are more empowered, and that has translated into
            significant growth. It's been a pivotal factor in our success.
          </motion.p>
          <motion.div
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5, delay: 0.10 }}>
          <img src={frame126} alt="" />

          </motion.div>
        </div>
        <motion.div
        variants={containerVariant}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5, delay: 0.10 }}>
          <img src={frame129} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
