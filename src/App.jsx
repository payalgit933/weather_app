// import { useState } from "react";
// import axios from "axios";
// import WeatherInfo from "./components/WeatherInfo";

// function App() {
//   const [data, setData] = useState(null);
//   const [city, setCity] = useState("Delhi");
//   const getData = async () => {
//     try {
//       const res = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=39345495dd49fafb321bbaae130a78e7`
//       );
//       setData(res.data);
//     }
//     catch (error) {
//       console.error("Error fetching data:",error);
//     }
//   };

//   return (
//     <>
      
//       <h1>Weather App</h1>
//       <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
//       <button onClick={getData}> Get Weather </button>

//       <WeatherInfo data={data} />
      
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages-weather/Home';
import About from './pages-weather/About';
import Services from './pages-weather/Services';
import Contact from './pages-weather/Contact';
import NotFoundPage from './pages-weather/NotFoundPage';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Delhi");
  
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=Your-API-Key`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
