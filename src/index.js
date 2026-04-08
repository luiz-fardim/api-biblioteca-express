import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import livrosRoutes from './routes/livros.js'
import userRoutes from './routes/user.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5500'
}))

app.use('/livros', livrosRoutes)
app.use('/users', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})