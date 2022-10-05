
// create mongodb schema

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        
    },
    age : {
        type : Number, 
    },
    cell : {
        type : Number,
        required : true,
    },
    foods : {
      type : [mongoose.Schema.Types.ObjectId],
      ref : "Food"
    },
    location : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        enum : ["Male","Female"],
        required : true,
    },
    isAdmin : {
        type : Boolean,
        default : false
    }


}, {
    timestamps : true
})

// static methoods manually making

userSchema.statics.findByGender = function(name){
  return this.where({ gender : name});
}

// static manual methoods
userSchema.statics.findFood = function(id){
    return this.findById(id).select('foods').populate('foods');
}

// query methood
userSchema.query.getFoods = function(){
    return this.select(['foods','name']).populate('foods');
}


// make custom methood

userSchema.methods.myFood = function(){
    return ` Hi ${this.name} you are ${this.age} years old`;
}


// custom property

userSchema.virtual('welcomeMsg').get(function(){
    return ` Hi ${this.name} you are welcome our site and your location is ${this.location}`;
})


// custom middleware


// before sending data
userSchema.pre('save', function(next){

    this.isAdmin = true;
    next()

})

// after sending data

userSchema.post('save', function(doc, next){

    doc.location = 'Dhaka';
    next()

})











// export mongo schema

module.exports = mongoose.model("User", userSchema);

