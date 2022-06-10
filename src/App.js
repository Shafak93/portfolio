import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ContactMe from './Components/ContactMe/ContactMe';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
