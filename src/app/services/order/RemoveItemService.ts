import prismaClient from "../../prisma";

interface IRequest {
    itemId: string;
}
    
class RemoveItemService {
    async execute({ itemId }: IRequest) {
        const order = await prismaClient.item.delete({
            where: {
               id: itemId
            }
        });

        return order;
    }
}
export { RemoveItemService };