import { CreateLessonDataimport } from "./CreateLesson";
import { InMemoryLessonsRepository } from "../../test/repositories/InMemoryLessonsRepositorys";

describe("CreateLesson", () => {
  it("Está criando uma nova lesson", async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLessonDataimport(inMemoryLessonsRepository);

    await expect(
      createLesson.execute({ title: "Testando" })
    ).resolves.not.toThrow();

    expect(inMemoryLessonsRepository.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: "Testando",
        }),
      ])
    );
  })

  it("Não está criando uma nova lesson está com um titulo invalido", async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLessonDataimport(inMemoryLessonsRepository);

    await expect(
      createLesson.execute({ title: ''})
    ).rejects
    .toThrow();

    expect(inMemoryLessonsRepository.items).toEqual([]);
  });
});
