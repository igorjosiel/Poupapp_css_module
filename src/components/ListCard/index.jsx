import styles from "./listCard.module.css";

const ListCard = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default ListCard;
