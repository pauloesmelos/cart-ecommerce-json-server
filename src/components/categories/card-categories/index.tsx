import { FaImage } from "react-icons/fa";
import { Categories } from "../../../@types/Categories";
import useGetProductsByCategory from "../../../hooks/api/useGetProductsByCategory";

const CardCategories = ({ slug, name }: Categories) => {
  const { data } = useGetProductsByCategory(slug);

  return (
    <div 
      aria-label={slug} 
      className="px-2 py-3 bg-white rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white
      group hover:scale-[1.04] duration-100 ease-linear"
    >
        <div className="w-[100px] h-[100px] mx-auto">
          {data?.products ? (
            <img className="w-full h-full object-cover" alt={slug} title={slug} src={data.products[1].images[0]} />
          ): (
            <div>
              <FaImage />
            </div>
          )}
        </div>
        <div className="mt-2">
            <p className="font-semibold text-orange-600 group-hover:text-white text-center text-sm">
                {name}
            </p>
        </div>
    </div>
  )
}

export default CardCategories;