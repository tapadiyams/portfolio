// src/components/About.js

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Shubham Tapadiya
            <br></br>
            <p className="leading-relaxed text-base text-gray-400 bg-gray-900 body-font py-5"> 
              Results driven and motivated Software Engineer with demonstrated experience in full stack development. Productive in team and
              individual projects, showing expertise in design, development, and delivery of high-quality client solutions.
            </p>
          </h1>
          <div className="flex justify-center space-x-8">
            <a href="https://Linkedin.com/in/TShubham8/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://mobile.twitter.com/the_thrones_">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://github.com/TapadiyaMS">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}