import { getGreeting } from "../support/app.po";

describe("demo-audio-player", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to demo-audio-player!");
  });
});
