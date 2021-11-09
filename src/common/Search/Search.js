import { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProvider";
import Styles from "./Search.module.css";

const Search = ({ filter }) => {
  const [value, setValue] = useState("");
  const dispatch = useProductsActions();
  const searchHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", result: e.target.value });
    setValue(e.target.value);
  };
  return (
    <div>
      <span>search for : </span>
      <input
        placeholder="search on products"
        className={Styles.input}
        type="text"
        value={value}
        onChange={(e) => searchHandler(e)}
      />
    </div>
  );
};

export default Search;
