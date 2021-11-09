import { useState } from "react";
import Search from "../../common/Search/Search";
import SelectComponent from "../../common/Select/SelectComponent";
import { useProductsActions } from "../Providers/ProductsProvider";
import Styles from "./Filter.module.css";

const options = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const sortOptions = [
  { value: "Lower", label: "Lower" },
  { value: "Higher", label: "Higher" },
];
const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  return (
    <section>
      <Search filter={filter} />
      <div className={Styles.FilterContainer}>
        <SelectComponent
          value={filter}
          onChange={filterHandler}
          options={options}
          title="sort by size"
        />
        <SelectComponent
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          title="sort by price"
        />
      </div>
    </section>
  );
};

export default Filter;
