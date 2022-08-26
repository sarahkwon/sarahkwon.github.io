import React, { Component } from 'react';

import { SectionTitle } from '../../GlobalComponents/index.js';

import { Link, NavLink } from './ResumeStyles';
// import ResumePdf from './resume.pdf';

class Resume extends Component {
    render() {
        return (
          <div id="resume">
            <SectionTitle>Resume</SectionTitle>
            Here is my <Link>resume</Link>
          </div>
        );
      }
}

export default Resume