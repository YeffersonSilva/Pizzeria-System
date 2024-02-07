import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/detailUserService";

class DetailUserController {
    async handle(req: Request, res: Response) {

        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute();

        return res.json(user);
    }
}

export { DetailUserController }