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
            <p className="leading-relaxed text-base text-green-400 bg-gray-900 py-5 font-mono"> 
              Hi, my name is
            </p>
            Shubham Tapadiya
            <p className="leading-relaxed text-base text-gray-400 bg-gray-900 py-5"> 
              As a seasoned Software Engineer, I possess a proven track record in full stack development, showcasing my expertise in designing and developing top-notch client solutions.
            </p>
          </h1>
          <div className="flex justify-center space-x-8">
            <a href="https://Linkedin.com/in/TShubham8/">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#68D391' }}/>
            </a>
            <a href="https://mobile.twitter.com/the_thrones_">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#68D391' }}/>
            </a>
            <a href="https://github.com/TapadiyaMS">
              <FontAwesomeIcon icon={faGithub} style={{ color: '#68D391' }}/>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Images/coding.svg"
          />
        </div>
      </div>
    </section>
  );
}