import { PrismaClient } from "@prisma/client";

// TODO: Update seeds routine to only seed products, since user seeding is unusable

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/image1.jpg",
      phone: "+1234567890",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "https://example.com/image2.jpg",
      phone: "+0987654321",
    },
  });

  // Create addresses for users
  await prisma.address.createMany({
    data: [
      {
        line1: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",
        postalCode: "10001",
        userId: user1.id,
      },
      {
        line1: "456 Elm St",
        line2: "Apt 1",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        postalCode: "90001",
        userId: user2.id,
      },
    ],
  });

  // Create payments for users
  await prisma.payment.createMany({
    data: [
      {
        provider: "Visa",
        acc_no: BigInt(1234567890123456),
        expires: new Date("2025-01-31"),
        userId: user1.id,
      },
      {
        provider: "MasterCard",
        acc_no: BigInt(9876543210987654n),
        expires: new Date("2026-12-31"),
        userId: user2.id,
      },
    ],
  });

  // Create carts for users
  const cart1 = await prisma.cart.create({
    data: {
      userId: user1.id,
      amount: 0.0, // Initial amount
    },
  });

  const cart2 = await prisma.cart.create({
    data: {
      userId: user2.id,
      amount: 0.0, // Initial amount
    },
  });

  // Create products
  const product1 = await prisma.product.create({
    data: {
      name: "Product A",
      price: 29.99,
      img: "https://example.com/product-a.jpg",
      stock: 100,
      desc: "Description for Product A",
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Product B",
      price: 49.99,
      img: "https://example.com/product-b.jpg",
      stock: 50,
      desc: "Description for Product B",
    },
  });

  // Add products to carts
  await prisma.cart.update({
    where: { id: cart1.id },
    data: {
      products: {
        connect: [{ id: product1.id }, { id: product2.id }],
      },
    },
  });

  await prisma.cart.update({
    where: { id: cart2.id },
    data: {
      products: {
        connect: [{ id: product1.id }], // Only add Product A for user2
      },
    },
  });

  // Create reviews for products
  await prisma.review.createMany({
    data: [
      {
        rating: 5,
        text: "Great product!",
        userId: user1.id,
        productId: product1.id,
      },
      {
        rating: 4,
        text: "Very good, but could be improved.",
        userId: user2.id,
        productId: product2.id,
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
