const AWS = require("aws-sdk");

const getTasks = async () => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb
    .scan({
      TableName: "TaskTable",
    })
    .promise();

  const tasks = result.Items;

  return {
    status: 200,
    body: { tasks },
  };
};

module.exports = {
  getTasks,
};
