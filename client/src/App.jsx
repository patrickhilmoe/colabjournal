import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { StoryPage } from  "./components/StoryPage.jsx";
import { Home } from "./components/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [array, setArray] = useState([]);

  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:8080/api");
  //   setArray(response.data);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, [])

  return (
    <>
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home/>}
        />
        <Route
          path="/chapters"
          element={<StoryPage/>}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
