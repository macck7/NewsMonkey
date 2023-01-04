import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Search from './components/Search';
import About from './components/About';

const App = () => {

  const pageSize = 6
  const country = "in"
  const apikey = process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(0)


  return (
    <>
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      
        <Routes>
          <Route exact path="/search" element={<Search setProgress={setProgress} pageSize={pageSize}  key="search"  />} />
          <Route path="/" element={<News setProgress={setProgress} api={apikey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route path="/technology" element={<News setProgress={setProgress} api={apikey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
          <Route path="/science" element={<News setProgress={setProgress} api={apikey} key="science" pageSize={pageSize} country={country} category="science" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} api={apikey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} api={apikey} key="health" pageSize={pageSize} country={country} category="health" />} />
          <Route path="/sports" element={<News setProgress={setProgress} api={apikey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
          <Route path="/business" element={<News setProgress={setProgress} api={apikey} key="business" pageSize={pageSize} country={country} category="business" />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  )


}

export default App;
