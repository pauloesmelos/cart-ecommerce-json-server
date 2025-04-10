import { useQuery } from "@tanstack/react-query";
import { ProductDataResponse } from "../../@types/Product";
import apiService from "../../services/axios";
const getProductsByCategory = async (category: string): Promise<ProductDataResponse> => {
    return await apiService.get(`/products/category/${category}`)
    .then(response => response.data)
    .catch(erro => console.log(erro));
}
const useGetProductsByCategory = (category: string) => {
  const { data } = useQuery<ProductDataResponse>({
    queryKey: [`get-products-by-category-${category}`],
    queryFn: () => getProductsByCategory(category),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5 // 5 min
  })
  return { data }
}

export default useGetProductsByCategory;