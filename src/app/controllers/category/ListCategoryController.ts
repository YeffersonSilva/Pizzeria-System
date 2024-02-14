import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

/**
 * Controller for listing categories.
 * This class handles requests to list all categories in the application.
 */
class ListCategoryController {
  /**
   * Handles the HTTP request to list all categories.
   * 
   * This method fetches all categories from the database and returns them.
   * 
   * @param {Request} req - The Express request object. It is not used in this method but included for consistency with Express handler signature.
   * @param {Response} res - The Express response object, used to send the response back to the client.
   * @returns {Promise<Response>} - Returns a promise that resolves to the JSON response object with the list of all categories.
   * 
   * @example
   * // Example usage:
   * const controller = new ListCategoryController();
   * router.get('/categories', (req, res) => controller.handle(req, res));
   */
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoryService = new ListCategoryService();

    const categories = await listCategoryService.execute();

    return res.json(categories);
  }
}

export { ListCategoryController };
