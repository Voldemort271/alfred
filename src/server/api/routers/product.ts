import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { Category, Fit, Size } from "@prisma/client";

export const productRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),
  //
  // getLatest: protectedProcedure.query(async ({ ctx }) => {
  //   const post = await ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });
  //
  //   return post ?? null;
  // }),

  getFeed: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: { id: "asc" },
      take: 4,
    });
  }),

  getAllPaginated: publicProcedure
    .input(z.object({ page: z.number().min(0).int() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.product.findMany({
        orderBy: { id: "asc" },
        take: 20,
        skip: input.page * 20,
      });
    }),

  getPaginated: publicProcedure
    .input(
      z.object({
        filters: z.optional(
          z.object({
            size: z.array(z.enum(["XS", "S", "M", "L", "XL"])),
            fit: z.array(z.enum(["Kids", "Men", "Women", "Unisex"])),
            category: z.array(z.enum(["Denim", "Jacket", "Shirt"])),
          }),
        ),
        page: z.number().min(0).int(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const where: {
        size?: { in: Size[] };
        fit?: { in: Fit[] };
        category?: { in: Category[] };
      } = {};

      if (input.filters?.size.length) {
        where.size = { in: input.filters.size };
      }

      if (input.filters?.fit.length) {
        where.fit = { in: input.filters.fit };
      }

      if (input.filters?.category.length) {
        where.category = { in: input.filters.category };
      }

      return ctx.db.product.findMany({
        orderBy: { id: "asc" },
        where,
        take: 20,
        skip: input.page * 20,
      });
    }),

  getLength: publicProcedure
    .input(
      z.optional(
        z.object({
          size: z.array(z.enum(["XS", "S", "M", "L", "XL"])),
          fit: z.array(z.enum(["Kids", "Men", "Women", "Unisex"])),
          category: z.array(z.enum(["Denim", "Jacket", "Shirt"])),
        }),
      ),
    )
    .query(async ({ ctx, input }) => {
      const where: {
        size?: { in: Size[] };
        fit?: { in: Fit[] };
        category?: { in: Category[] };
      } = {};

      if (input?.size.length) {
        where.size = { in: input.size };
      }

      if (input?.fit.length) {
        where.fit = { in: input.fit };
      }

      if (input?.category.length) {
        where.category = { in: input.category };
      }

      return ctx.db.product.count({ where });
    }),
});
