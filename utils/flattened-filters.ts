import type { Category, Fit, Size } from "@prisma/client";

export interface Filters {
  category: Category[];
  fit: Fit[];
  size: Size[];
}

export const getFlattenedFilters = (filters: Filters): string[] => {
  return (Object.values(filters) as string[][]).flat().slice(0, 4);
};
