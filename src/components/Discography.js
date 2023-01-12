import React from "react";
import karma from "../assets/karma.jfif";
import skyisblue from "../assets/skyisblue.png";
import vices from "../assets/vices.jpg";

const Discography = () => {
  return (
    <div className="discography" id="discography">
      <ul className="discographyAlbums">
        <li className="discographyItem">
          <a
            href="https://open.spotify.com/album/3XQlYqwLHOhQL0vEWFwQ1l?si=8_7ygg_LQ1GFbxiAzk212A"
            target="_blank"
            rel="noreferrer"
          >
            <img src={karma} alt="" className="cover" />
          </a>
        </li>
        <li className="discographyItem">
          <a
            href="https://open.spotify.com/album/2B9Cbgqjkc4QFI5I7cXQi3?si=eeql9f5qRcy_8AljYfznoQ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={skyisblue} alt="" className="cover" />
          </a>
        </li>
        <li className="discographyItem">
          <a
            href="https://open.spotify.com/album/4lWq3oIESZjXTJbsElvibS?si=YgyqguN0Su-xx8_PYYqdCQ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={vices} alt="" className="cover" />
          </a>
        </li>
      </ul>
      <div className="playlist-container">
        <iframe
          src="https://open.spotify.com/embed/playlist/4DPregbFpbqU5P1BEBsXYB?utm_source=generator&theme=0"
          width="100%"
          height="500"
          frameBorder="0"
          title="Playlist containing songs produced by Flyxo"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Discography;
