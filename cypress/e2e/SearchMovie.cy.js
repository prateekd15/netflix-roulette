describe("SearchMovie component", () => {
    it("Should search a movie and render the response", () => {
      cy.visit("http://localhost:3000/");
      
      //Check search form is visible
      cy.get("input").should('be.visible');
      cy.get("input").click();
      
      //Search for a movie
      cy.get("input").type("Beauty and the beast");
      
      //Search button should be visible
      cy.get("div.search-form > button").should('be.visible');
      cy.get("div.search-form > button").click();
      
      //Result should appear
      cy.get("div.row > div:nth-of-type(1) > div > div > img").should('be.visible');
      cy.get("div.row > div:nth-of-type(1) > div > div > img").click();
      
      //On clicking the result, MovieDetails should be rendered
      cy.get("div.movie-details_inner > div > div:nth-of-type(1) > span").should('be.visible');
      cy.get("div.movie-details_inner > div > div:nth-of-type(1) > span").should('contain', 'Beauty and the Beast');
    });
  });
  