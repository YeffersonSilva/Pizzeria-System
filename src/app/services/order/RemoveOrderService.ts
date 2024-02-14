import prismaClient from "../../prisma";

interface OrderRequest {
    id: string;
}

class RemoveOrderService {
    async execute({id}: OrderRequest) { 
        const order = await prismaClient.order.delete({
            where: {
                id,
            }
        });

        return order;
    }
}

export { RemoveOrderService };