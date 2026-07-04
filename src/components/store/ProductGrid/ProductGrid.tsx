import type { ProductCard as ProductCardType } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

interface ProductGridProps {
  products: ProductCardType[];
  onAddToCart?: (productId: string) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}