exports.handler = async (event) => {
  console.log("Changed pushed to lambda 2 from repo!!!");
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
