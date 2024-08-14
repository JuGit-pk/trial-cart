import { QueryKey, useQuery } from "@tanstack/react-query";
import axiosClient from "../../utils/axiosClient";
import { IProduct } from "../../types";

export const getProductsByCategoriesAPI = async (
  qc: QueryKey
): Promise<IProduct[]> => {
  const [, category] = qc;
  const response = await axiosClient.get("/products/category/" + category);
  return response.data;
};

export const useGetProductsByCategories = ({
  category,
}: {
  category: string;
}) => {
  return useQuery({
    queryKey: ["get-products-by-categories", category],
    queryFn: ({ queryKey }) => getProductsByCategoriesAPI(queryKey),
    enabled: !!category,
  });
};
