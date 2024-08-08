import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import BookInfo from './pages/BookInfo';

import "./App.css"
function App() {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/about" element={<About/>}></Route> 
          <Route path="/bookinfo/:id" element={<BookInfo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
