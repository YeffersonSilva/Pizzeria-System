import { Request, Response } from 'express';
import { FinishOrderService } from '../../services/order/FinishOrderService';


class FinishOrderController {
    async handle(request: Request, response: Response) {
        const { orderId } = request.body;

        const finishOrderService = new FinishOrderService();

        const order = await finishOrderService.execute({orderId});

        return response.json(order);
    }
}


export  { FinishOrderController }