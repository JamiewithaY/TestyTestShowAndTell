const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var ProjectSchema = new Schema ({
	title: {
	type: String,
		
	},
	description: {
		type: String
	},
	link1: {
		type: String
	},
	link2: {
		type: String
	},
	tag1: {
		type: String
	},
	tag2: {
		type: String
	},
	tag3: {
		type: String
	},
	tag4: {
		type: String
	},
	tag5: {
		type: String
	}, 
	

})

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;