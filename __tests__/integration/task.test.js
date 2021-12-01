const request = require("supertest");
const app = require('../../src/config/express');

describe("Create Task", () => {
  it("return created", async () => {
    const response = await request(app)
      .post("/task")
      .send({ name: "Concluir o projeto", concluded: false });

      expect(response.status).toBe(201);
  });

  it("return validation error", async () => {
    const response = await request(app)
      .post("/task")
      .send({ name: "Concluir o projeto", concluded: 2 });

      expect(response.status).toBe(422);
  });

});
