const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Controller function for registering a walker
exports.registerWalker = async (req, res) => {
  const { name, age, experience, contact, location } = req.body;
  const walkerId = uuidv4();
  const params = {
    TableName: 'Walkers',
    Item: { walkerId, name, age, experience, contact, location }
  };
  try {
    await dynamoDb.put(params).promise();
    res.status(201).json({ message: 'Walker registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering walker' });
  }
};
