import navIcon1 from '../img/nav-icon1.svg'
import navIcon2 from '../img/nav-icon2.svg'
import navIcon3 from '../img/nav-icon3.svg'

import '../styles/Socials.css'

const Socials = () => {

  return (
    <div className="socials_social-icons">
      <a href="https://www.linkedin.com/in/sarah-kwon-651469186/"><img src={navIcon1} alt="LinkedIn" /></a>
      <a href="https://github.com/sarahkwon"><img src={navIcon2} alt="GitHub" /></a>
      <a href="https://twitter.com/_soonjee"><img src={navIcon3} alt="Twitter" /></a>
    </div>
  )
}

export default Socials