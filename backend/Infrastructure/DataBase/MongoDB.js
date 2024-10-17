const mongoose = require("mongoose");

// mongodb+srv://user:1241999a_H@cluster5.murj6.mongodb.net/
// mongodb+srv://user:1241999a_H@cluster5.murj6.mongodb.net/
function connect() {
  mongoose
    .connect(
      "mongodb+srv://user:DLAoQVAraugvBtgq@cluster5.murj6.mongodb.net/MovieWebsite"
    )
    .then(() => {
      console.log("connected Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  connect,
};
