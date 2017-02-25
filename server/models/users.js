/*<!
Filename:users.ejs
Authorname:Vedank Patel
websitename:https://comp308w2017midter300860092.herokuapp.com/
File Description:user schema-->*/
let mongoose = require('mongoose');

// create a model class
let usersSchema = mongoose.Schema({
    username: String,
    email: String,
    displayName: String,
    created: String,
    updated: String
},
{
  collection: "users"
});

module.exports = mongoose.model('users', usersSchema);