'use client'

import { useState, useEffect } from "react";
import getProducts from "../utils/getProducts";

export default function Products() {
  const [product, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://calm-pink-shark-sari.cyclic.app/products");
        const data = await response.json();
        setProducts(data);
      } catch (error : any) {
        setError(error);
      }
    }
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: </div>;
  }

  return (
    <main className="my-24 text-center">
      <h1 className="text-2xl flex justify-center">
        Products fetched
        <span className="inline-block bg-white/20"></span>
      </h1>

      <div className="my-12">
        {product.map((product: any) => (
          <div key={product.id}>
            <h2>{product.productname}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}