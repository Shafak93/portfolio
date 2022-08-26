import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import ContactMe from './Components/ContactMe/ContactMe';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import ProjectDetails from './Components/Projects/ProjectDetails';
import Home from './Components/Home/Home';
import SkillBar from 'react-skillbars';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/banner' element={<Banner></Banner>}></Route>
         <Route path='/about' element={<AboutMe></AboutMe>}></Route>
         <Route path='/projects' element={<Projects></Projects>}></Route>
         <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
         <Route path='/contact' element={<ContactMe></ContactMe>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
