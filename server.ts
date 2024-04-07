import express from "express";

const app = express();
const port = 3333;

const products = [
  {
    id: 1,
    name: "product 1"
  },
  {
    id: 2,
    name: "product 2"
  }
];

app.get("/", (_, res) => {
  console.log("[Server] Hello world API");
  res.send("Hello Express API");
});

app.get("/products", (_, res) => {
  console.log("[Server] request all products");
  return res.json({ code: 200, data: products });
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id || "";
  console.log(`[Server] request id = ${id}`);
  if (!id)
    return res.json({ code: 404, message: "NOT FOUND" });

  const product = products.find((item) => item.id === id);
  if (!product)
    return res.json({ code: 404, message: `id ${id} NOT FOUND` });

  return res.json({ code: 200, data: product });
});

app.listen(port, () => {
  console.log(`[Server] app is running at http://localhost:${port} ...`);
});
