import PriceFormatter from "./PriceFormatter";

const PriceVies = ({
  price,
  discount,
  className,
}: {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <PriceFormatter amount={price} className="text-shop_dark_green" />
        {price && discount && (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className="line-through text-xs font-normal text-shop_light_text"
          />
        )}
      </div>
    </div>
  );
};

export default PriceVies;
