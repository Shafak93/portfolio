import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
