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
        <p>I already mentioned it in the banner above, but hi! My name is Sarah Kwon and I'm currently a student studying Computer Science at UCSB. I'm currently interested in Software Engineering, Game Development, and Web Development and I'm spending my time learning more about these fields through a few projects that I have started! One that I especially love working on is the online game (Bear) that I have been developing with a few others. You can read all about what I do in the project in my Projects section! We're hoping to open up a website for players sometime, so I hope that I can link it here soon.</p>
        <p>In my free time, I like to play games, watch anime/Netflix, and draw (fun fact: the artwork for my banner was drawn by me!). You can view more of my art on my Twitter profile!</p>
    </div>
  );
}

export default About;