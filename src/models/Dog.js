var mongoose = require('mongoose');

var DogModel;

var DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    
    breed: {
        type: string,
		trim: true,
        required: true
    },
	
	age: {
		type: Number,
        min: 0,
        required: true		
	},
    
    createdData: {
        type: Date,
        default: Date.now
    }

});

DogSchema.methods.sayName = function() {
    console.log(this.name);
};

DogSchema.statics.findByName = function(name, callback) {

    var search = {
        name: name,
		breed: breed,
		age: age
    };

    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

//export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;