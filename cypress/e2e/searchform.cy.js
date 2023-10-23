describe("SearchForm Component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("Should display the input field and search button", () => {
      cy.get(".search-form-input").should("exist");
      cy.get("button").contains("SEARCH").should("exist");
    });
  
    it("Should accept user input and triggers search", () => {
      const searchTerm = "Movie name 1";
      
      cy.get(".search-form-input").clear();
      cy.get(".search-form-input")
        .type(searchTerm)
        .should("have.value", searchTerm);
      cy.get("button").contains("SEARCH").click();
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("Searching for: Movie name 1");
      });
    });
  
    it("Should trigger search when Enter key is pressed", () => {
      const searchTerm = "Movie name 2";
      cy.get(".search-form-input").clear();  
      cy.get(".search-form-input").type(searchTerm).type("{enter}");
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("Searching for: Movie name 2");
      });
    });
  });
  