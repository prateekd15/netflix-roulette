describe("Router", () => {
    it("Should redirect to the path with filter params in the URL path", () => {
        cy.visit("http://localhost:3000/");
        cy.location("href").should("eq", "http://localhost:3000/?genre=All&sortBy=Release+Year&offset=0");
    });

    it("Should set filter params in the URL whenver user selects custom filters", () => {
        cy.visit("http://localhost:3000/");
        cy.location("href").should("eq", "http://localhost:3000/?genre=All&sortBy=Release+Year&offset=0");
        cy.get("div.genre-sort-control button:nth-of-type(2)").click();
        cy.location("href").should("eq", "http://localhost:3000/?genre=Action&sortBy=Release+Year&offset=0");
    });

    it("Should load filters from the URL values whenver user visits any URL with custom filter params", () => {
        cy.visit("http://localhost:3000/?genre=Action&sortBy=Title&offset=0");
        cy.get("#sort-control_select").should("contain", "Title");
    });

    it("Should rewrite the url to include currently selected movie id as a param", () => {
        cy.visit("http://localhost:3000/?genre=All&sortBy=Release+Year&offset=0");
        cy.get("div.row > div:nth-of-type(1) > div > div > img").click();
        cy.location("href").should("eq", "http://localhost:3000/447365?genre=All&sortBy=Release+Year&offset=0");
      });

});
