import { getGreeting } from "../support/app.po";

describe("demo-sofiane", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to demo-sofiane!");
  });
});
