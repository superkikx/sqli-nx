import { getGreeting } from "../support/app.po";

describe("audioplayer-test", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to audioplayer-test!");
  });
});
