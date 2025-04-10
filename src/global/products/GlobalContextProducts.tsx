import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react';
import { Product } from '../../@types/Product';

interface GlobalContextProductsProps {
  products: Array<Product>,
  setProducts: Dispatch<SetStateAction<Array<Product>>>
}

const GlobalContextProducts = createContext<GlobalContextProductsProps | null>(null);
export const GlobalContextProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Array<Product>>([]);

  return (
    <GlobalContextProducts.Provider value={{ products, setProducts }}>
      {children}
    </GlobalContextProducts.Provider>
  )
}
export const useGlobalContextProductsProps = () => {
  const contextGlobal = useContext(GlobalContextProducts);
  if(!contextGlobal) throw new Error("Envolva o sistema sobre o GlobalContextProductsProvider");
  else return contextGlobal;
}