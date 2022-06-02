import {CreateLessonData, LessonsRepository} from '../LessonsRepository';
import { prisma } from './../../prisma';

export class PrismaLessonsRepository implements LessonsRepository{
    async create(data: CreateLessonData) {
        await prisma.lesson.create({
            data
        })

}
}