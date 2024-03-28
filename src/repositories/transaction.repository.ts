import { date } from 'yup';
import { prisma } from '../services/prisma'

type Transaction = {
    description: string;
    type: string;
    category: string;
    price: number;
}

type returnTransaction = {
    code: number;
    message: string;
    id: string;
}

type ReturnTransactionOrMessage = {
    code: number;
    message: string;
}


export class TransactionRepository {

    async create(data: Transaction): Promise<returnTransaction> {
        const transaction = await prisma.transaction.create({
            data
        })

        return { code: 200, message: ' Transaction created successfully', id: transaction.id }
    }

    async getAll(): Promise<Transaction[]> {
        const transactions = await prisma.transaction.findMany({})
        return transactions
    }

    async getById(id: string): Promise<Transaction | ReturnTransactionOrMessage> {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id
            },
        })

        if (!transaction) throw { code: 404, message: 'Transaction not found' }
        return transaction
    }

    async update(id: string, data: Transaction): Promise<ReturnTransactionOrMessage | Transaction> {
        const transaction = await prisma.transaction.update({
            data,
            where: {
                id
            }
        })

        if (!transaction) throw { code: 404, message: 'Transaction not found' }
        return transaction
    }

    async remove(id: string): Promise<ReturnTransactionOrMessage> {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id,
            },

        })
        if (!transaction) throw {code: 404,  message: 'Transaction not found'}

        await prisma.transaction.delete({
            where:{
                id,
            }
        })

        return {code: 200, message: 'Transaction deleted successfully'}
    }
}