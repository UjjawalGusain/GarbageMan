import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/CommonPages/Homepage';
import Settings from './pages/CommonPages/Settings';
import IssuePage from './pages/AdminPages/IssuePage';
import Signup from './pages/CommonPages/Signup';
import Login from './pages/CommonPages/Login';
function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/issues" element={<IssuePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
