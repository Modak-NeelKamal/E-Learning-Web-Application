// app/(dashboard)/(routes)/resume/components/Education.tsx
import React from "react";

interface EducationProps {
  institution: string;
  degree: string;
  period: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Education: React.FC<EducationProps> = ({
  institution,
  degree,
  period,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">Education</h3>
      <div className="mb-2">
        <input
          type="text"
          name="institution"
          placeholder="Institution Name"
          value={institution}
          onChange={onChange}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={degree}
          onChange={onChange}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
        <input
          type="text"
          name="period"
          placeholder="Period (e.g., 2018 - 2022)"
          value={period}
          onChange={onChange}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
      </div>
    </div>
  );
};

export default Education;
