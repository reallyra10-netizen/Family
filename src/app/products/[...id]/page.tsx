import ProductDetailListComponent from "@/components/products/ProductsListDetailComponent";

export default async function DetailProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      {/* Product ID = {id} */}
      <ProductDetailListComponent id={Number(id)} />
    </div>
  );
}