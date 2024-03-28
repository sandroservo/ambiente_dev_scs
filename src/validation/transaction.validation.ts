import * as yup from "yup"

export const TransactionValidation = yup.object({
    description: yup.string().required(),
    type:        yup.string().required(),
    category:    yup.string().required(),
    price:       yup.number().required(),
})