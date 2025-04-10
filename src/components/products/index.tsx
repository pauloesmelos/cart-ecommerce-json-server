import { FaStar } from "react-icons/fa";
import useGetProducts from "../../hooks/api/useGetProducts";
import CardProduct from "./card-product";

const Products = () => {
  const { data } = useGetProducts();

  if(!data) return null;
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="w-full flex items-center gap-2">
          <FaStar className="text-3xl text-orange-600" />
          <h1 className="text-3xl text-slate-700 font-bold">
            Products
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10">
          {data.products.map((product) => (
            <CardProduct 
              key={product.id} 
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;