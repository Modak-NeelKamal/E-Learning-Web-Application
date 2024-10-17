"use client"; // Ensure this works as a client component

import React, { useState } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import DownloadButton from "./components/DownloadButton";

const Resume: React.FC = () => {
  // State to manage user inputs
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    company: "",
    period: "",
    description: "",
    institution: "",
    degree: "",
    skills: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div id="resume-content" className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-4">
        <Header
          name={userData.name}
          role={userData.role}
          onChange={handleChange}
        />

        <Experience
          company={userData.company}
          role={userData.role}
          period={userData.period}
          description={userData.description}
          onChange={handleChange}
        />

        <Education
          institution={userData.institution}
          degree={userData.degree}
          period={userData.period}
          onChange={handleChange}
        />

        <Skills skills={userData.skills.split(",")} onChange={handleChange} />

        <DownloadButton formData={userData} />
      </div>
    </div>
  );
};

export default Resume;
