"use server";

import type { Product } from "@prisma/client";
import { api } from "@/trpc/server";
import type { Filters } from "./flattened-filters";

export const getAllPaginatedServer = async (
  page: number,
): Promise<Product[]> => {
  return await api.product.getAllPaginated({ page });
};

export const getLengthServer = async (filters: void | Filters | undefined) => {
  return await api.product.getLength(filters);
};

export const getPaginatedServer = async ({
  page,
  filters,
}: {
  page: number;
  filters: Filters | undefined;
}) => {
  return await api.product.getPaginated({ page, filters });
};
