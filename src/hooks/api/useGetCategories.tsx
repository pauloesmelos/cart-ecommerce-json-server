import { useQuery } from "@tanstack/react-query";
import { Categories } from "../../@types/Categories";
import apiService from "../../services/axios";

const getCategories = async (): Promise<Array<Categories>> => {
    return await apiService.get("/products/categories")
    .then(response => response.data)
    .catch(erro => console.log(erro));
}
const useGetCategories = () => {
  const { data } = useQuery<Array<Categories>>({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false
  });
  return { data };
}

export default useGetCategories;