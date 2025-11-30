import LatestBlog from "@/components/blog_components/LatestBlog";
import Container from "@/components/Container";
import HomeBanner from "@/components/home_components/HomeBanner";
import HomeCategories from "@/components/home_components/HomeCategories";
import ShopByBrands from "@/components/home_components/ShopByBrands";
import ProductGrid from "@/components/Product/ProductGrid";
import { getCategories, getDealProducts } from "@/sanity/queries";

const Home = async () => {
  const categories = await getCategories(6);
  const products = await getDealProducts();

  return (
    <Container className="">
      <HomeBanner />
      <ProductGrid products={products} />
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </Container>
  );
};

export default Home;
