import React from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { useDarkMode } from "../../AuthContext/ThemeContext";

const DarkToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div>
      <button
        className="cursor-pointer text-xl md:text-3xl dark:text-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <IoMoonSharp /> : <IoSunny />}
      </button>
    </div>
  );
};

export default DarkToggler;
