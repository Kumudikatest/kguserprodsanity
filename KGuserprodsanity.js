const AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await translate.translateText({
            SourceLanguageCode: "auto",
            TargetLanguageCode: "en",
            Text: "Hola"
        }).promise();
        console.log(data);
    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};