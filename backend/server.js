const express = require("express");
const mongoDB = require("./Infrastructure/DataBase/MongoDB");
const Domain = require("./Domain");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://another-domain.com']
}));
app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:3000' // السماح بالطلبات من هذا الأصل فقط
// }));

const PORT = 8080;


app.use(morgan("dev"));

mongoDB.connect();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/movies", Domain.routes.MoviesRouter);


// General error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).send('Sorry, page not found!');
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


