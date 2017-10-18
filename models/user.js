const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    first: {
        type: String,
        unique: true
    },
    last: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    Project: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;