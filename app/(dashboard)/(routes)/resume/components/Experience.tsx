// app/(dashboard)/(routes)/resume/components/Experience.tsx
import React, { ChangeEvent } from "react";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const Experience: React.FC<ExperienceProps> = ({
  company,
  role,
  period,
  description,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="mb-2">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={company}
          onChange={onChange}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={role}
          onChange={onChange}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
        <input
          type="text"
          name="period"
          placeholder="Period (e.g., Jan 2022 - Present)"
          value={period}
          onChange={onChange}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={onChange}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
      </div>
    </div>
  );
};

export default Experience;
