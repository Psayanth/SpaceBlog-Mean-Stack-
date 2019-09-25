const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbsay:dbsay123@cluster0-6lfs3.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
});
const Schema = mongoose.Schema;

var NewFeedBackSchema = new Schema({
    name: String,
    email: String,
    comments: String
});

var feedbackData = mongoose.model('feedback-data', NewFeedBackSchema);

module.exports = feedbackData;