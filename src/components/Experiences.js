// src/components/Projects.js

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* Title */}
        <div className="flex flex-col w-full mb-10">
          <FontAwesomeIcon icon={faLaptopCode} className="inline-block mb-2"  size="xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Industry Experiences
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "Some of the brightest minds in the country can be found on the last benches of the classroom." -Dr. APJ Abdul Kalam
          </p>
        </div>
        {/* Exp Content */}
        <div className="flex-wrap -m-4">
          {experiences.map((experience) => (
            <div className="w-100 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900"> 
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {experience.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {experience.title}
                  </h1>
                  <ul className="list-disc " style={{textAlign: 'left', paddingLeft: 0}} >
                    {experience.description.map((point) => (
                      <li className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}