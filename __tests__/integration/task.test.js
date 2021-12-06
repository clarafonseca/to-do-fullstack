/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/config/express');

describe('Create Task', () => {
  it('should return created', async () => {
    const response = await request(app)
      .post('/api/task')
      .send({ name: 'Concluir o projeto', concluded: false });

    expect(response.status).toBe(201);
  });

  it('should return validation error', async () => {
    const response = await request(app)
      .post('/api/task')
      .send({ name: 'Concluir o projeto', concluded: 2 });

    expect(response.status).toBe(422);
  });
});

describe('Update Task', () => {
  it('should return ok', async () => {
    const response = await request(app)
      .put('/api/task/2')
      .send({ concluded: true });

    expect(response.status).toBe(200);
  });

  it('should return Unprocessable Entity', async () => {
    const response = await request(app)
      .put('/api/task/undefined')
      .send({ concluded: true });

    expect(response.status).toBe(422);
  });
});
