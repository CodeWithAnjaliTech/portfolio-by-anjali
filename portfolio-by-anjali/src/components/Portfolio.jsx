import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Header from "./Header";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />

      {/* About Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          Hi, I'm Anjali! A passionate developer with a love for creating beautiful and functional web applications.
        </p>
      </motion.section>

      {/* Projects Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="Project 1" description="A cool web app built with React." />
          <ProjectCard title="Project 2" description="An innovative solution using Next.js." />
        </div>
      </section>
    </div>
  );
}
