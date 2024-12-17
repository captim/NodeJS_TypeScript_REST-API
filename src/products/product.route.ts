import express from "express";
import { productController } from "./product.controller";

export const productRouter = express.Router()

productRouter.get("/:productId", productController.getProductById);
productRouter.get("/", productController.getProducts);
productRouter.post("/", productController.createProduct);
productRouter.post("/:productId", productController.updateProduct);
productRouter.post("/:productId", productController.deleteProduct);
