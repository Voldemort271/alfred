"use server";

import type { Product } from "@prisma/client";
import { api } from "@/trpc/server";

export const getPaginatedAll = async (page: number): Promise<Product[]> => {
  return await api.product.getAllPaginated({ page });
};
