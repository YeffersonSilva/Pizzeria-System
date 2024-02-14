import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';


class RemoveItemController {
    async handle(req: Request, res: Response) {
        const itemId  = req.query.itemId as string;

        const removeItemService = new RemoveItemService();

        const order = await removeItemService.execute({ itemId });

        return res.json(order);
    }
}

export { RemoveItemController };    