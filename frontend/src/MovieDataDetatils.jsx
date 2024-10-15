import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import { VideoPlayer } from './VideoPlayer';
import { FaStar, FaEye, FaCalendarAlt, FaThumbsUp, FaFilm } from 'react-icons/fa'; // استيراد أيقونات من مكتبة Font Awesome

export function MovieDataDetails() {
  const { id } = useParams();  // استخدم useParams لاستخراج الـ id من الـ URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // جلب بيانات الفيلم باستخدام الـ id
    fetch(`http://localhost:8080/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  // تحقق مما إذا كانت البيانات تم جلبها
  if (!movie) {
    return <div style={{ color: "#ccc" }}>Loading movie details...</div>;
  }

  return (
    <div>
      <div className="movie-details rounded-1" style={{ background: "#e5e5e5" }}>
        <div>
          <div className='w-smm-100 d-lg-flex flex-lg-row d-flex flex-column-reverse justify-content-lg-between '>
            <div className='w-xll-50 w-smm-100'>
              <h5 className='mt-4' style={{ color: "rgb(76, 15, 189)" }}>({movie.title})</h5>
              <p className='text-start px-4 mt-4 d-flex align-items-center' style={{ color: "rgb(76, 15, 189)" }}>
                <FaStar className='me-2' /> <span style={{ fontWeight: "900" }}>Rating: {movie.rating}</span>
              </p>
              <p className='text-start px-4 d-flex align-items-center' style={{ color: "rgb(76, 15, 189)" }}>
                <FaEye className='me-2' /> Views: <span style={{ fontWeight: "900" }}>{movie.views}</span>
              </p>
              <p className='text-start px-4 d-flex align-items-center' style={{ color: "rgb(76, 15, 189)" }}>
                <FaCalendarAlt className='me-2' /> Release Date: <span style={{ fontWeight: "900" }}>{new Date(movie.release_date).toLocaleDateString()}</span>
              </p>
              <ul className='d-flex align-items-center px-4 list-unstyled ' style={{ gap: "8px", color: "rgb(76, 15, 189)" }}>
                Type: {movie.genres.map((tp, index) => <li key={index} style={{ fontWeight: "900" }}>{tp}</li>)}
              </ul>
              <p className='text-start px-4 d-flex align-items-center' style={{ color: "rgb(76, 15, 189)" }}>
                <FaThumbsUp className='me-2' /> Vote Count: <span style={{ fontWeight: "900" }}>{movie.vote_count}</span>
              </p>
              <p className='text-start px-4 d-flex align-items-center' style={{ color: "rgb(76, 15, 189)" }}>
                <FaFilm  /> <span style={{ fontWeight: "900", fontSize: "13px" }}><span className='fw-light fs-6'>Overview:</span> {movie.overview}</span>
              </p>
            </div>
            <div className='w-100 border-1'>
              <img src={movie.poster_photo} alt={movie.title} className='mx-auto rounded-1 w-smm-100 ' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <VideoPlayer videoUrl={movie["trailer"]} />
      </div>
      <div className='rounded-1 py-3 mt-3' style={{ background: "#e5e5e5", color: "rgb(76, 15, 189)" }}>
        <span>Click here to watch the full movie!: </span>
        <a href={movie["link"]}>
          <button type="button" className="btn btn-primary mt-sm-0 mt-3">Watch Now</button>
        </a>
      </div>
    </div>
  );
}
