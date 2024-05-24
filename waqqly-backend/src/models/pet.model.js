const { v4: uuidv4 } = require('uuid');
const dynamoDB = require('../config/db.config');

const Pet = {
  create: async (pet) => {
    const params = {
      TableName: 'Pets', // Ensure this matches your DynamoDB table name
      Item: {
        petId: uuidv4(), // Ensure this matches your partition key
        ...pet,
      },
    };

    console.log('Creating pet with params:', params); // Log the params

    return dynamoDB.put(params).promise();
  },

  // Add more methods as needed (get, update, delete)
};

module.exports = Pet;