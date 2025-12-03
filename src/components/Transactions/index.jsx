import Button from "../Button";
import { IconCurrency } from "../icons";
import TransactionItem from "../TransactionItem";
import styles from "./transactions.module.css";

const Transactions = () => {
  const transactions = [
    {
      description: "Compra no supermercado",
      value: -50,
      date: "2024-06-01T00:00:00-03:00",
    },
    {
      description: "Pagamento de conta de luz",
      value: 100,
      date: "2024-06-02T00:00:00-03:00",
    },
    {
      description: "Almoço fora",
      value: -30,
      date: "2024-06-03T00:00:00-03:00",
    },
  ];

  return (
    <>
      <ul className={styles.list}>
        {transactions.map((transaction, index) => {
          return (
            <li key={index}>
              <TransactionItem item={transaction} />
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Button>
          <IconCurrency /> Adicionar transação
        </Button>
      </div>
    </>
  );
};

export default Transactions;
