import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";

import AppNavbar from './components/AppNavbar';
import ChatBody from './components/ChatBody';
import Login from "./components/Login";

import './App.css';

function App() {
  return(
    <Router>
      <AppNavbar />
      <Container fluid>
        <Routes>
          <Route exact path ="/" element={<ChatBody />} />
          <Route exact path ="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  )
}
export default App;
