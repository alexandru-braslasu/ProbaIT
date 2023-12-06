const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    const token = request.header('token');

    const decodedToken = await jwt.verify(token, "authenticationToken");

    request.user = decodedToken;

    next();
    
  } catch (error) {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};