import prismaClient from "../../prisma";

interface IRequest {
    orderId: string;
}

class DetailOrderService {
    async execute({ orderId }: IRequest) {
        const order = await prismaClient.item.findMany({
            where: {
                oderId : orderId
            },
            include: {
                product: true,
                order: true
            }

        });

        return order;
    }
}

export { DetailOrderService };