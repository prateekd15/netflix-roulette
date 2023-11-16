describe("SortController", () => {
    it("tests SortController", () => {
      cy.visit("http://localhost:3000/");
      
      //Should contain a sort controller with name Action
      cy.get("div.genre-sort-control button:nth-of-type(2)").should('contain', 'Action');
      cy.get("div.genre-sort-control button:nth-of-type(2)").click();
      
      //In the results page, it should display NEXT  PAGE button
      cy.get("div.movie_list-movie-tile-container button:nth-of-type(2)").should('be.visible');
      cy.get("div.movie_list-movie-tile-container button:nth-of-type(2)").contains('Next Page');
      cy.get("div.movie_list-movie-tile-container button:nth-of-type(2)").click();
      
      //In the results page, it should display NEXT  PAGE button
      cy.get("div.movie_list-movie-tile-container button:nth-of-type(1)").should('be.visible');
      cy.get("div.movie_list-movie-tile-container button:nth-of-type(1)").contains('Previous Page');
      cy.get("div.movie_list-movie-tile-container button:nth-of-type(1)").click();

      //Click the first result
      cy.get("div.row > div:nth-of-type(1) > div > div > img").click();
      cy.get("div.row > div:nth-of-type(1) > div > div > img").should('be.visible');
    });
  });
  