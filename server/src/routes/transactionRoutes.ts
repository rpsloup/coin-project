import { Router } from 'express';

import { pool } from '../main';

const transactionRouter = Router();

transactionRouter.get('/', async (_, res) => {
  try {
    const transactions = await pool.query('SELECT * FROM Transactions');
    res.json(transactions?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

transactionRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const transactions = await pool.query('SELECT * FROM Transactions WHERE transaction_id = $1', [
      id,
    ]);
    res.json(transactions?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error!');
  }
});

export default transactionRouter;
