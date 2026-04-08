import { z } from 'zod'

export const userSchema = z.object({
    nome: z.string({ error: "Nome é obrigatório." })
        .min(2, "Nome deve ter pelo menos 2 caracteres.")
        .max(100, "Nome deve ter no máximo 100 caracteres."),
    email: z.string({ error: "Email é obrigatório." })
        .email("Email inválido.")
        .max(100, "Email deve ter no máximo 100 caracteres.")
})
