const mongoose = require('mongoose');

const { DB_URL } = require('./env');

exports.handler = async (event, context) => {
    const db = await mongoose.connect(DB_URL);

    db.model(
        'reviews',
        new mongoose.Schema({
            created: Date,
            text: String,
            rating: Number,
        }),
    );

    const reviewsModel = db.model('reviews');

    const reviews = reviewsModel.find();

    console.log(reviews);

    return {
        statusCode: 200,
        body: JSON.stringify(reviews),
    };
};
