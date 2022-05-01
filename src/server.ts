import express from "express";
const PORT = 3333;

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "Hello TypeScript"});
})

app.listen( PORT, () =>  console.log(`Server running at: ${PORT}`) );