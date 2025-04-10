import { useQuery } from "@tanstack/react-query";
import { ProductDataResponse } from "../../@types/Product";
import apiService from "../../services/axios";

const getProducts = async (): Promise<ProductDataResponse> => {
    return await apiService.get("/products")
    .then(response => response.data)
    .catch(erro => console.log("erro get products " + erro));
}
const useGetProducts = () => {
  const { data, isLoading } = useQuery<ProductDataResponse>({
    queryKey: ["get-products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5 // dados em cache por 5 minutos
  });
  return { data, isLoading }
}

export default useGetProducts;