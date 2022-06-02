import request from "supertest";
import { app }from './app'


test('[e2e]  CreateLessonDataimport', async () => {
    const response = await request(app)
    .post('/lessons')
    .send({ title: 'teste', description: 'teste' })
    expect(response.status).toBe(201)
    expect(response.body.error).toBeFalsy()
})