import React from "react";
import frame120 from "./assets/Frame120.png";
import frame10 from "./assets/Group10.png";
import frame126 from "./assets/Frame126.png";
import frame129 from "./assets/Frame129.png";

const Testimonial = () => {
  return (
    <div className="bg-[#E0EBF4] py-[6rem] pl-[18rem] ">
      <div className="flex justify-center ">
        <div className="relative">
          <img src={frame120} alt="" />
          <div className="absolute bottom-[-2rem]   left-[-20rem]">
            <img src={frame10} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[4rem] mr-[4rem]">
        <div className="w-[50%]">
          <p>
            As a CEO, I've seen Employee365 transform our organization. It's not
            just about efficiency; it's about the culture we've built. Our
            employees are more empowered, and that has translated into
            significant growth. It's been a pivotal factor in our success.
          </p>
          <img src={frame126} alt="" />
        </div>
        <div>
          <img src={frame129} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
