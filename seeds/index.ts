import { PrismaClient } from "@prisma/client";

// TODO: Update seeds routine to only seed products, since user seeding is unusable

const prisma = new PrismaClient();

const productNames = [
  "DenimPro Slim Fit Jeans",
  "EverWear Classic Denim Jacket",
  "StitchCraft Casual Shirt",
  "UrbanEdge Skinny Jeans",
  "VentureX Leather Jacket",
  "BoldThread Flannel Shirt",
  "Skyline Straight Cut Jeans",
  "TrailBlaze Puffer Jacket",
  "PrimeFit Polo Shirt",
  "RuggedStyle Bootcut Jeans",
  "IronHide Denim Jacket",
  "CozyCrew Cotton Shirt",
  "GravelRoad Relaxed Fit Jeans",
  "StormGuard Windbreaker Jacket",
  "UrbanNomad Checkered Shirt",
  "SteadyStride Tapered Jeans",
  "FrostShield Bomber Jacket",
  "Coastline Striped Shirt",
  "VibeFit Distressed Jeans",
  "AlpineRush Winter Jacket",
  "TrueFlare Oxford Shirt",
  "DriftWear Stretch Jeans",
  "SummitPeak Quilted Jacket",
  "Gridline Plaid Shirt",
  "BoldMove Ripped Jeans",
  "NorthWind Fleece Jacket",
  "SailorBay Linen Shirt",
  "TerraFlex Slim Tapered Jeans",
  "CloudBurst Rain Jacket",
  "IronWill Denim Shirt",
  "StoneBrook Classic Fit Jeans",
  "EdgeWave Hooded Jacket",
  "FreshThread Button-Down Shirt",
  "WaveCrest Relaxed Jeans",
  "ArcticForce Insulated Jacket",
  "MetroPlaid Flannel Shirt",
  "ShadowLine Skinny Jeans",
  "ThunderHawk Moto Jacket",
  "UrbanBreeze Short Sleeve Shirt",
  "IronForge Raw Denim Jeans",
  "SummitTrail Lightweight Jacket",
  "CoastTrail Chambray Shirt",
  "DeepDive Slim Fit Jeans",
  "JetStream Nylon Jacket",
  "BreezeLine Henley Shirt",
  "RockSolid Heavy Duty Jeans",
  "CanyonWind Softshell Jacket",
  "EastSide Denim Shirt",
  "NightFall Straight Leg Jeans",
];

async function main() {
  // Create products
  await prisma.product.createMany({
    data: productNames.map((name) => ({
      name,
      img: "https://picsum.photos/400/600",
      price: Math.floor(Math.random() * 100) + 100,
      stock: Math.floor(Math.random() * 10) + 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel finibus nunc, id convallis arcu. Integer vel purus vel neque fermentum tincidunt.",
    })),
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
