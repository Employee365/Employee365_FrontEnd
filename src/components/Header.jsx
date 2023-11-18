import React, { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [search, setSearch] = useState();
 
  return (
    <div className="p-[1rem] flex gap-[2rem] border-b-2 border-gray-200">
      <div className="flex gap-[4rem]">
        <Logo textSize={12} />
        <div>
          <input
            type="text"
            placeholder="search for employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" bg-[#E9E5E5] rounded-xl w-[400%]"
          />
        </div>
      </div>

      <div>
        <div>

        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Header;
