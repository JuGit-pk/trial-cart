import { QueryKey, useQuery } from "@tanstack/react-query";

import axiosClient from "../../utils/axiosClient";
import { IProduct } from "../../types";

export const getSingleProductDetailsAPI = async (
  qc: QueryKey
): Promise<IProduct> => {
  const [, productId] = qc;
  const response = await axiosClient.get("/products/" + productId);
  return response.data;
};

export const useSingleProductCategories = ({
  productId,
}: {
  productId: number;
}) => {
  return useQuery<IProduct>({
    queryKey: ["single-product-categories", productId],
    queryFn: ({ queryKey }) => getSingleProductDetailsAPI(queryKey),
  });
};
