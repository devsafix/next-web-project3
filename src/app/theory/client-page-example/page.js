"use client";

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

const ClientActionsExample = () => {
  const [products, setProducts] = useState([]);

  async function getListOfProducts() {
    const data = await fetchListOfProducts();
    if (data) setProducts(data);
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Server Actions Example - client components
      </h1>
      <div>
        <ul>
          {products && products.length > 0
            ? products?.map((item) => (
                <li key={item.id} className="list-disc ml-6">
                  {item.title}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ClientActionsExample;
