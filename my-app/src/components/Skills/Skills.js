import React, { Component } from 'react';

import { Box, Boxes, BoxTitle, BoxText } from './SkillsStyles';

import { SectionTitle} from '../../GlobalComponents/index.js';

const data = [
  { title: "Languages: ", text: "C++, Java, SQL, Python, Javascript, HTML, CSS"},
  { title: "Tools: ", text: "ReactJS, Node.js, Heroku, Yarn, Git"},
  { title: "Other! ", text: "Art, Sewing, Animal Crossing"}
];

class Skills extends Component {
    render() {
        return (
          <div id="skills">
            <SectionTitle>Skills</SectionTitle>
            <Boxes>
              {data.map((card, index) => (
                <Box key={index}>
                  <BoxTitle>{card.title}</BoxTitle>
                  <BoxText>{card.text}</BoxText>
                </Box>
              ))}
            </Boxes>
          </div>
        );
      }
}

export default Skills;