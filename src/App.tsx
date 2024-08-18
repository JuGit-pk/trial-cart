import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { CartProvider } from "./hooks/context/useCartCtx";

const queryClient = new QueryClient();
function App() {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;
