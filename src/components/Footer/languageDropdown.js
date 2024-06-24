import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <IoIosGlobe className=" text-black text-3xl" />
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="p-1 border border-black rounded text-black bg-white"
      >
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
