import './App.css';
import NavigationBar from './components/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import Projects from './components/Projects.js'
import Technology from './components/Technology.js'
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div style ={{backgroundColor: '#4783a3'}}>
      <NavigationBar/>
      <Banner/>
      <AboutMe/>
      <Projects/>
      <Technology/>
      
    </div>
    
  );
}

export default App;
