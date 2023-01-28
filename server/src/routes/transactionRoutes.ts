import { Router } from 'express';

import type { Transaction } from '../../../typings/transactionTypes';

const transactionRouter = Router();

const exampleTransactionData: Transaction[] = [
  { transaction_id: 0, sender: 'Jeff', receiver: 'Tim', amount: 15, date: new Date().toJSON() },
  { transaction_id: 1, sender: 'Jeff', receiver: 'Tim', amount: 8, date: new Date().toJSON() },
  { transaction_id: 2, sender: 'Tim', receiver: 'Jeff', amount: 7, date: new Date().toJSON() },
  { transaction_id: 3, sender: 'Jeff', receiver: 'Tim', amount: 32, date: new Date().toJSON() },
  { transaction_id: 4, sender: 'Tim', receiver: 'Jeff', amount: 6, date: new Date().toJSON() },
  { transaction_id: 5, sender: 'Tim', receiver: 'Jeff', amount: 71, date: new Date().toJSON() },
  { transaction_id: 6, sender: 'Jeff', receiver: 'Tim', amount: 25, date: new Date().toJSON() },
];

transactionRouter.get('/', (_, res) => {
  res.json(exampleTransactionData);
});

export default transactionRouter;
