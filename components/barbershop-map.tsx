"use client";

import React, { ReactNode, useEffect, useRef, useMemo } from "react";
import { TitleLg }  from '@/components/ui/title'
import { FiMapPin } from "react-icons/fi";


const api_key = "AIzaSyB4TUm1764C7Dr6jSAKFMVbJfo0x7YXVq4";

const MapComponent = () => {
  return (
    <section id="location" className="w-full">
      <div className="px-4 sm:px-6 mt-4 mb-4">
        <div className="text-center mt-2 mb-6 border-b border-gray-300 pb-2">
          <TitleLg>Location</TitleLg>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11473.880610887032!2d-92.4483204!3d44.0323426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f9e1e9dc992633%3A0x6883b1d09c36820b!2sJaviers%20Barbershop!5e0!3m2!1sen!2sus!4v1700674374772!5m2!1sen!2sus"
          width="100%"
          height="375"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        {/* <address className="text-center mt-4">
          1112 9th St. NE, Rochester, MN, United States
        </address> */}
        <div className="md:flex flex-row justify-center">
           <a href="https://maps.app.goo.gl/7NZjuGxVRSdjGkTq5" target="_blank" className="btn mt-3"><FiMapPin className="inline-block icon"/> Directions</a>
        </div>
      </div>
    </section>
  );
}

export default MapComponent;