import React, { useState, useEffect } from 'react';
import { Home } from "./Home.jsx";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'; // استيراد Navigate
import { MovieDetailsPage } from './MovieDetailsPage.jsx';

function App() {
  const [movies, setMovies] = useState([]);

  // جلب البيانات من الـ API
  useEffect(() => {
    fetch('http://localhost:8080/allMovies')
      .then(response => response.json())
      .then(data => setMovies(data.movies)) // تأكد من استخدام الـ key الصحيح للـ movies
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* مسار لصفحة الـ Home عند الذهاب إلى / أو /Filmac */}
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Filmac" element={<Navigate to="/" />} /> {/* إعادة توجيه إلى الصفحة الرئيسية */}
          {/* مسار لصفحة تفاصيل الفيلم */}
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
