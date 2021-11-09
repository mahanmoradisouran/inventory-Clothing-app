import React from "react";
import ProdoctList from "./components/prodoctList/ProdoctList";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Wrapper from "./components/hoc/Wrapper";
import ProductProvider from "./components/Providers/ProductsProvider";
import Filter from "./components/filter/Filter";
// import HoverCounter from "./components/hocExample/HoverCounter";
// import ClickCounter from "./components/hocExample/ClickCounter";
// import ClassRef from "./components/ref/ClassRef";
// import FunctionalRef from "./components/ref/FunctionalRef";
// import CounterProvider from "./components/context/CounterProvider";
// import CounterOne from "./components/context/CounterOne";

const App = () => {
  return (
    //  <CounterProvider>
    //       <p>Welcom to Context example</p>
    //       <CounterOne />
    //     </CounterProvider>
    <ProductProvider>
      <>
        <Navbar />
        <Filter />
        <ProdoctList />
      </>
    </ProductProvider>
  );
};

export default Wrapper(App, "container");
