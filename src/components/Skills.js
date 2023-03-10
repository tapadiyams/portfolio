// src/components/Skills.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { pl_skills, db_skills, others_skills, pt_skills, web_skills } from "../data";
import { faTasks } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <FontAwesomeIcon icon={faTasks} className="inline-block mb-2"  size="xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>

        {/* Skills */}
        <div className="text-center">
          <h1 className="sm:text-4s text-2xl font-small title-font mb-4 text-white">
              Programming Languages
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {pl_skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h1 className="sm:text-4s text-2xl font-small title-font mb-4 text-white">
              Database Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {db_skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h1 className="sm:text-4s text-2xl font-small title-font mb-4 text-white">
              Web Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {web_skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h1 className="sm:text-4s text-2xl font-small title-font mb-4 text-white">
              Performance Testing Tools
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {pt_skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h1 className="sm:text-4s text-2xl font-small title-font mb-4 text-white">
              Others
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {others_skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}