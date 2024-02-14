import prismaClient from "../../prisma";
import { Prisma } from "@prisma/client";

interface IRequest {
    orderId: string;
}

class SendOrderService {
    async execute({ orderId }: IRequest) {
        try {
            const order = await prismaClient.order.update({
                where: {
                    id: orderId
                },
                data: {
                    draft: false
                }
            });

            return order;
        } catch (error) {
            // Manejo de error específico de Prisma por si el orderId no existe
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new Error(`Order with ID ${orderId} not found.`);
                }
            }
            // Manejo de otros errores no esperados
            throw new Error('An unexpected error occurred.');
        }
    }
}

export { SendOrderService };
