describe("Counter Component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("Should start with an initial count of 27", () => {
      cy.get(".counter__title").should("contain", "Counter: 27");
    });
  
    it("Should increment the count when the increment button is clicked", () => {
      cy.get(".counter__btn").contains("+").click();
      cy.get(".counter__title").should("contain", "Counter: 28");
    });
  
    it("Should decrement the count when the decrement button is clicked", () => {
      cy.get(".counter__btn").contains("-").click();
      cy.get(".counter__title").should("contain", "Counter: 26");
    });
  
    it("Should handle multiple increments and decrements", () => {
      cy.get(".counter__btn").contains("+").click();
      cy.get(".counter__title").should("contain", "Counter: 28");
      cy.get(".counter__btn").contains("+").click();
      cy.get(".counter__title").should("contain", "Counter: 29");
  
      cy.get(".counter__btn").contains("-").click();
      cy.get(".counter__title").should("contain", "Counter: 28");
      cy.get(".counter__btn").contains("-").click();
      cy.get(".counter__title").should("contain", "Counter: 27");
    });
});
  