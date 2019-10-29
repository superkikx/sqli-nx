import { getGreeting } from "../support/app.po";

describe("momo-demo", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to momo-demo!");
  });
});
