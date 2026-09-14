'use client';

import { useEffect, useState } from "react";
import { ProductType } from "./ProductsComponent";
import ProductsDetailComponent from "./ProductsDetailComponent";

type ProductIDType = {
  id: number;
};

export default function ProductDetailListComponent({ id }: ProductIDType) {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchingData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchingData();
    }
  }, [id]);

  if (loading) return <p className="p-4">Loading product...</p>;
  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <ProductsDetailComponent
      image={product.image}
      price={product.price}
      description={product.description}
      title={product.title}
    />
  );
}