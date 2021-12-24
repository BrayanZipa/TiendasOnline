import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Button } from 'react-bootstrap'

//Components
import NavBar from "./components/NavBar";

//Import screens
import Home from "./screens/Home"
import Landing from "./screens/Landing"
import NotFound from "./screens/NotFound"
import Profile from "./screens/Profile"
import Register from "./screens/Register"
import SearchResults from "./screens/SearchResults"

/* import Button from "./components/Button"; */
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <h1 style={{color: "blue"}}>Estudiantes MinTic</h1>
      <h1 className="titulo">Grupo 1355</h1>
      <Button variant="outline-success">Success</Button>

      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Landing/>}/>
           <Route path="/home" element={<Home/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/searchresults" element={<SearchResults/>}/>
           <Route path="*" element={<NotFound/>}/>
         </Routes>
      </BrowserRouter>

    </React.Fragment>
  )
}

export default App;
