import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./components/AppLayout";
import "./input.css";
import { FormProvider } from "./contexts/FormContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <FormProvider>
        <AppLayout />
        </FormProvider>
      </QueryClientProvider>
      
    </>
  );
}

export default App;
