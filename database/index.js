const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/miercoles')
  .then(() => {
    console.log("Conectado")
    console.log("////////////////////////////")
  }).catch((error) => {
    console.log("ERROR: ", error)
  })


module.exports = {
  MongoDB: mongoose,
}