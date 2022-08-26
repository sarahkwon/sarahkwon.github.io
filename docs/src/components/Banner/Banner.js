import React, { Component } from 'react';

import {Container, BgText} from './BannerStyles.js';
import Zelda from '../../zelda.png';

const backgroundStyle={
  backgroundImage: `url(${Zelda})`,
  height: `75vh`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  width: `100%`,
  backgroundPosition: `center`,
  filter: `blur(2px)`,
  webkitFilter: `blur(2px)`,
  boxSize: `border-box`,
}

class Banner extends Component {
    render() {
        return (
          <div style={{overflow: "hidden"}}>
            <Container style={backgroundStyle}></Container>
            <BgText>
            <h1 style={{fontSize: "50px"}}>Hi! I'm Sarah Kwon</h1>
            <p>I'm a CS student at UCSB</p>
            </BgText>
          </div>
          
        );
    }
}

export default Banner;