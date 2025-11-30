"use client";

import { useAppContext } from "@/context/AppContext";
import HomeTabBar from "../home_components/HomeTabBar";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: any[]; // products fetched server-side
}

const ProductGrid = ({ products: initialProducts }: ProductGridProps) => {
  const {
    loading,
    setLoading,
    products,
    setProducts,
    selectedTab,
    setSelectedTab,
  } = useAppContext();

  const [firstLoad, setFirstLoad] = useState(true);

  const query = `*[_type=="product" && variant==$variant] | order(name desc){
    ...,"categories":categories[]->title
  }`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    if (firstLoad) {
      setProducts(initialProducts);
      setFirstLoad(false);
    }
  }, [initialProducts, firstLoad, setProducts]);

  useEffect(() => {
    if (firstLoad) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await client.fetch(query, params);
        setProducts(res);
      } catch (error) {
        console.log("Product fetching error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab, setProducts, setLoading, firstLoad]);

  return (
    <div className="py-10">
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
          <div className="space-x-2 flex items-center text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {products.map((product) => (
            <AnimatePresence key={product._id}>
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;
