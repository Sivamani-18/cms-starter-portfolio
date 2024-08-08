'use client';

import { FC, useEffect, useState } from 'react';
import { Profile, Project } from '../types/types';

const Home: FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/profile');
        const data = await res.json();
        setProfile(data.profile);
        setProjects(data.projects);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <header>
        <img src={profile.profilePicture.url} alt={profile.name} />
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <p>Date of Birth: {profile.dob}</p>
        <p>Mobile: {profile.mobileNo}</p>
        <p>{profile.contactInfo}</p>
      </header>
      <section>
        <h2>Projects</h2>
        <ul>
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <li key={project.slug}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.image.url} alt={project.name} />
                <p>Tags: {project.tags.join(', ')}</p>
              </li>
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Home;
