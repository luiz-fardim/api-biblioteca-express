import db  from '../database.js'
import { livroSchema, livroUpdateSchema } from '../schemas/livroSchema.js'

export const getLivros = (req, res) => {
    const livro = db.prepare('SELECT * FROM livros').all()
    res.json(livro)
}

export const getLivroById = (req, res) => {
    const livro = db.prepare('SELECT * FROM livros WHERE id = ?').get(req.params.id)
    if (!livro) return res.status(404).json({ mensagem: "Livro não encontrado."})
    res.json(livro)
}

export const createLivro = (req, res) => {
    // validação de dados com zod
    const resultado = livroSchema.safeParse(req.body)
    if (!resultado.success) return res.status(400).json({ erros: resultado.error.flatten().fieldErrors})
    
    // lógica da rota
    const { titulo, autor, ano} = resultado.data
    const result = db.prepare('INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)').run(titulo, autor, ano)
    res.status(201).json({id: result.lastInsertRowid, titulo, autor, ano})
}

export const updateLivro = (req, res) => {
    // validação com zod
    const resultado = livroUpdateSchema.safeParse(req.body)
    if (!resultado.success) return res.status(400).json({ erros: resultado.error.flatten().fieldErrors})    

    // lógica da rota       
    const {titulo, autor, ano, id} = resultado.data
    const result = db.prepare('UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?').run(titulo, autor, ano, id)  
    if (result.changes === 0) return res.status(404).json({mensagem: "Livro não encontrado."})
    res.json({mensagem: "Livro atualizado com sucesso!"})
}

export const deleteLivro = (req, res) => {
    const result = db.prepare('DELETE FROM livros WHERE id = ?').run(req.params.id)
    if (result.changes === 0) return res.status(404).json({mensagem: "Livro não encontrado."})
    res.json({mensagem: "Livro deletado com sucesso!"})
}   

export const createUser = (req, res) => {
    const { nome, email } = req.body
    const result = db.prepare('INSERT INTO users (nome, email) VALUES (?, ?)').run(nome, email)
    res.status(201).json({id: result.lastInsertRowid, nome, email})
}
