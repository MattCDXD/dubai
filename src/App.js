import Navbar from "./navbar"
import ContactUs from "./pages/contactus"
import Home from "./pages/Home"
import Landscape from "./pages/landscape"
import Faq from "./pages/faq"
import Projects from "./pages/projects"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App