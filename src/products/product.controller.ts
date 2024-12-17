import { Request, Response } from 'express';
import { productService } from "./product.service";
import { StatusCodes } from 'http-status-codes';

class ProductController {
    async getProductById(req: Request, res: Response) {
        try {
            const id = req.params.productId;
            const product = await productService.getProductById(id);
            if (!product) {
                res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
            } else {
                res.status(StatusCodes.OK).json(product);
            }
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async getProducts(req: Request, res: Response) {
        try {
            const products = await productService.getProducts();
            res.status(StatusCodes.OK).json(products);
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const product = req.body;
            const result = productService.createProduct(product);
            res.status(StatusCodes.OK).json(result);
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const product = req.body;
            const id = req.params.productId;
            productService.updateProduct(id, product);
            res.status(StatusCodes.OK).send();
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const id = req.params.productId;
            const result = productService.deleteProduct(id);
            res.status(StatusCodes.OK).send();
        } catch (error) {
            console.log(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error });
        }
    }
}

export const productController = new ProductController();