const express = require("express");
const cors = require("cors")
const db = require("./database/config")

const server = express()

server.use(cors())
server.use(express.json())

server.get("/", (req, res) => {
    res.json({
        message: "API works",
    })
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.post("/test", async (req, res) => {
    try {
		const data = await db("testData").insert(req.body)
		res.status(201).json(data)
	} catch (err) {
		next(err)
	}
})

server.delete("/test/:id", async (req, res) => {
    try {
		const data = await db("testData").where("id", req.params.id).del()
		res.status(201).json("removed")
	} catch (err) {
		next(err)
	}
})


module.exports = server;