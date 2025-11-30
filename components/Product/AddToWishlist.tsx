import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";

const AddToWishlist = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
      <button className="p-2.5 rounded-full hover:bg-shop_dark_green hover:text-white hoverEffect bg-deal-bg">
        <Heart
          size={15}
          className="text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-0.5"
        />
      </button>
    </div>
  );
};

export default AddToWishlist;
