
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema= new Schema({
       
       titre :{type : String, required :true},
       slug: { type: String, unique: true, required: true }, 
       content: { type: String, required: true}
},{ timestamps: true });
const Posts = mongoose.model('Post', PostSchema);
module.exports = Posts;
