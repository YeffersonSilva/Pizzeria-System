import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

/**
 * Controller for creating a new category.
 * This class handles requests for creating categories in the application.
 */
class CreateCategoryController {
    /**
     * Handles the HTTP request to create a new category.
     * 
     * @param {Request} req - The Express request object, containing the data for the category to be created.
     * @param {Response} res - The Express response object, used to send the response back to the client.
     * @returns {Promise<Response>} - Returns a promise that resolves to the JSON response object with the details of the created category.
     * 
     * @example
     * // Example usage:
     * const controller = new CreateCategoryController();
     * router.post('/categories', (req, res) => controller.handle(req, res));
     */
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        // ... Possible validation or additional logic
        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({ name });

        return res.json(category);
    }
}

export { CreateCategoryController };
