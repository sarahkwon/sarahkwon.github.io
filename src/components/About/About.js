import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import { SectionTitle } from '../../GlobalComponents/index.js';
import { AccordionButton } from 'react-bootstrap';

export  const About = () => {

  return (
    <div>
        <SectionTitle id="about">About Me!</SectionTitle>
        <p>I already mentioned it in the banner above, but hi! My name is Sarah Kwon and I'm currently a student studying Computer Science at UCSB. I have been working on several projects that have been super interesting as well as a good learning experience. In my free time, I like to play games, watch anime/Netflix, and draw (fun fact: the artwork for my banner was drawn by me!)</p>
    </div>
  );
}

export default About;