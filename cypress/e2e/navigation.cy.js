describe("Navigation Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });

    it("should open the Home page", () => {
        cy.get("#homePage").click({ force: true });
        cy.get("h2").should("contain", "A Digital Study Solution for the Modern World");
    });

    it("should open the About page", () => {
        cy.get("#aboutPage").click({ force: true });
        cy.get("h2").should("contain", "About Study Night");
    });

    it("should open the Create Set page", () => {
        cy.get("#cardSetPage").click({ force: true });
        cy.get("h2").should("contain", "Study Set Library");
    });
});
