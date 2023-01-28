export type Transaction = {
  transaction_id: number;
  sender: string | null;
  receiver: string | null;
  amount: number;
  date: string;
};
