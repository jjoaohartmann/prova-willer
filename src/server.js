import express from "express"
import cors from "cors"
import { Prisma } from './lib/prisma.ts'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.post("/equipes", async (req, res) => {
 
})

app.get("/equipes", async (req, res) => {

})

app.post("/desenvolvedores", async (req, res) => {

})

app.get("/equipes/:id/desenvolvedores", async (req, req) => {

})

app.put("/desenvolvedores", async (req, res) => {

})

app.put("/equipe", async (req, res) => {

})

app.delete("desenvolvedor/:id", async (req, res) => {

})

app.delete("/equipe/:id", async (req, res) => {

})

app.listen(PORT, () => {
    console.log("API Rodando")
})