exports.handler = async (event, context) => {
    console.log({ event, context });

    return {
        statusCode: 400,
        body: 'Hello, sorry about that',
    };
};
