import react from "react";
import {BrowserRouter, Routes, Route , Navigate} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFOund from "./pages/NotFOund"
import ProtectedRoute from "./componenets/ProtectedRoute"
import Search from "./pages/Search"


import About from "./pages/About";





function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}
function RegisterAndLogout(){
    localStorage.clear()// no old access tokens 
    return <Register />
}

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
          <ProtectedRoute>
            <Home/>

            
          </ProtectedRoute>
            }
        />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={ <RegisterAndLogout/>   } />
        
        <Route path="*"  element={<NotFOund/>}/>


      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
