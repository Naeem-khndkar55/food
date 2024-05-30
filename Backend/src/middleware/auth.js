const jwt = require("jsonwebtoken");

JWT_SECRET = "naeem1234";
const key = process.env.JWT_SECRET;
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "not authorized" });
  }

  try {
    const decode = jwt.verify(token, key);
    req.body.userId = decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something is wrong" });
  }
};

module.exports = authMiddleware;
