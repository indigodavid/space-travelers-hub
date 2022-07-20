import React from 'react';
import github from '../images/github.png';
import '../styles/Footer.scss';

function Footer() {
  return (
    <section className="footer">
      Copyright ©️ 2022
      <a href="https://github.com/indigodavid">David Vera Castillo</a>
      <a href="https://github.com/masangana">Alex Masangana</a>
      <img className="footerImg" src={github} alt="github-logo" />
    </section>
  );
}

export default Footer;