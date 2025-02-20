import React from 'react';
import ProjectsHeader from '@/components/showcase/projects/projects-header';
import ContentBox from '@/components/showcase/projects/content-box';
import ProjectBox from '@/components/showcase/projects/project-box';

export default function ProjectDirectoryPage() {
  const projects = [
    {
      title: "EcoTracker",
      description: "A mobile app that helps users track and reduce their carbon footprint.",
      image: "/images/ovalBackground.jpg", // Replace with actual project image
      link: "#"
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProjectsHeader />
      <div className="container mx-auto px-4 py-8">
        <ContentBox 
          title="Featured Projects"
          description="Here are some of the outstanding projects from our community of student entrepreneurs. Each project represents innovative thinking and dedication to making a positive impact."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectBox key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}