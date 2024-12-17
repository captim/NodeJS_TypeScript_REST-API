import { Sequelize, Model, DataTypes } from 'sequelize';
import { Product } from './product.interface';

export default class ProductModel extends Model<Product> implements Product {
    public id!: string;
    public name!: string;
    public description!: string;
    public price!: number;

    static initialize(sequelize: Sequelize): void {
        ProductModel.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                price: {
                    type: DataTypes.FLOAT,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: 'products',
            }
        );
    }
}