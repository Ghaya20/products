const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        product_title: "Wireless Bluetooth Headphones",
        product_description: "High-quality wireless headphones with noise-cancellation and 20 hours battery life.",
        product_category: "Electronics",
        product_price: "2999",
        product_discount: "10",
        product_rating: "4.5",
        product_stock: "150",
        product_tags: "headphones,bluetooth,electronics,audio",
        product_brand: "SoundX",
        product_thumbnail: "https://example.com/products/headphones.jpg",
      },
      {
        product_title: "Eco-Friendly Bamboo Toothbrush",
        product_description: "Biodegradable bamboo toothbrush with soft bristles for sensitive gums.",
        product_category: "Personal Care",
        product_price: "199",
        product_discount: "5",
        product_rating: "4.8",
        product_stock: "500",
        product_tags: "toothbrush,bamboo,eco-friendly,personalcare",
        product_brand: "GreenSmile",
        product_thumbnail: "https://example.com/products/toothbrush.jpg",
      },
    ],
  });

  console.log("Products seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error seeding products:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
