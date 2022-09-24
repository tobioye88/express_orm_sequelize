import { DataTypes } from "sequelize";
import { connection } from "../config/config.js";

export const Book = connection.define(
  "Book",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "books",
    // Other model options go here
  }
);
