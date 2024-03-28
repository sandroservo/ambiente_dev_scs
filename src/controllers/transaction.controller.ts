import { Request, Response } from "express";

import { TransactionValidation } from "../src/validation/transaction.validation"
import { TransactionRepository } from "../src/repositories/transaction.repository";


export class TransactionController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data =  await TransactionValidation.validate(req.body);
            const controller = new TransactionRepository();
            const transaction = await controller.create(data);
            return res.status(200).send(transaction);
        } catch (error) {
            return res.status(400).send(error)
        }
    }

    async get(req: Request, res: Response): Promise<Response> {
        try {
            const controller = new TransactionRepository();
            const transactions = await controller.getAll();
            return res.status(200).json(transactions)
        } catch (error) {
            return res.status(400).send(error)
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const controller = new TransactionRepository();
            const transaction = await controller.getById(String(req.params.id))
            return res.status(200).send(transaction)
        } catch (error) {
            return res.status(400).send(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const contrller = new TransactionRepository()
            const transaction = await contrller.update(String(req.params.id), req.body)
            return res.status(200).send(transaction)
        } catch (error) {
            return res.status(400).send(error)
        }
    }


    async remove(req: Request, res: Response): Promise<Response> {
        try {
            const contrller = new TransactionRepository()
            const transaction = await contrller.remove(String(req.params.id))
            return res.status(200).send(transaction)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}