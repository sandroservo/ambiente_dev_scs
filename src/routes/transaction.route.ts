import { Application } from "express";
import { TransactionController } from "../controllers/transaction.controller";


export const transactionRoutes =(app: Application) => {
    const controller = new TransactionController();

    app.post("/transaction", controller.create)
    app.get("/transaction", controller.get)
    app.get("/transaction/:id", controller.getById)
    app.put("/transaction/:id", controller.update)
    app.delete("/transaction/:id", controller.remove)
}