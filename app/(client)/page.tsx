import LatestBlog from "@/components/blog_components/LatestBlog";
import Container from "@/components/Container";
import HomeBanner from "@/components/home_components/HomeBanner";
import HomeCategories from "@/components/home_components/HomeCategories";
import ShopByBrands from "@/components/home_components/ShopByBrands";
import ProductGrid from "@/components/Product/ProductGrid";
import { getCategories } from "@/sanity/queries";

const Home = async () => {
  const categories = await getCategories(6);

  return (
    <Container className="">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </Container>
  );
};

export default Home;
