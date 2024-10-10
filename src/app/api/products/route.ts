import { NextResponse } from "next/server";
import { api } from "@/trpc/server";
import type { Product } from "@prisma/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 0;

  const products: Product[] = await api.product.getAllPaginated({ page });
  return NextResponse.json(products);
}
