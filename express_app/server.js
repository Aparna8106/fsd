import express from "express";

const app = express();

app.use(express.json());

const products = [];

// Create Product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);

  res.status(201).json({
    message: "product created successfully",
    data: newProduct
  });
});

// Get All Products
app.get("/products", (req, res) => {
  res.status(200).json({
    message: "all products fetched successfully",
    data: products
  });
});

// Get Product by ID
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(
    (prod) => prod.id === productId
  );

  if (product) {
    res.status(200).json({
      message: "product fetched successfully",
      data: product
    });
  } else {
    res.status(404).json({
      message: "product not found"
    });
  }
});

// Update Product
app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const index = products.findIndex(
    (prod) => prod.id === productId
  );

  if (index !== -1) {
    products[index] = {
      ...products[index],
      ...req.body,
      id: productId
    };

    res.status(200).json({
      message: "product updated successfully",
      data: products[index]
    });
  } else {
    res.status(404).json({
      message: "product not found"
    });
  }
});

// Delete Product
app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const index = products.findIndex(
    (prod) => prod.id === productId
  );

  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);

    res.status(200).json({
      message: "product deleted successfully",
      data: deletedProduct[0]
    });
  } else {
    res.status(404).json({
      message: "product not found"
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});