import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Section7 from "./pages/home/Section7"
import Section2 from "./pages/home/Section2.jsx"
import Section3 from "./pages/home/Section3.jsx"
import Section5 from "./pages/home/Section5.jsx"
import Section6 from "./pages/home/Section6.jsx"

function App() {
  
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Section2/>}/>
        <Route path="/menu" element={<Section3/>}/>
        <Route path="/shop" element={<Section5/>}/>
        <Route path="/blog" element={<Section6/>}/>
        <Route path="/contact" element={<Section7/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
