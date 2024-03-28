import { transactionRoutes } from "./transaction.route";
import { Application } from "express";

export const routes = (app: Application) => {
    transactionRoutes(app);
}