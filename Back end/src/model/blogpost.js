const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbsay:dbsay123@cluster0-6lfs3.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });


mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
});
const Schema = mongoose.Schema;

var NewBlogPostSchema = new Schema({
    title: String,
    body: String,
    imgurl: String,
    date: String,
    email: String,
    name: String
});

var BlogPost = mongoose.model('Blog-data', NewBlogPostSchema);

module.exports = BlogPost;