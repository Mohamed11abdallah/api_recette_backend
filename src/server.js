import express from 'express';
import recetteRoutes from './routes/RecetteRoutes.js';
import categorieRoutes from './routes/CategorieRoutes.js';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use('/api', recetteRoutes);
app.use('/api', categorieRoutes);

const PORT = process.env.DB_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
