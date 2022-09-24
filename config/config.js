import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const DATABASE = process.env.DATABASE;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

// console.log(
//   "DATABASE, DATABASE_USER, DATABASE_PASSWORD",
//   DATABASE,
//   DATABASE_USER,
//   DATABASE_PASSWORD
// );

const connection = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

export { connection };
