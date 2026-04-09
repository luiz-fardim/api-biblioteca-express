import db from '../database.js'

export const getAllLivros = () => {
    return db.prepare('SELECT * FROM livros').all()
}

export const getLivroById = (id) => {
    const livro = db.prepare('SELECT * FROM livros WHERE id = ?').get(id)

    if (!livro) {
        return { error: "Livro não encontrado." }
    }

    return livro
}

export const createLivro = (titulo, autor, ano) => {
    if (!titulo) {
        return { error: "Título é obrigatório" }
    }

    const result = db
        .prepare('INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)')
        .run(titulo, autor, ano)

    return {
        id: result.lastInsertRowid,
        titulo,
        autor,
        ano
    }
}

export const updateLivro = (id, titulo, autor, ano) => {
    const result = db
        .prepare('UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?')
        .run(titulo, autor, ano, id)

    if (result.changes === 0) {
        return { error: "Livro não encontrado." }
    }

    return { message: "Livro atualizado com sucesso!" }
}

export const deleteLivro = (id) => {
    const result = db
        .prepare('DELETE FROM livros WHERE id = ?')
        .run(id)

    if (result.changes === 0) {
        return { error: "Livro não encontrado." }
    }

    return { message: "Livro deletado com sucesso!" }
}