import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import { SectionTitle } from '../../GlobalComponents/index.js';
import { AccordionButton } from 'react-bootstrap';

import ResumePdf from '../../assets/Sarah_Kwon_Resume.pdf'

export  const About = () => {

  return (
    <div className="about-section">
        <SectionTitle id="about">About Me!</SectionTitle>
        <div className="resume-email">
          <p>
            <a href={ResumePdf}>Resume</a> | <a href="mailto:sarahkwon0415@gmail.com">sarahkwon0415@gmail.com</a> | <a href="tel:(626) 404-4551">(626) 404-4551</a>
          </p>
          
        </div>
        <p>I already mentioned it in the banner above, but hi! My name is Sarah Kwon and I'm currently a student studying Computer Science at UCSB. Currently, I'm focusing on learning React.js, and I have also recently completed developing my first game!</p>
        <p>In my free time, I like to play games, watch shows/movies, build mini lego sets, and draw (fun fact: the artwork for my banner was drawn by me!). You can view more of my art on my Twitter profile! I also enjoy cooking, especially when I have a huge craving for a specific dish.</p>
    </div>
  );
}

export default About;