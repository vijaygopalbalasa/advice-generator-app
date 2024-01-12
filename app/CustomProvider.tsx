'use client';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const CustomProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default CustomProvider