import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

import mailRu  from '../../assets/img/Mail_ru.svg';
import phone from '../../assets/img/phone.svg';

class Footer extends Component {
    render() {
        return (
          <div className="footer-section">
            <div class="row">
              <h5>Contact Information:</h5>
            </div>
            <div class="row">
              <div className="social-icons">
                <a href="mailto:sarahkwon0415@gmail.com"><img src={mailRu} alt="" /></a>
                <a href="tel:(626) 404-4551"><img src={phone} alt="" /></a>
              </div>
            </div>
            <div class="row">
              <div className="contact-info">
                <p><a href="mailto:sarahkwon0415@gmail.com">sarahkwon0415@gmail.com</a> | <a href="tel:(626) 404-4551">(626) 404-4551</a></p>
              </div>
            </div>
            
          </div>
        );
      }
}

export default Footer;



/* 
<li>
  Email: <a href="mailto:sarahkwon0415@gmail.com">sarahkwon0415@gmail.com</a>
</li>
<li>
  Tel: <a href="tel:(626) 404-4551">(626) 404-4551</a>
</li>
*/