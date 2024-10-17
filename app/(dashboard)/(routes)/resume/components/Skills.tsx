// app/(dashboard)/(routes)/resume/components/Skills.tsx
import React from "react";

interface SkillsProps {
  skills: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, onChange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">Skills</h3>
      <input
        type="text"
        name="skills"
        placeholder="Enter skills (comma separated)"
        value={skills.join(",")}
        onChange={onChange}
        className="border border-gray-300 rounded p-2 w-full mt-2"
      />
    </div>
  );
};

export default Skills;
