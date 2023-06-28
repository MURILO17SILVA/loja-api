import express, { Request, Response } from 'express';
import Produto from '../models/produto';

const router = express.Router();

// Rota para cadastrar um novo produto
router.post('/', async (req: Request, res: Response) => {
  try {
    const { descricao, perecivel } = req.body;
    const produto = new Produto({ descricao, perecivel });
    await produto.save();
    res.status(201).json(produto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar o produto' });
  }
});

// Rota para remover um produto
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Produto.findByIdAndRemove(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover o produto' });
  }
});

export default router;
