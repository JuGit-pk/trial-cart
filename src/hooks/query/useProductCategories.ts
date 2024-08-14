import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../utils/axiosClient";

export const getCategoriesAPI = async (): Promise<string[]> => {
  const response = await axiosClient.get("/products/categories");
  return response.data;
};

export const useProductCategories = () => {
  return useQuery<string[]>({
    queryKey: ["product-categories"],
    queryFn: getCategoriesAPI,
  });
};
