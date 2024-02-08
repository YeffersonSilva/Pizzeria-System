import prismaClient from "../../prisma"

interface categoryRequest {
    name: string;
    
}


class CreateCategoryService {
    async execute({ name }: categoryRequest) {
        
        if(name === '') {
            throw new Error('Category name is empty')
        }
        const category = await prismaClient.category.create({
            data: {
                name
            },
            select: {
                id: true,
                name: true
            }
        })
        return category
    }
}

export { CreateCategoryService }