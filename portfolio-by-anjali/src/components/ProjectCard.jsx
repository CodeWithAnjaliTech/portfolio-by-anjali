import React from "react";

export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
