import React, { Component } from 'react';

import { Box, Boxes, BoxTitle, BoxText } from './SkillsStyles';

import { SectionTitle} from '../../GlobalComponents/index.js';

const data = [
  { title: "Languages: ", text: "C++, Java, SQL, Python, Javascript, HTML, CSS"},
  { title: "Tools: ", text: "ReactJS, Bootstrap, Heroku, Next.js, Yarn, Git"},
  { title: "Other! ", text: "Art, Sewing, Animal Crossing"}
];

class Skills extends Component {
    render() {
        return (
          <div id="skills">
            <SectionTitle>Skills</SectionTitle>
            <div>
              {data.map((card, index) => (
                <div key={index}>
                  <div>{card.title}</div>
                  <div>{card.text}</div>
                </div>
              ))}
            </div>
          </div>
        );
      }
}

export default Skills;