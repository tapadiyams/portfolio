// src/components/Projects.js

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      {/* // main container  */}
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* // Title and it's caption */}
        <div className="flex flex-col w-full mb-10">
          <FontAwesomeIcon icon={faDiagramProject} className="inline-block mb-2"  size="xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "A man’s mind, stretched by new ideas, may never return to its original dimensions.“ -Oliver Wendell Holmes Jr. 
          </p>
        </div>
        {/* // Content  */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            // main cell
            <div className="sm:w-1/2 w-100 p-4">
              {/* // border around */}
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                {/* // text */}
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  { project.subtitle }
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  { project.title }
                </h1>
                <ul className="list-disc pl-5" style={{textAlign: 'left', paddingLeft: 0}}>
                  {project.description.map((point) => (
                    <li className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}