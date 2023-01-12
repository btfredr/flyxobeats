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
            <a
              href="https://open.spotify.com/artist/7xGRgUeVSakZNqxjvyHD2b?si=GP6A2rpARVOPal2up5FXcw"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contactIcon">
                <FaSpotify />
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/us/artist/flyxo/1383892486"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contactIcon">
                <SiApplemusic />
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/flyxo"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contactIcon">
                <FaSoundcloud />
              </button>
            </a>
          </li>
          <li>
            <a
              href="mailto:flyxobeats@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
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
