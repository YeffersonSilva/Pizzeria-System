import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
    async handle(request: Request, response: Response) {
        const { orderId } = request.body;

        const sendOrderService = new SendOrderService();

        try {
            const order = await sendOrderService.execute({ orderId });
            return response.json(order);
        } catch (error) {
            // Aquí puedes personalizar la respuesta en base al tipo de error
            if (error.message.includes("not found")) {
                // Si el error es porque el pedido no fue encontrado
                return response.status(404).json({ message: error.message });
            }
            // Para otros errores, puedes retornar un error genérico
            return response.status(500).json({ message: "An unexpected error occurred" });
        }
    }
}

export { SendOrderController };
