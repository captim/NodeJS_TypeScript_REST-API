import ProductModel from './product.model';
import { Product } from './product.interface';

class ProductService {
    async getProductById(id: string): Promise<Product | null> {
        return await ProductModel.findByPk(id);
    }

    async getProducts(): Promise<Product[] | null> {
        return await ProductModel.findAll();
    }

    async createProduct(product: Product): Promise<Product | null> {
        return await ProductModel.create(product);
    }

    async updateProduct(id: string, product: Product) {
        await ProductModel.update(product, {where: {id: id}});
    }
    
    async deleteProduct(id: string) {
        await ProductModel.destroy({
            where: {id: id}
          });
    }
}

export const productService = new ProductService();