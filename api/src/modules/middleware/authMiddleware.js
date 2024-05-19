import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req?.headers?.authorization?.toString().replace('Bearer ', '');
  console.log('JWT_SECRET', process.env.JWT_SECRET)
  console.log(999, token)
  if (!token) {
    return next(); 
  }
  
  try {
    console.log(999, token, process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; 
    next(); 
  } catch (error) {
    console.log(999, error)
    return res.status(401).json({ message: 'Token de autorização inválido' });
  }
};

export default authMiddleware;
