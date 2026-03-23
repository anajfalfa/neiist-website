"use client";
import styles from "@/styles/components/shop/ShopProductList.module.css";
import Link from "next/link";
import { Product, Category } from "@/types/shop";
import ProductCard from "@/components/shop/ProductCard";

export default function ShopProductList({
  products,
}: {
  products: Product[];
  categories: Category[];
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.primary}>L</span>
        <span className={styles.secondary}>o</span>
        <span className={styles.tertiary}>j</span>
        <span className={styles.quaternary}>a</span>
      </h1>
      <p className={styles.subTitle}>Os produtos que representam o teu curso!</p>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {products.length === 0 && (
          <div className={styles.empty}>
            <p>Nenhum produto encontrado.</p>
            <p>Tenta ajustar os filtros ou verifica mais tarde!</p>
            <button className={styles.backBtn} onClick={() => window.history.back()}>
              Voltar
            </button>
            <button>
              <Link href="/shop/management">
                Gerir Produtos
              </Link>
            </button>
            <button>
              <Link href="/shop">
                Ver Produtos
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
