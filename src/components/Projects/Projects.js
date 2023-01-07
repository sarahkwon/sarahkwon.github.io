import React, { Component } from 'react';

import { SectionTitle } from '../../GlobalComponents/index.js';
import { Img, Box } from './ProjectsStyles.js';

import bearMS from '../../assets/bearMS.PNG';
import campusMap from '../../assets/campusMapDemo.png';
import potionShopkeeper from '../../assets/Capture2.PNG';
import './projects.css';

const data = [
  {
    name: "Potion Shopkeeper",
    desc: "A cute business simulation game where you run a small potion shop! Discover and craft new potion recipes, and figure out a good price range for it by observing customer reactions.",
    image:  potionShopkeeper,
    work: "Inventory system for multiple types of items, crafting, drag and drop functionality, NavMesh agents that navigate on their own accord, Customers that display a reaction depending on item price, environment",
    visit: "A link will be available soon!",
    id: 2
  },
  {
    name: "Bear (MMORPG)",
    desc: "An online social hub for Web3 users where players within the community can interact through in-game events and guilds.",
    image:  bearMS,
    work: "Develop, debug, and implement in-game features in Java/Javascript :: Navigate through a large-scale project :: User and Server data management in a MySQL database ",
    visit: "",
    id: 1
  },
  {
    name: "Campus Maps", 
    desc: "Campus Maps is a crowd-sourced platform that offers detailed locations of individual classrooms of university campuses. Users can share written directions and tips to individual classrooms via comments as well as upload images to guide other users to their destinations.",
    work: "Created the front-end for the photos page as well as the comment section",
    image: campusMap ,
    visit: "Visit here: https://campusmaps.herokuapp.com/",
    id: 0
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
                  <Box>
                    <div key={index}>
                      <h2>{card.name}</h2>
                      <Img src={card.image} alt="uh" />
                      <h4>{card.desc}</h4>
                      <p>{card.work}</p>
                      <p>{card.visit}</p>
                    </div>
                  </Box>
                ))}
              </div>
            </div>
          </div>
        );
      }
}

export default Projects;