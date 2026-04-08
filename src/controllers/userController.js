import db  from '../database.js'
import { userSchema } from '../schemas/userSchema.js'

export const createUser = (req, res) => {
    // validação de dados com zod
    const resultado = userSchema.safeParse(req.body)
    if (!resultado.success) return res.status(400).json({ erros: resultado.error.flatten().fieldErrors})

    // lógica da rota
    const { nome, email } = resultado.data
    const result = db.prepare('INSERT INTO users (nome, email) VALUES (?, ?)').run(nome, email)
    res.status(201).json({id: result.lastInsertRowid, nome, email})
}
