import React, { useState, useEffect } from "react";
import { Home } from "./Home.jsx";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"; // استيراد Navigate
import { MovieDetailsPage } from "./MovieDetailsPage.jsx";
import ActionPage from "./Pages/ActionPage.jsx";
import { NavBar } from "./NavBar.jsx";
import { Footer } from "./Footer.jsx";
import { ConnectSidebar } from "./sideBarConnect.jsx";
import { SidebarRight } from "./SidebarRight.jsx";
import DramaPage from "./Pages/DramaPage.jsx";
import AnimePage from "./Pages/AnimePage.jsx";
import ComdeyPage from "./Pages/ComdeyPage.jsx";
import RomancePage from "./Pages/RomancePage";
import AdventurePage from "./Pages/AdventurePage.jsx";
import ThrillerPage from "./Pages/ThrillerPage.jsx";

function App() {
  const [movies, setMovies] = useState([]);

  // جلب البيانات من الـ API
  useEffect(() => {
    fetch("http://localhost:8080/allMovies")
      .then((response) => response.json())
      .then((data) => setMovies(data.movies)) // تأكد من استخدام الـ key الصحيح للـ movies
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <div
            className="row  mx-2 g-1 colm-reverse g-lg-5"
            style={{ marginTop: "4.7rem" }}
          >
            <div className="col-lg-3 mt-sm-5">
              <ConnectSidebar />
              <div className="d-block d-lg-none">
                {" "}
                <Footer />
              </div>
            </div>
            <div className=" col-lg-7  m-lg-auto ">
              <Routes>
                {/* مسار لصفحة الـ Home عند الذهاب إلى / أو /Filmac */}
                <Route path="/" element={<Home movies={movies} />} />
                <Route path="/Filmac" element={<Navigate to="/" />} />{" "}
                {/* إعادة توجيه إلى الصفحة الرئيسية */}
                {/* مسار لصفحة تفاصيل الفيلم */}
                <Route path="/action" element={<ActionPage />} />
                <Route path="/drama" element={<DramaPage />} />
                <Route path="/anime" element={<AnimePage />} />
                <Route path="/comdey" element={<ComdeyPage />} />
                <Route path="/romance" element={<RomancePage />} />
                <Route path="/adventure" element={<AdventurePage />} />
                <Route path="/thriller" element={<ThrillerPage />} />
                <Route path="/movies/:id" element={<MovieDetailsPage />} />
              </Routes>
              <div className="d-none d-lg-block">
                <Footer />
              </div>
            </div>
            <div className="col-lg-2">
              <SidebarRight />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
