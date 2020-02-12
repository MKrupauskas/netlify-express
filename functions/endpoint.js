exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: "Hi, let's go Serverless!! 🚀🚀🚀🌞",
    };
    callback(null, response);
};
