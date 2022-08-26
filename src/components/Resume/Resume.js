import React, { Component } from 'react';

import { SectionTitle } from '../../GlobalComponents/index.js';

import { Link, NavLink } from './ResumeStyles';
import ResumePdf from '../../assets/Sarah_Kwon_Resume.pdf'

class Resume extends Component {
    render() {
        return (
          <div id="resume">
            <SectionTitle>Resume</SectionTitle>
            Here is my <Link><NavLink href={ResumePdf}>resume</NavLink></Link>
          </div>
        );
      }
}

export default Resume;