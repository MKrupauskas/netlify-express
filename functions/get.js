const mongoose = require('mongoose');

const url = 'mongodb://mykolas:mykolas1@ds123136.mlab.com:23136/foodie';

exports.handler = async (event, context) => {
    const db = await mongoose.connect(url);

    db.model(
        'reviews',
        new mongoose.Schema({
            created: Date,
            author: mongoose.Schema.ObjectId,
            store: mongoose.Schema.ObjectId,
            text: String,
            rating: Number,
        }),
    );

    const reviewsModel = db.model('reviews');

    const reviews = reviewsModel.find();

    return {
        statusCode: 200,
        body: JSON.stringify(reviews),
    };
};
