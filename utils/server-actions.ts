"use server";

import { api } from "@/trpc/server";
import type { Filters } from "./flattened-filters";
import type { Product } from "@prisma/client";

export const getLengthServer = async (filters: void | Filters | undefined) => {
  return await api.product.getLength(filters);
};

export const getPaginatedServer = async ({
  page,
  filters,
}: {
  page: number;
  filters: Filters | undefined;
}): Promise<Product[]> => {
  return await api.product.getPaginated({ page, filters });
};
