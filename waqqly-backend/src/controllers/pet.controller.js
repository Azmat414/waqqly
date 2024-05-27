const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Controller function for registering a pet
exports.registerPet = async (req, res) => {
  const { name, age, breed, ownerName, ownerContact } = req.body;
  const petId = uuidv4();
  const params = {
    TableName: 'Pets',
    Item: { petId, name, age, breed, ownerName, ownerContact }
  };
  try {
    await dynamoDb.put(params).promise();
    res.status(201).json({ message: 'Pet registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering pet' });
  }
};
