const mongoose = require('mongoose');

const { DB_URL } = require('./env');

let db;

const reviewsSchema = new mongoose.Schema({
    created: Date,
    text: String,
    rating: Number,
});

exports.handler = async (event, context) => {
    if (!db) {
        db = await mongoose.connect(DB_URL);
        db.model('reviews', reviewsSchema);
    }

    const reviewsModel = db.model('reviews');

    const reviews = await reviewsModel.find().exec();

    return {
        statusCode: 200,
        body: JSON.stringify(reviews),
    };
};
