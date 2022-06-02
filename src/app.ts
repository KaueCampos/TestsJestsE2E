import express from "express";
import { request } from "http";
import { PrismaLessonsRepository } from "./repositories/prisma/PrismaLessonsRepository";
import { CreateLessonDataimport } from "./services/CreateLesson";

export const app = express();

app.use(express.json());

app.post("/lessons", async (request, response) => {
  const { title, description } = request.body;

  const prismaLessonsRepository = new PrismaLessonsRepository();
  const createLessonDataimport = new CreateLessonDataimport(
    prismaLessonsRepository
  );

  try {
    await createLessonDataimport.execute({ title, description });

    return response.status(201).send();
  } catch (err: any) {}
  return response.status(400).json({
    error: "Unexpected error while creating new lesson",
  });
});
