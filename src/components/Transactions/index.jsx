import { Fragment } from "react";
import ButtonCard from "../ButtonCard";
import { IconCurrency } from "../icons";
import ListCard from "../ListCard";
import TransactionItem from "../TransactionItem";

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
    <Fragment>
      <ListCard>
        {transactions.map((transaction, index) => {
          return (
            <li key={index}>
              <TransactionItem item={transaction} />
            </li>
          );
        })}
      </ListCard>

      <ButtonCard>
        <IconCurrency /> Adicionar transação
      </ButtonCard>
    </Fragment>
  );
};

export default Transactions;
