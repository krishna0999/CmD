import React from "react";
import "./Footer.css";
import facebook from "../../facebook/icons8-facebook-240.png";
import discord from "../../discord/icons8-discord-240.png";
import instagram from "../../instagram/icons8-instagram-240.png";
import linkedIn from "../../linkedIn/icons8-linkedin-circled-240.png";
import twitter from "../../twitter/icons8-twitter-circled-240.png";
import snapchat from "../../snapchat/icons8-snapchat-circled-logo-240.png";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__topContainer">
        <section className="footer__topContainerMoviesSection">
          <h3>Movies</h3>
          <ul>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Top-rated</a>
            </li>
            <li>
              <a href="">Upcoming</a>
            </li>
          </ul>
        </section>
        <section className="footer__topContainerTvShowsSection">
          <h3>T.V Shows</h3>
          <ul>
            <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Top-rated</a>
            </li>
            <li>
              <a href="">Upcoming</a>
            </li>
          </ul>
        </section>
        <section className="footer__topContainerSocialsSection">
          <h3>Social presence</h3>
          <div className="socials__links">
            <a href="/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="/">
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/">
              <img src={discord} alt="discord" />
            </a>
            <a href="/">
              <img src={snapchat} alt="snapchat" />
            </a>
          </div>
        </section>
      </section>
      <section className="footer__bottomContainer">
        <p>
          This website is made by{" "}
          <a
            href="https://twitter.com/krishna_0999"
            target="_blank"
            rel="noreferrer"
          >
            Krishna Muraree
          </a>{" "}
        </p>
      </section>
    </div>
  );
}

export default Footer;
