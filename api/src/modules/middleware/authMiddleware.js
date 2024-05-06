import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  // Verifica se o cabeçalho Authorization foi enviado na requisição
  const token = req.headers.authorization.toString().replace('Bearer ', '');
  console.log('JWT_SECRET', process.env.JWT_SECRET)
  console.log(999, token)
  if (!token) {
    return res.status(401).json({ message: 'Token de autorização não fornecido' });
  }

  try {
    console.log(999, token, process.env.JWT_SECRET)
    // Verifica e decodifica o token JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Adiciona o usuário decodificado ao objeto req para uso posterior
    next(); // Passa para o próximo middleware ou rota
  } catch (error) {
    console.log(999, error)
    return res.status(401).json({ message: 'Token de autorização inválido' });
  }
};

export default authMiddleware;
