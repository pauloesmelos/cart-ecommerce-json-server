import { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FaLessThan } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import useGetCategories from "../../hooks/api/useGetCategories";
import CardCategories from "./card-categories";

const Categories = () => {
  const { data } = useGetCategories();
  const [countCategories, setCountCategories] = useState(6);

  if(!data) return null;
  return (
    <div className="w-full">
        <div className="w-full">
            <div className="w-full flex items-center gap-2">
                <BiSolidCategory className="text-3xl text-orange-600" />
                <h1 className="text-3xl font-bold text-slate-700">
                    Categories
                </h1>
            </div>
            <div className="w-full max-w-[1200px] mx-auto grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10 mt-10">
                {data?.map(({ slug, name, url }, index) => (
                    <div key={slug} className={index < countCategories ? "" : "hidden"}>
                        <CardCategories
                          key={slug} 
                          slug={slug} 
                          name={name} 
                          url={url}
                        />
                    </div>
                ))}
                <div className="flex items-center gap-5">
                    <div
                      onClick={() => setCountCategories(value => value + 6)}
                      className="flex flex-col items-center gap-2 bg-white w-[100px] rounded-lg p-3 cursor-pointer
                      hover:bg-blue-100 duration-150"
                    >
                        <div className="p-1 rounded-full bg-blue-200">
                            <IoIosMore className="text-2xl text-blue-600" />
                        </div>
                        <span className="font-normal text-sm">
                            More
                        </span>
                    </div>
                    <div
                      onClick={() => {
                        if(countCategories - 6 > 0) {
                            setCountCategories(value => value - 6);
                        }
                        else {
                            setCountCategories(6);
                        }
                      }}
                      className="flex flex-col items-center gap-2 bg-white w-[100px] rounded-lg p-3 cursor-pointer
                      hover:bg-rose-100 duration-150"
                    >
                        <div className="p-1 rounded-full bg-rose-200">
                            <FaLessThan className="text-2xl text-rose-600" />
                        </div>
                        <span className="font-normal text-sm">
                            Less
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories;