import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Shared/Loading.jsx";
import useSingleData from "../../hooks/useSingleData.js";
import LatestProduct from "../Home/LatestProduct.jsx";
import ProductDetails from "./ProductDetails.jsx";
import ShopForm from "./ShopForm.jsx";

const BuyProduct = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/products/${id}`;
  const { loading, singleData: product } = useSingleData(url);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" pb-24 lg:pb-28">
      <div className="container flex flex-col lg:flex-row items-center gap-8">
        <ProductDetails product={product} />
        <ShopForm product={product} />
      </div>
      <LatestProduct title="You Also Like" />
    </div>
  );
};

export default BuyProduct;
