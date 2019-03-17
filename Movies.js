var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);
//Movies------------------------------------------
//{
//  "title": Title
//  "year": Year released
//  "genre": Genre  (Action,  Adventure,  Comedy,  Drama,  Fantasy,  Horror,  Mystery,  Thriller, Western)
//  "actors": Array of three actors that were in the film(actorName, charName)
//}
var MovieSchema = new Schema({
    title: String,
    year: Number,
    genre: ['Action',  'Adventure',  'Comedy',  'Drama',  'Fantasy',  'Horror',  'Mystery',  'Thriller', 'Western'],
    actors: []
});

//save movie
MovieSchema.pre('save', function(next) {
    var newMovie = this;
    // generate the hash
    newMovie.title = title;
    newMovie.year = year;
    newMovie.genre = genre;
    newMovie.actors = actors;
    if (err) return next(err);
    next();
});

// return the model
module.exports = mongoose.model('Movies', MovieSchema);