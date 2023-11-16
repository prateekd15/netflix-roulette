describe("Recording 15/11/2023 at 02:00:55", () => {
    it("Should render MovieDetails component", () => {
      cy.visit("http://localhost:3000/");
      
      //MovieTile should be visible
      cy.get("div.row > div:nth-of-type(1) > div > div > img").should('be.visible');
      cy.get("div.row > div:nth-of-type(1) > div > div > img").click();
      
      //MovieDetails should be rendered
      cy.get("div.movie-details_inner > div > div:nth-of-type(1) > span").should('be.visible');
      cy.get("div.movie-details_inner > div > div:nth-of-type(1) > span").should('contain', 'Guardians of the Galaxy Vol. 3');
      
      //After clicking the search icon in MovieDetails, search form should be rendered
      cy.get("div.movie-details_title-row img").click();
      cy.get("input").click();
      cy.get("div.search-form > button").click();
    });
  });
  