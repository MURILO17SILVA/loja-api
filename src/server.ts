import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import produtoRoutes from './routes/produtoRoutes';
import itemRoutes from './routes/itemRoutes';


dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing do corpo das requisições
app.use(express.json());

// Rotas
app.get('/', (req: Request, res: Response) => {
  res.send('API da loja');
});

// Conexão com o banco de dados
mongoose.connect(process.env.MONGODB_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conectado ao banco de dados MongoDB');
});
app.use('/produtos', produtoRoutes);
app.use('/itens', itemRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
