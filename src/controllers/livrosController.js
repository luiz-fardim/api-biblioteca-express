import * as livroModel from '../models/livroModel.js'
import { livroSchema, livroUpdateSchema } from '../schemas/livroSchema.js'

export const getLivros = (req, res) => {
    const livros = livroModel.getAllLivros()
    res.json(livros)
}

export const getLivroById = (req, res) => {
    const result = livroModel.getLivroById(req.params.id)

    if (result.error) {
        return res.status(404).json(result)
    }

    res.json(result)
}

export const createLivro = (req, res) => {
    const resultado = livroSchema.safeParse(req.body)

    if (!resultado.success) {
        return res.status(400).json({
            erros: resultado.error.flatten().fieldErrors
        })
    }

    const { titulo, autor, ano } = resultado.data
    const result = livroModel.createLivro(titulo, autor, ano)

    if (result.error) {
        return res.status(400).json(result)
    }

    res.status(201).json(result)
}

export const updateLivro = (req, res) => {
    const resultado = livroUpdateSchema.safeParse(req.body)

    if (!resultado.success) {
        return res.status(400).json({
            erros: resultado.error.flatten().fieldErrors
        })
    }

    const { titulo, autor, ano, id } = resultado.data
    const result = livroModel.updateLivro(id, titulo, autor, ano)

    if (result.error) {
        return res.status(404).json(result)
    }

    res.json(result)
}

export const deleteLivro = (req, res) => {
    const result = livroModel.deleteLivro(req.params.id)

    if (result.error) {
        return res.status(404).json(result)
    }

    res.json(result)
}