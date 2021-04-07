import './styles/App.scss';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <MySkills/>
      <MyWork/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
