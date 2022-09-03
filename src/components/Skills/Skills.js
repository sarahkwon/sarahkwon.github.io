import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import { SectionTitle} from '../../GlobalComponents/index.js';
import 'bootstrap/dist/css/bootstrap.css';
import './Skills.css';

const data = [
  { title: "Languages: ", text: "C++, Java, SQL, Python, Javascript, HTML, CSS"},
  { title: "Frontend: ", text: "ReactJS, Bootstrap, Styled Components, Next.js, Yarn"},
  { title: "Backend: ", text: "MySQL, MongoDB, NodeJS"},
  { title: "Other: ", text: "Git, Heroku"}
];

class Skills extends Component {
    render() {
        return (
          <div id="skills" className="skills-section">
            <SectionTitle>Skills</SectionTitle>
              <Row>
              {data.map((card, index) => (
                <div class="col-md">
                  <div className="card-section">
                    <div className="skill-card">
                        <div key={index}>
                          <div className="card-title">{card.title}</div>
                          <div className="card-text">{card.text}</div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
              </Row>
          </div>
        );
      }
}

export default Skills;

/*
<div>
              {data.map((card, index) => (
                <div class="col-sm">
                  <div key={index}>
                    <div>{card.title}</div>
                    <div>{card.text}</div>
                  </div>
                </div>
              ))}
            </div>
*/