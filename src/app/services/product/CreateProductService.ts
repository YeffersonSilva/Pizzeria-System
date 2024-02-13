import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string; // Cambiado a string para coincidir con tu entrada desde Insomnia
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({ name, price, description, banner, category_id }: ProductRequest) {
    try {
      // Convertir price de string a number
      const numericPrice = parseFloat(price);
      if (isNaN(numericPrice)) {
        throw new Error("Price must be a valid number");
      }

      const product = await prismaClient.product.create({
        data: {
          name: name,
          price: numericPrice, // Usamos numericPrice ya que es un número
          description: description,
          banner: banner,
          categoryId: category_id, // Asegúrate de que el esquema de tu base de datos use categoryId y no category_id
        },
      });
      return { ok: true, product }; // Devolvemos el producto creado para confirmar el éxito
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Failed to create product");
    }
  }
}

export { CreateProductService };
