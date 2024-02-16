import prismaClient from "../../prisma";


interface IRequest {
    orderId: string;
}


class FinishOrderService {
    async execute({orderId}: IRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: orderId
            },
            data: {
                status: true
            }
        });

        return order;
    }
}

export { FinishOrderService };