import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Contact from './components/contact/Contact'
import './app.scss'
import {useState} from 'react'
import Menu from './components/menu/menu'


function App() {
  const [menuOpen,setMenuOpen] = useState(false);

  const menuHandler = ()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} menuHandler={menuHandler}/>
      <Menu menuOpen={menuOpen} menuHandler={menuHandler} />
     
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />

    </div>
      
    </div>
  );
}

export default App;
