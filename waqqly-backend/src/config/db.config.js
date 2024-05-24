const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-2', // Ensure this matches the region of your DynamoDB tables
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB;