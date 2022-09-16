import React, { useState, useEffect } from 'react';

import './Banner.css';
import { Row, Col } from 'react-bootstrap';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "a CS Student", "a Programmer", "a Developer", "an Artist" ];
  const period = 1250;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
        <div class="background-image-container"><div class="background-image"></div></div>
        <Row classname="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner-contents">
              <span className="tagline">Welcome to my portfolio :D</span>
              <h1>Hi! I'm <span className="my-name">Sarah Kwon</span> and I'm <span className="text-rotate" dataPeriod="1000" data-rotate='[ "a CS Student", "a Programmer", "a Developer", "an Artist" ]'><span className="wrap">{text}</span></span></h1>
            </div>
          </Col>
        </Row>
    </section>
     
  );
}

export default Banner;