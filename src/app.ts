import express from "express";
import { Sequelize } from 'sequelize';
import { productRouter } from "./products/product.route";
import ProductModel from "./products/product.model";

const app = express ();
app.use(express.json());
const PORT: number = parseInt(process.env.PORT || "3000", 10);

const sequelize: Sequelize = new Sequelize('node_rest_api_scheme', 'root', 'root', {
	host: '127.0.0.1',
	dialect: 'mysql',
	port: 3306,
});

ProductModel.initialize(sequelize);

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.error("Database connection failed:", err));

sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");
    app.use('/product', productRouter)
    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", PORT);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });  