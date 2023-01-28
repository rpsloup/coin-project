import { Router } from 'express';

const transactionRouter = Router();

transactionRouter.get('/', (_, res) => {
  res.json('Response!');
});

export default transactionRouter;
