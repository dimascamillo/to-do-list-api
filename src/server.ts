import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

const port = 3333;

//GET, POST, PUT, PATCH, DELETE

app.get('/tasks', async (req, res) => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app.listen({
  port: port,
}).then(() => {
  console.log(`[STATUS] Server listening on ${port}`);
})