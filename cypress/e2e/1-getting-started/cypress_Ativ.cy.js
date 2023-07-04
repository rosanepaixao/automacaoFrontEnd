/// <reference types = "cypress"/>

describe('Tarefa', () => {
    beforeEach(() => {
        cy.visit('https://api.new.mentorama.com.br/storage/media-files/QA1/M4/tarefa_1.html')


    })


    it('Preencho meu nome', () => {
        cy.get('input[name="name"]').type("Rosane");

       // cy.get('input[name="name"]').type("ROSANE");

        cy.get('input[name="height"]').type("1,59");
    
        cy.get('input[name="weight"]').type("68");
   
        cy.get('button').click();

        cy.get('div[class="user-info"]').should('be.visible').contains("Rosane");
        //cy.get('pre[class="user-name"]').contains("NOME");
       // cy.get('div[class="user-info"]').should('be.visible').contains("ROSANE");
        //Valida se contem o NOME no retorno do calculo do IMC
        //cy.get('span[class="user-result"]').should('be.visible').contains("Acima do peso");
        //cy.get('span[class="user-result"]').contains("Acima do peso");


    })
})