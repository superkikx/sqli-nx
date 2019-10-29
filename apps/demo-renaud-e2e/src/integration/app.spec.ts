import { getGreeting } from "../support/app.po";

describe("demo-renaud", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to demo-renaud!");
  });
});
