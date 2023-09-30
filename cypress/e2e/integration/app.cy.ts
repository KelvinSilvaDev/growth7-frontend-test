import 'cypress-file-upload';


describe('My App', () => {
  it('should display the title', () => {
    cy.visit('http://localhost:5173'); 
    cy.get('h1').should('contain', 'Divisão de Jobs');
  });

  it('should upload a JSON file', () => {
    cy.visit('http://localhost:5173'); 
    cy.fixture('teste.json').then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent,
        fileName: 'teste.json',
        mimeType: 'application/json',
      });
    });
  });
  
});
