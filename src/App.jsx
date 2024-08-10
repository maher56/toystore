import Catalog from "./Catalog";
import MainPage from "./MainPage";
import Nav from './Nav';
import Header from "./Header";
import Overlay from "./Overlay";
import Subscribe from './Subscribe'
import SubFooter from './SubFooter'
import Footer from './Footer'
import About from "./About";
import Contact from "./Contact";
import ToTop from "./ToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./AddCard";
function App() {
  return(<>
  {/* <AddCard /> */}
    <Overlay/>
    <Header/>
    <Nav/>
    <ToTop/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/index.html" element={<MainPage/>}/>
          <Route path="/Catalog.html" element={<Catalog/>} />
          <Route path="/About.html" element={<About/>} />
          <Route path="/contact.html" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    <Subscribe/>
    <SubFooter/>
    <Footer/>
  </>)
}

export default App
