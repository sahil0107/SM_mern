// productRoutes.js

import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
  getExpiredProductsController, // New controller function to handle expired products
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get all products
router.get("/get-product", getProductController);

// Get single product
router.get("/get-product/:slug", getSingleProductController);

// Get product photo
router.get("/product-photo/:pid", productPhotoController);

// Delete product
router.delete("/delete-product/:pid", deleteProductController);

// Filter products
router.post("/product-filters", productFiltersController);

// Get product count
router.get("/product-count", productCountController);

// Get product list per page
router.get("/product-list/:page", productListController);

// Search products
router.get("/search/:keyword", searchProductController);

// Get related products
router.get("/related-product/:pid/:cid", realtedProductController);

// Get products by category
router.get("/product-category/:slug", productCategoryController);

// Get expired products
router.get(
  "/expired-products",
  requireSignIn,
  isAdmin,
  getExpiredProductsController
);

export default router;
