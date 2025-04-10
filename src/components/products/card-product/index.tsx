import { IoMdStar } from "react-icons/io";
import { Product } from "../../../@types/Product";

const CardProduct = ({ title, images, price, discountPercentage, rating }: Product) => {
  const applyDiscount = (price: number, discount: number): number => {
    const discountTotal = (price * discount) / 100;
    return price - discountTotal;
  }
  const applyParcels = (price: number, discount: number, numParcel: number): number => {
    const priceDiscount = applyDiscount(price, discount);
    return priceDiscount / numParcel;
  }

  return (
    <div className="w-full bg-white rounded-lg p-4 cursor-pointer shadow-md group shadow-card-blue
    flex flex-col gap-4">
        <div className="w-full text-right flex items-center justify-end">
            {Array.from({
                length: 5
            }).map((_, index) => (
                <span 
                  key={index} 
                  className={index <= Math.floor(rating) ? "text-sm text-orange-600" : "text-sm text-neutral-300"}
                >
                    <IoMdStar />
                </span>
            ))}
        </div>
        <div className="overflow-hidden w-[200px] h-[200px]">
            <img 
              className="object-cover w-full h-full group-hover:scale-125 duration-200 ease-linear" 
              src={images[0]} 
              title={title} 
              alt={title}
            />
        </div>
        <div className="w-full">
            <p className="font-medium">{title}</p>
        </div>
        <div>
            {/* total price */}
            <span className="text-sm text-neutral-500 line-through">
                {price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </span>
            {/* discount price */}
            <p className="text-2xl font-semibold text-orange-600">
                {applyDiscount(price, discountPercentage).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </p>
            <div className="flex flex-col gap-1 mt-4">
                <span className="text-sm text-neutral-500">
                    À vista no PIX
                </span>
                <span className="text-sm text-neutral-500">
                    ou até 10x de {applyParcels(price,discountPercentage, 10).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </span>
            </div>
        </div>
    </div>
  )
}

export default CardProduct;