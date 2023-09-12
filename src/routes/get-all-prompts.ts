import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromptRoutes(app: FastifyInstance) {
  const prompts = await prisma.promp.findMany();

  return prompts;
}
