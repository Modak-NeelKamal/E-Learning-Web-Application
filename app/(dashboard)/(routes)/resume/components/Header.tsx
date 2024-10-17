// app/(dashboard)/(routes)/resume/components/Header.tsx
import React from "react";

interface HeaderProps {
  name: string;
  role: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ name, role, onChange }) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold">{name || "Your Name"}</h1>
      <h2 className="text-lg text-gray-700">{role || "Your Role"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={onChange}
        className="border border-gray-300 rounded p-2 w-full mt-2"
      />
      <input
        type="text"
        name="role"
        placeholder="Enter your role"
        value={role}
        onChange={onChange}
        className="border border-gray-300 rounded p-2 w-full mt-2"
      />
    </div>
  );
};

export default Header;
