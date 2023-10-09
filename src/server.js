import http from "node:http";

const tasks = [];
const port = 3333;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/tasks")
    return res
      .setHeader(
        "Content-Type",
        "application/json",
      )
      .end(JSON.stringify(tasks));

  if (method === "POST" && url === "/tasks") {
    tasks.push({
      id: 1,
      description: "Estudar NODE.js",
      duracao: 60,
    });

    return res
      .writeHead(201)
      .end("[Status] Tarefa criada com sucesso.");
  }

  return res
    .writeHead(404)
    .end("[Status] Route not found.");
});

server.listen(port);
