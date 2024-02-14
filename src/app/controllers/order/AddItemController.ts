import { Request, Response } from 'express';
import { AddItemService } from '../../services/order/AddItemService';

class AddItemController {
  async handle(req: Request, res: Response) {
    const { oderId, productId, amount } = req.body;
      const addItem = new AddItemService();
      

      const order = await addItem.execute({
        oderId, productId, amount
      });

    return res.json(order);
  }
}

export { AddItemController };