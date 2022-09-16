import React, { Component } from 'react';

import { SectionTitle } from '../../GlobalComponents/index.js';
import { Img } from './ProjectsStyles.js';

import bearMS from '../../assets/bearMS.PNG';
import campusMap from '../../assets/campusMapDemo.png';
import './projects.css';

const data = [
  {
    name: "Campus Maps", 
    desc: "Campus Maps is a crowd-sourced platform that offers detailed locations of individual classrooms of university campuses. Users can share written directions and tips to individual classrooms via comments as well as upload images to guide other users to their destinations.",
    work: "Created the front-end for the photos page as well as the comment section",
    image: campusMap ,
    visit: "Visit here: https://campusmaps.herokuapp.com/",
    id: 0
  },
  {
    name: "MapleStory Emulator",
    desc: "An online social hub for Web3 users where players within the community can interact through in-game events and guilds.",
    image:  bearMS,
    work: "Develop, debug, and implement in-game features in Java/Javascript :: Navigate through a large-scale project :: User and Server data management in a MySQL database ",
    visit: "",
    id: 1
  }
];

class Projects extends Component {
    render() {
        return (
          <div className="projects-section">
            <div id="projects">
              <SectionTitle>Projects</SectionTitle>
              <div>
                {data.map((card, index) => (
                  <div key={index}>
                    <h2>{card.name}</h2>
                    <Img src={card.image} alt="uh" />
                    <h4>{card.desc}</h4>
                    <p>{card.work}</p>
                    <p>{card.visit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
}

export default Projects;