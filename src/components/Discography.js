import React from "react";
import karma from "../assets/karma.jfif";
import skyisblue from "../assets/skyisblue.png";
import vices from "../assets/vices.jpg";

const Discography = () => {
  return (
    <div className="discography">
      <ul className="discographyAlbums">
        <li className="discographyItem">
          <a href="">
            <img src={karma} alt="" className="cover" />
          </a>
        </li>
        <li className="discographyItem">
          <a href="">
            <img src={skyisblue} alt="" className="cover" />
          </a>
        </li>
        <li className="discographyItem">
          <a href="">
            <img src={vices} alt="" className="cover" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Discography;
