import React from "react";
import { FaSpotify, FaSoundcloud } from "react-icons/fa";
import { SiApplemusic, SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h1>Get in touch with me</h1>
        <ul className="contactIcons">
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <button className="contactIcon">
                <FaSpotify />
              </button>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <button className="contactIcon">
                <SiApplemusic />
              </button>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <button className="contactIcon">
                <FaSoundcloud />
              </button>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <button className="contactIcon">
                <SiGmail />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
