import React from 'react';
import { FaMapPin, FaEnvelope, FaCheck } from 'react-icons/fa';
import { BsPhoneFill } from 'react-icons/bs';

export default function MapComponent() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94692.94824811959!2d-87.90620742883473!3d42.12557275299725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fba351c0abd47%3A0x12f63c61fae9bbb8!2sNorthbrook%2C%20IL%2060062!5e0!3m2!1sen!2sus!4v1645762023101!5m2!1sen!2sus"
        width="100%"
        title="map"
        height="200"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div class="wrapper">
        <FaMapPin className="icon" />
        <p>Northbrook, IL, USA</p>
      </div>
      <div class="wrapper">
        <FaEnvelope className="icon" />
        <p>
          <a href="mailto: jdm@mailmasker.com">jdm@mailmasker.com</a>
        </p>
      </div>
      <div class="wrapper">
        <BsPhoneFill className="icon" />
        <p>872-225-2919</p>
      </div>
      <div class="wrapper">
        <FaCheck className="icon" />
        <p>Freelance Available</p>
      </div>
    </div>
  );
}
