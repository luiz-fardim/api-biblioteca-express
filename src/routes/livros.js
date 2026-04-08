import { Router } from 'express'
import { getLivros, getLivroById, createLivro, updateLivro, deleteLivro } from '../controllers/livrosController.js'

const router = Router()

// GET - buscar todos os livros
router.get('/', getLivros)

// GET - buscar livro pelo id 
router.get('/:id', getLivroById)

// POST - criar livro
router.post('/', createLivro)

// PUT - atualizar livro
router.put("/:id", updateLivro)

// DELETE - deletar rota
router.delete("/:id", deleteLivro)

export default router