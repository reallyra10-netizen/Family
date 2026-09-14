'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductComponent, { ProductType } from "./ProductsComponent";

export default function ProductListComponent() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchingData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchingData();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="grid grid-cols-4 p-4 gap-8">
      {products.map((item, index) => (
        <Link key={index} href={`/products/${item.id}`}>
          <ProductComponent
            image={item.image}
            price={item.price}
            description={item.description}
            title={item.title}
          />
        </Link>
      ))}
    </div>
  );
}