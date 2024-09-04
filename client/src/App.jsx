import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <>
      <h1>Collaborative Journal</h1>
    </>
  )
}

export default App
