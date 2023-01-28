CREATE TABLE Transactions(
  transaction_id SERIAL PRIMARY KEY,
  sender VARCHAR(64),
  receiver VARCHAR(64),
  amount NUMERIC(7, 2),
  timestamp TIMESTAMP
);
