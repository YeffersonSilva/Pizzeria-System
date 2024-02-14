import { Request, Response } from "express";

import { ListOrdersService } from "../../services/order/ListOrdersService";


class ListOrdersController {
    async handle(request: Request, response: Response) {
        const listOrdersService = new ListOrdersService();

        const orders = await listOrdersService.execute();

        return response.json(orders);
    }
}

export{ListOrdersController}