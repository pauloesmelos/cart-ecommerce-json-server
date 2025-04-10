import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { GlobalContextProductsProvider } from "./global/products/GlobalContextProducts";
import { routes } from "./routes/routes";

const App = () => {
  const client = new QueryClient();
  return (
    <>
     <QueryClientProvider client={client}>
      <GlobalContextProductsProvider>
        <RouterProvider router={routes} />
      </GlobalContextProductsProvider>
     </QueryClientProvider>
    </>
  )
}

export default App;