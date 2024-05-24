const { v4: uuidv4 } = require('uuid');
const dynamoDB = require('../config/db.config');

const Walker = {
  create: async (walker) => {
    const params = {
      TableName: 'Walkers', // Ensure this matches your DynamoDB table name
      Item: {
        walkerId: uuidv4(), // Ensure this matches your partition key
        ...walker,
      },
    };

    console.log('Creating walker with params:', params); // Log the params

    return dynamoDB.put(params).promise();
  },

  // Add more methods as needed (get, update, delete)
};

module.exports = Walker;