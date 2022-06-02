//inverse dependency
import {prisma} from '../prisma';
import { LessonsRepository } from "../repositories/LessonsRepository";


interface CreateLessonRequest{
    title: string;
    description?: string;
}

export class CreateLessonDataimport {
    constructor(
        private lessonsRepository: LessonsRepository,
    ){}

    async execute({ title, description}:CreateLessonRequest){

        //posso verificar se já existe um titulo igual
        
        if(!title){
            throw new Error('Title is required')
        }
        await this.lessonsRepository.create({
            title, description
        })

    }
}
