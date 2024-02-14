import prismaClient from "../../prisma";

interface AddItemRequest {
    oderId: string;
    productId: string;
    amount: number;
}

class AddItemService {
    async execute({oderId, productId, amount}: AddItemRequest) {
        const order = await prismaClient.item.create({
            data: {
                oderId: oderId,
                productId: productId,
                amount: amount
            }
        });

        return order;
    }
}

export { AddItemService };