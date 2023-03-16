// src/components/Contact.js

import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <FontAwesomeIcon icon={faContactBook} className="inline-block mb-2"  size="xl" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Contact Information
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "There is no way to find out if someone is deservable without actually knowing them." -Shubham Tapadiya
          </p>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.970752516595!2d-71.1174248703738!3d42.36446257625567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377591b373c95%3A0xfa5556a1cbd5a826!2s308%20Western%20Ave%2C%20Cambridge%2C%20MA%2002139!5e0!3m2!1sen!2sus!4v1677530018049!5m2!1sen!2sus"
          />
        </div>

        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
          <div className="px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-5">
              ADDRESS
            </h2>
            <p className="mt-1">
              Massachusetts - 02139
            </p>

            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-5">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed hover:text-green-400" href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSMTSDvxBJThLFfppXhphXFGtqczXpbwSPzxjptvLkTRnTRdJsnqqPGGnJNfhkDPSNwSXNfh" >
              tapadiyams@gmail.com
            </a>
            
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-5">
              PHONE
            </h2>
            <p className="leading-relaxed">607-338-0402</p>
          </div>
        </div>
      </div>
    </section>
  );
}