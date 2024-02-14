import { Router, Request, Response } from "express";
import multer from "multer";
import { CreateUserController } from "../controllers/user/createUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/detailUserController";

import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";

import {AddItemController} from "../controllers/order/AddItemController";
import { CreateProductController } from "../controllers/product/CreateProductController";

import { isAuthenticated } from "../middlewares/isAuthenticated";

import { ListByCategoryController } from "../controllers/product/ListCategoryController";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { RemoveOrderController } from "../controllers/order/RemoveOrderController";
import uploadConfig from "../config/multer"

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new DetailUserController().handle)


//Routes Categories

router.post("/category", isAuthenticated, new CreateCategoryController().handle)

router.get("/category", isAuthenticated, new ListCategoryController().handle)

//Routes Products
router.post("/product", isAuthenticated,upload.single('file'), new CreateProductController().handle)

router.get("/category/product", isAuthenticated, new ListByCategoryController().handle)


//Routes Orders
router.post("/order", isAuthenticated, new CreateOrderController().handle)


//Delere
router.delete("/order", isAuthenticated, new RemoveOrderController().handle)

router.post("/order/add", isAuthenticated, new AddItemController().handle)
export { router };



