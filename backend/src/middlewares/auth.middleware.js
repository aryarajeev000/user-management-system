import { verifyToken } from "../utils/jwt.js";

const protect = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ message: "Unauthorized" });

  try {
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default protect;
