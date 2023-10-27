describe('GenreSelect Component Tests', () => {
    const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Science Fiction'];
    const selectedGenre = 'Action';
  
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Should display genre buttons with correct classes', () => {
      cy.get('.genre-container').should('exist');
  
      genres.forEach((genre) => {
        const buttonClass = genre === selectedGenre ? 'red' : 'white';
        cy.get('.genre-container')
          .get(`button:contains(${genre})`)
          .should('have.class', buttonClass);
      });
    });
  
    it('Should change the selected genre on button click', () => {
      const newGenre = "Comedy"; 
      cy.get('.genre-container')
        .get(`button:contains(${newGenre})`)
        .click();
  
      cy.get('.genre-container')
        .get(`button:contains(${newGenre})`)
        .should('have.class', 'red');
    });
  });
  