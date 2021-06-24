import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function verifyToken(req, res, next) {
  const token = req.header('auth-token');
  if (!token)
    return res.status(401).json({ success: false, message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, 'process.TOKEN_S');
    req.profile = verified;
    next();
  } catch (error) {
    res.status(400).json({ success: true, message: 'Invalid Token' });
  }
}
export default verifyToken;
