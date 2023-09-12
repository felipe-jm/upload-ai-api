import { fastify } from "fastify";
import { getAllPromptRoutes } from "./routes/get-all-prompts";

const app = fastify();

app.register(getAllPromptRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running..");
  });
