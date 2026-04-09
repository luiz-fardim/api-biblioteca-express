import db from '../database.js'

export const createUser = (nome, email) => {
    if (!nome) {
        return { error: "Nome é obrigatório" }
    }

    if (!email) {
        return { error: "Email é obrigatório" }
    }

    const userExists = db
        .prepare('SELECT * FROM users WHERE email = ?')
        .get(email)

    if (userExists) {
        return { error: "Email já cadastrado" }
    }

    const result = db
        .prepare('INSERT INTO users (nome, email) VALUES (?, ?)')
        .run(nome, email)

    return {
        id: result.lastInsertRowid,
        nome,
        email
    }
}