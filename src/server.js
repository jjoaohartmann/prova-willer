import express from "express"
import cors from "cors"
import { prisma } from "./lib/prisma.ts"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.post("/equipes", async (req, res) => {
    const { nome, especialidade } = req.body;

    const novaEquipe = await prisma.equipe.create ({
        data:{
            nome,
            especialidade
        }
    })
    return res.status(201).json ({novaEquipe})
})

app.get("/equipes", async (req, res) => {
    const equipes = await prisma.equipe.findMany({
        include:{ desenvolvedores: true}
    })
    return res.status(200).json(equipes)
})


app.post("/desenvolvedores", async (req, res) => {
    const {nome, nivel, equipeId} = req.body;
    const novoDev = await prisma.desenvolvedor.create ({
        data:{
            nome,
            nivel,
            equipeId
        }
    })
    return res.status(201).json({ novoDev })
})


app.get("/equipes/:id/desenvolvedores", async (req, req) => {

})


app.put("/desenvolvedores/:id", async (req, res) => {
    const {id, nome, nivel, equipeId } = req.body;

    const desenvolvedorAtualizado = await prisma.desenvolvedores.update({
        where:{id },
        data: { nome, nivel, equipeId}
    })
    return res.status(201).json({mensagem: "Atualizado", desenvolvedorAtualizado})
})

// app.put("/equipe", async (req, res) => {

// })

app.delete("desenvolvedores/:id", async (req, res) => {
    const {id} = req.params;
    const equipeId = req.equipeId;

})


// app.delete("/equipe/:id", async (req, res) => {

// })


app.listen(PORT, () => {
    console.log("API Rodando")
})