const express = require("express");
const mongoDB = require("./Infrastructure/DataBase/MongoDB");
const Domain = require("./Domain");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const Movies = require("./Domain/Movies/Models/MoviesModel");
// mongodb+srv://a01152379344:1241999a_H@cluster0.mpg9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://another-domain.com']
// }));
app.use(express.json());

const PORT = 8080;

app.use((req, res, next) => {
  console.log("MiddelWare 1");

  console.log("Method:", req.method, "URL:", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("MiddelWare 2");
  next();
});

app.use(morgan("dev"));

mongoDB.connect();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/movies", Domain.routes.MoviesRouter);

app.get('/allMovies', (req, res) => {
  Movies.find().then(result => res.send(result)).catch(err => console.log(err))
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


