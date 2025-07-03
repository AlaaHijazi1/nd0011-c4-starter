describe("Form Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
        cy.get("#cardSetPage").click();
        cy.get("h2").should("contain", "Study Set Library");
    });

    it("shows error on empty input", () => {
        cy.contains("Add New Set").click();
        cy.get('[data-cy="set_form"]').should("exist");

        cy.get('[data-cy="set_form"]').within(() => {
            cy.get('input[type="submit"]').click();
            cy.get("p").should("contain", "TITLE CANNOT BE EMPTY");
        });
    });

    it("shows error on empty inputs", () => {
        cy.get('[data-cy="1"]').click();
        cy.contains("Add New Card").should("exist").click();
        cy.get('[data-cy="card_form"]').should("exist");

        cy.get('[data-cy="card_form"]').within(() => {
            cy.get('input[type="submit"]').click();
            cy.get("p").should(
                "contain",
                "TERM AND DESCRIPTION CANNOT BE EMPTY"
            );
        });
    });
});
