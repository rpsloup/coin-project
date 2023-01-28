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

export default transactionRouter;
