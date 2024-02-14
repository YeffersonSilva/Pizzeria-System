import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

/**
 * Controller for listing products by category.
 * This class handles requests to retrieve all products associated with a specific category.
 */
class ListByCategoryController {
  /**
   * Handles the HTTP request to list products by category.
   * 
   * Expects a category ID to be provided as a query parameter. This ID is used to fetch all products
   * that are associated with the given category.
   * 
   * @param {Request} req - The Express request object. It must include a `category_id` query parameter.
   * @param {Response} res - The Express response object, used to send the filtered list of products back to the client.
   * @returns {Promise<Response>} - Returns a promise that resolves to the JSON response object containing an array of products within the specified category.
   * 
   * @example
   * // Example usage:
   * const controller = new ListByCategoryController();
   * router.get('/products/by-category', (req, res) => controller.handle(req, res));
   */
  async handle(req: Request, res: Response): Promise<Response> {
    const category_id = req.query.category_id as string;
    
    const listByCategoryService = new ListByCategoryService();
    
    const products = await listByCategoryService.execute({ category_id });

    return res.json(products);
  }
}

export { ListByCategoryController };
