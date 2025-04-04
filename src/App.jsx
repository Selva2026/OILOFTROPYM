import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Intro from "./Components/Intro";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";


function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <div className="flex">
     <Home/>
   
     <Routes>
     <Route path="/" element={<About/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/intro" element={<Intro/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>  
     </div>
     </BrowserRouter>
    </>
  )
}

export default App
