import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from './Pages/Home';
import { Projects } from './Pages/Projects';
import { Skills } from "./Pages/Skills";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
