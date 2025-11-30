"use client";
import { useAppContext } from "@/context/AppContext";
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect, useEffectEvent } from "react";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "../Product/NoProductAvailable";
import ProductCard from "../Product/ProductCard";

interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const {
    currentSlug,
    setCurrentSlug,
    loading,
    setLoading,
    products,
    setProducts,
  } = useAppContext();

  useEffect(() => {
    setCurrentSlug(slug);
  }, [slug]);

  const router = useRouter();
  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    router.push(`/category/${newSlug}`, { scroll: false });
  };

  useEffect(() => {
    if (!currentSlug) return;
    fetchProducts(currentSlug);
  }, [currentSlug]);

  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){
        ...,"categories":categories[]->title
        }`;
      const res = await client.fetch(query, { categorySlug });

      setProducts(res);
    } catch (error) {
      console.log(error as string);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="py-5 flex flex-col  md:flex-row items-start gap-5">
      <div className="md:flex flex-row md:flex-col md:min-w-40 flex-wrap   md:border sticky left-0 top-17 z-50 md:z-0 bg-shop_light_green/20 md:bg-white backdrop-blur-md ">
        {categories?.map((item) => (
          <Button
            onClick={() => handleCategoryChange(item?.slug?.current as string)}
            key={item?._id}
            className={`bg-transparent border-0 p-0  rounded-none text-darkColor shadow-none hover:bg-shop_dark_green hover:text-white font-semibold hoverEffect border-b last:border-b-0 capitalize transition-colors hoverEffect ${item?.slug?.current === currentSlug && "bg-shop_dark_green text-white border-shop_dark_green"}`}
          >
            <p className="w-full text-left px-4 ">{item?.title}</p>
          </Button>
        ))}
      </div>
      <div className=" flex-1">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 h-full space-y-4 text-center bg-gray-100 rounded-lg w-full min-h-96">
            <div className="flex items-center space-x-2 text-blue-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Product is loading</span>
            </div>
          </div>
        ) : products?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {products?.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div>
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <NoProductAvailable
            selectedTab={currentSlug}
            className="mt-0 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
