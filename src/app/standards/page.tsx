"use client";

import { useState, useEffect } from "react";
import getProducts from "../utils/getProducts";

export default function Standards() {
  const [standards, setStandards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://calm-pink-shark-sari.cyclic.app/standards"
        );
        const data = await response.json();
        setStandards(data);
      } catch (error: any) {
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
        standards fetched
        <span className="inline-block bg-white/20"></span>
      </h1>

      <div className="my-12">
        {standards.map((standards: any) => (
          <div key={standards.id}>
            <h2>Standard Code: {standards.standard_id}</h2>
            <h2>Industry: {standards.industry}</h2>
            <h2>{standards.description}</h2>
            <h2>{standards.penalty}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
