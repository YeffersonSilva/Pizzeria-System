import { Router, Request, Response } from "express";
import { CreateUserController } from "../controllers/user/createUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/detailUserController";

import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";


import { CreateProductController } from "../controllers/product/CreateProductController";

import { isAuthenticated } from "../middlewares/isAuthenticated";


const router = Router();

router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new DetailUserController().handle)


//Routes Categories

router.post("/category", isAuthenticated, new CreateCategoryController().handle)

router.get("/category", isAuthenticated, new ListCategoryController().handle)

//Routes Products
router.post("/product", isAuthenticated, new CreateProductController().handle)

export { router };



