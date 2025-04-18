const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/products", async (req, res) => {
  try{
    // const data = req.body;

  const prodData = await prisma.product.findMany();
  res.json({ prodData });
  }
  catch{
    res.status(500).json({msg: "error"})
  }
  
});

app.get("/products/:product_id", async (req, res) => {
  try{
    const data = req.params;

  const productData = await prisma.product.findUnique({
    where: {
      product_id: data.product_id,
    },
  });

  res.json({productData});
  }
  

  catch{
    res.json({msg: "error"})
  }
});

app.listen(3000);
