import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Welcome from "./pages/Welcome";
import NavBar from "./components/NavBar";
import PTable from "./pages/PTable";
import {getElements} from "./ElementsService"


const App = () => {

  const [allElements, setAllElements] = useState([]);

  useEffect(() => {
    getElements()
      .then(elements => setAllElements(elements));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/periodictable" element ={<PTable allElements={allElements} />} />
      </Routes>
    </Router>
  )
}

export default App;
