import './App.css';
import NavigationBar from './components/NavigationBar.js'
import Banner from './components/Banner.js'
import AboutMe from './components/AboutMe.js'
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div style ={{backgroundColor: '#4783a3'}}>
      <NavigationBar/>
      <Banner/>
      <AboutMe/>

      Project and experiences (link resume)
      technology
      
    </div>
    
  );
}

export default App;
