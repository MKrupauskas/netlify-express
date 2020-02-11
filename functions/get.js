const mongoose = require('mongoose');

const url = 'mongodb://mykolas:mykolas1@ds123136.mlab.com:23136/foodie';

// const reviews = db.model(
//     'reviews',
//     new mongoose.Schema({
//         created: {
//             type: Date,
//             default: Date.now,
//         },
//         author: {
//             type: mongoose.Schema.ObjectId,
//             ref: 'User',
//             required: 'You must supply an author',
//         },
//         store: {
//             type: mongoose.Schema.ObjectId,
//             ref: 'Store',
//             required: 'You must supply a store',
//         },
//         text: {
//             type: String,
//             required: 'Your review must have text',
//         },
//         rating: {
//             type: Number,
//             min: 1,
//             max: 5,
//         },
//     }),
// );

exports.handler = async (event, context) => {
    const db = await mongoose.connect(url);

    const reviewsModel = db.model('reviews');

    const reviews = reviewsModel.find();

    return {
        statusCode: 200,
        body: JSON.stringify(reviews),
    };
};
