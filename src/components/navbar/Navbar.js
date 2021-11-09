import { useProducts } from "../Providers/ProductsProvider";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const Products = useProducts();
  const totalItems = Products.length
  return (
    <header className={styles.header}>
      <h2>FrontHooks.ir Shopping App</h2>
      <span>{totalItems}</span>
    </header>
  );

};

export default Navbar;
