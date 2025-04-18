-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_category" TEXT NOT NULL,
    "product_price" TEXT NOT NULL,
    "product_discount" TEXT NOT NULL,
    "product_rating" TEXT NOT NULL,
    "product_stock" TEXT NOT NULL,
    "product_tags" TEXT NOT NULL,
    "product_brand" TEXT NOT NULL,
    "product_thumbnail" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_id_key" ON "Product"("product_id");
