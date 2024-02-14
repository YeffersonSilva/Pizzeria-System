import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

/**
 * Controller for creating products.
 * Handles requests to add new products to the application, including uploading a banner image for the product.
 */
class CreateProductController {
  /**
   * Handles the HTTP request to create a new product.
   * 
   * Expects the request body to contain name, price, description, and category_id of the product.
   * A file upload for the product's banner image is required.
   * 
   * @param {Request} req - The Express request object, including the product data and the uploaded file.
   * @param {Response} res - The Express response object, used to send the created product back to the client.
   * @returns {Promise<Response>} - Returns a promise that resolves to the JSON response object with the details of the created product.
   * 
   * @throws {Error} - Throws an error if the banner image is not included in the request.
   * 
   * @example
   * // Example usage:
   * const controller = new CreateProductController();
   * router.post('/products', upload.single('banner'), (req, res) => controller.handle(req, res));
   */
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, price, description, category_id } = req.body;
    const createProductService = new CreateProductService();

    if (!req.file) {
      throw new Error("Banner is required");
    } else {
      const { originalname, filename: banner } = req.file;
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
      });

      return res.json(product);
    }
  }
}

export { CreateProductController };
