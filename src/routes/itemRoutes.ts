import express, { Request, Response } from 'express';
import Item from '../models/item';

const router = express.Router();

// Rota para cadastrar um novo item
router.post('/', async (req: Request, res: Response) => {
  try {
    const { quantidade, dataChegadaNoEstoque, produto } = req.body;
    const item = new Item({ quantidade, dataChegadaNoEstoque, produto });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar o item' });
  }
});

// Rota para buscar itens de um produto
router.get('/produto/:produtoId', async (req: Request, res: Response) => {
  try {
    const { produtoId } = req.params;
    const itens = await Item.find({ produto: produtoId });
    res.json(itens);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar os itens' });
  }
});

export default router;
