import styles from "./Prodoct.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ onInput, onIncrement, onDecrement, onDeleted, product }) => {
  return (
    <div className={styles.product}>
      <h2>name : {product.title}</h2>
      <h2>price : $ {product.price}</h2>
      <div className={styles.information}>
        <input type="text" onInput={onInput} value={product.title} />
        <span>{product.quantity}</span>
        <button
          onClick={onDecrement}
          className={product.quantity === 1 ? styles.remove : null}
        >
          {product.quantity > 1 ? "-" : <BiTrash size="20px" />}
        </button>
        <button onClick={onIncrement} className={styles.increment}>
          +
        </button>
        <button onClick={onDeleted}>Delete</button>
      </div>
    </div>
  );
};

export default Product;
