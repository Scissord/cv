import express from "express";
import * as controller from '#controllers/productController.js';

const router = express.Router();

// get products
router.get("", controller.get);
// get products filters
router.get("/filters", controller.getFilters);

// fetch products from dummy json as save in db, should use postman
router.post("/fetch", controller.fetchProducts);

export default router;
