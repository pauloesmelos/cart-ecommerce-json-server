import { useEffect } from "react";
import Categories from "../../components/categories";
import Loader from "../../components/loader";
import Products from "../../components/products";
import { useGlobalContextProductsProps } from "../../global/products/GlobalContextProducts";
import useGetProducts from "../../hooks/api/useGetProducts";

const Home = () => {
  const { data, isLoading } = useGetProducts();
  const { setProducts } = useGlobalContextProductsProps();

  const getDateFormat = (): string => { // Dia-Semana, Dia-Mês Mês
    const daysWeek = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
    const date = new Date();
    const monthFormat = Intl.DateTimeFormat("pt-BR", {
      month: "long"
    }).format(date);
    const dayMonth = date.getDate();
    const dayWeek = date.getDay() - 1;

    return `${daysWeek[dayWeek]}, ${dayMonth} ${monthFormat.replace(monthFormat[0], monthFormat[0].toUpperCase())}`;
  }

  useEffect(() => {
    if(data) {
      const { products } = data;
      setProducts(products)
    }
  }, [data]); // salva produtos num estado global

  if(!data || isLoading ) return <Loader />
  return (
    <main className="w-full">
      <div className="w-full max-w-[1600px] px-5 py-4 mx-auto">
        <div className="w-full">
          {/* day */}
          <div className="w-full text-center">
            <p className="text-sm text-neutral-500">{getDateFormat()}</p>
          </div>
          {/* categories */}
          <div className="w-full mt-5">
            <Categories />
          </div>
          {/* products */}
          <div className="w-full mt-16">
            <Products />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;