
// use test controller

const Food = require('../Models/Food')
const User = require('../Models/User')

const userController = async () => {

   try {

    const user = await User.findById
    ('633c2c3c078efbb23f44214b')

    await user.save();


    // to find user try methood

    // const users = await User.find().deleteMany({})


    console.log(user)
    
   } catch (error) {
    console.log(error.message)
   }

}


const foodController = async () => {


  try {

    const food = await Food.find()
   
    console.log(food)
    
  } catch (error) {
    console.log(error.message)
  }

}




// export usercontroller

module.exports = {
    userController,
    foodController
}