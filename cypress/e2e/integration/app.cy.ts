import 'cypress-file-upload';


describe('My App', () => {
  it('should display the title', () => {
    cy.visit('http://localhost:5173'); 
    cy.get('h1').should('contain', 'Divisão de Jobs');
  });

  it('should upload a JSON file', () => {
    cy.visit('http://localhost:5173'); 
    cy.fixture('example.json').then((fileContent) => {
      const blob = new Blob([JSON.stringify(fileContent)], { type: 'application/json' });
      const fileName = 'example.json';
  
      cy.get('input[type="file"]').attachFile({
        fileContent: blob,
        fileName: fileName,
        mimeType: 'application/json',
      });
  
      
    });
  });
  
});
