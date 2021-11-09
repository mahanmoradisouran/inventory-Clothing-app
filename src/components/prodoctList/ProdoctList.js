import Prodoct from "../Prodocts/prodocts";
import React from "react";
import styles from "./ProdoctList.module.css";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

const ProductList = () => {
  const product = useProducts();
  const dispatch = useProductsActions();
  const productRender = () => {
    if (!product.length) return <h3>your shopping card is empty</h3>;
    return (
      <>
        {product.map((item, index) => (
          <Prodoct
            className={styles.productlist}
            product={item}
            key={index}
            onDeleted={() => dispatch({type : "delet" , id : item.id})}
            onInput={(e) => dispatch({type : "input" , id : item.id , event : e})}
            onIncrement={() => dispatch({type : "increment" , id : item.id})}
            onDecrement={() => dispatch({type : "decrement" , id : item.id})}
          />
        ))}
      </>
    );
  };

  return (
    <div className={styles.productlist}>
      {productRender()}
      {!product.length && <div>Go for shopping</div>}
    </div>
  );
};
export default ProductList;
