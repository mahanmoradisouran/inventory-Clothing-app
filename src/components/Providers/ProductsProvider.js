import { createContext, useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

export const ProductContext = createContext();
export const ProductContextDispatcher = createContext();

const reduce = (state, action) => {
  switch (action.type) {
    case "delet": {
      const filteredItems = state.filter((p) => action.id !== p.id);
      return filteredItems;
    }
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;

      const products = [...state];
      products[index] = product;
      return products;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredItems = state.filter((item) => item.id !== action.id);
        return filteredItems;
      } else {
        const products = [...state];
        product.quantity--;
        products[index] = product;
        return products;
      }
    }
    case "input": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;

      const products = [...state];
      products[index] = product;
      return products;
    }
    case "filter":
      if (action.selectedOption.value === "") {
        return productsData;
      } else {
        const upDatedState = productsData.filter(
          (p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0
        );
        return upDatedState;
      }
    case "sort": {
      const products = [...state];
      const value = action.selectedOption.value;
      console.log(value);
      if (value === "Lower") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    case "search": {
      const value = action.result;
      if (value === "") {
        return state;
      } else {
        const products = [...state]
        const filteredItems = products.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredItems;
      }
    }
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(reduce, productsData);

  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => useContext(ProductContextDispatcher);

//   const deleteItemHandeler = (id) => {
//     let filteredItems = Product.filter((p) => id !== p.id);
//     setProduct(filteredItems);
//   };
//   const incrementItemHandler = (id) => {
//     const index = Product.findIndex((item) => item.id === id);
//     const product = { ...Product[index] };
//     product.quantity++;

//     const products = [...Product];
//     products[index] = product;
//     setProduct(products);
//   };
//   const decrementItemHandler = (id) => {
//     const index = Product.findIndex((item) => item.id === id);
//     const product = { ...Product[index] };
//     if (product.quantity === 1) {
//       const filteredItems = Product.filter((item) => item.id !== id);
//       setProduct(filteredItems);
//     } else {
//       const products = [...Product];
//       product.quantity--;
//       products[index] = product;
//       setProduct(products);
//     }
//   };
//   const changeProductNameHandler = (e, id) => {
//     const index = Product.findIndex((item) => item.id === id);
//     const product = { ...Product[index] };
//     product.title = e.target.value;

//     const products = [...Product];
//     products[index] = product;
//     setProduct(products);
//   };
//   return {
//     changeProductNameHandler,
//     decrementItemHandler,
//     incrementItemHandler,
//     deleteItemHandeler,
//   };
// };
