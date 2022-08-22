import React, { Component } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, Link, NavLink, Li, Img1, SocialIcons} from './HeaderStyles';
import kino1 from './kinoSprite1.png';

class Header extends Component {
    render() {
        return (
          <Container>
            <Div1>
              <Link href="/">
                  <Img1 src={kino1} alt="mushroom"></Img1>
              </Link>
            </Div1>
            <Div2>
              <Li>
                <Link href="#projects">
                  <NavLink>Projects</NavLink>
                </Link>
              </Li>
              <Li>
                <Link href="#skills">
                  <NavLink>Skills</NavLink>
                </Link>
              </Li>
              <Li>
                <Link href="#resume">
                  <NavLink>Resume</NavLink>
                </Link>
              </Li>
            </Div2>
            <Div3>
              <SocialIcons href="https://github.com/sarahkwon">
                <AiFillGithub size="2.25rem"/>
              </SocialIcons>
              <SocialIcons href="https://www.linkedin.com/in/sarah-kwon-651469186/">
                <AiFillLinkedin size="2.25rem"/>
              </SocialIcons>
              <SocialIcons href="https://twitter.com/_soonjee">
                <AiFillTwitterCircle size="2.25rem"/>
              </SocialIcons>
            </Div3>
          </Container>
        );
      }
}

export default Header;