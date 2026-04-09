import * as userModel from '../models/userModel.js'
import { userSchema } from '../schemas/userSchema.js'

export const createUser = (req, res) => {
    const resultado = userSchema.safeParse(req.body)

    if (!resultado.success) {
        return res.status(400).json({
            erros: resultado.error.flatten().fieldErrors
        })
    }

    const { nome, email } = resultado.data

    const result = userModel.createUser(nome, email)

    if (result.error) {
        return res.status(400).json(result)
    }

    res.status(201).json(result)
}