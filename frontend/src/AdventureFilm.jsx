import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom

export function AdventureFilm() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/allMovies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  // تصفية الأفلام الدرامية
  const AdventureMovies = movies.filter(movie => movie.genres.includes("Adventure"));

  return (
    <div className="container-fluid mt-4 box-shadoww rounded-1" style={{backgroundColor: "#fff" }}> {/* تعيين خلفية بيضاء */}
      <h6 className="text-start fw-bold mb-0" style={{padding:"12px 0 12px 4px",color:"rgb(76, 15, 189)"}}>Adventure Movies</h6> {/* عنوان القسم */}
      <div className="row"> {/* شبكة الأفلام */}
        {AdventureMovies.slice(0,4).map((movie) => (
          <div className="col-6 col-sm-4 col-lg-3" key={movie._id}> {/* كل عمود يحتوي على بوستر فيلم */}
         <Link to={`/movies/${movie._id}`} style={{ textDecoration: 'none' }}> 
            <div className="card mb-4" style={{ boxSizing: "border-box", borderRadius: "0px" }}>
              <img src={movie["poster_photo"]} className="card-img-top" alt={movie.title} style={{ width: "100%", height: "200px" }} />
              <div className="card-body p-0 pt-2">
                <h5 className="card-title" style={{ fontSize: "13px", color: "rgb(76, 15, 189)" }}>{movie.title}</h5>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
