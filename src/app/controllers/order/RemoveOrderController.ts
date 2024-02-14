import { Request, Response } from 'express';
import { RemoveOrderService } from '../../services/order/RemoveOrderService';

class RemoveOrderController {
  async handle(req: Request, res: Response) {
      // TODO
      const id = req.query.id as string;
      const removeOrder = new RemoveOrderService();
      const order = await removeOrder.execute({
        id
      });

      return res.json(order);
  }
}

export {
    RemoveOrderController
}