import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './modules/user/userRoutes';
import movieRoutes from './modules/movie/movieRoutes';
import loginRoutes from './modules/login/loginRoutes';
import authenticateToken from './modules/middleware/authMiddleware';

const app = express();
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27018/cineplus';

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const router = express.Router();


app.use('/auth', loginRoutes);
router.use(authenticateToken);
app.use(router);

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);

app.get('/version', (req, res) => {
  res.status(200).json({
    version: "1.0.0",
    description: "CinePlus API - Initial version",
    lastUpdated: "2024-05-07"
  });
});


const PORT = process.env.PORT || 3526;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
