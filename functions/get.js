const mongoose = require('mongoose');

const { DB_URL } = require('./env');

const reviewsSchema = new mongoose.Schema({
    created: Date,
    text: String,
    rating: Number,
});

exports.handler = async (event, context) => {
    const db = await mongoose.connect(DB_URL);

    let reviewsModel;

    try {
        reviewsModel = db.model('reviews');
    } catch {
        reviewsModel = db.model('reviews', reviewsSchema);
    }

    const reviews = await reviewsModel.find().exec();

    return {
        statusCode: 200,
        body: JSON.stringify(reviews),
    };
};
