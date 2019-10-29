import { getGreeting } from "../support/app.po";

describe("demo-abdeljelil", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to demo-abdeljelil!");
  });
});
