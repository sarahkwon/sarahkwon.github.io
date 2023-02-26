import './App.css';
import NavigationBar from './components/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Technology from './components/Technology.js'
import { BrowserRouter as Router } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <body className="app">
      <Router>
        <NavigationBar/>
        <Banner/>
        <div className="app-wrapper">
          <AboutMe/>
          <Projects/>
          <Technology/>
        </div>
      </Router>
      
     </body>
    
  );
}

export default App;
