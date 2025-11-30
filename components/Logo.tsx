import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href="/" className="inline-flex items-center">
      <span
        className={cn(
          "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green cursor-pointer hoverEffect group font-sans",
          className
        )}
      >
        A
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          rtify
        </span>
      </span>
    </Link>
  );
};

export default Logo;
