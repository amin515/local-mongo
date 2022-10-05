
const mongoose = require('mongoose');



// create a mongodb connection

const mongoDBconnection = async() => {

    try {
        
      const connect = mongoose.connect('mongodb://localhost:27017/mongo')
      console.log(`mongoDB connect successful`.bgYellow.black)

    } catch (error) {
        console.log(error.message)
    }


}

// export mongodb connection

module.exports = mongoDBconnection;