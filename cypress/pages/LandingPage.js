class LandingPage {
    elements = {
    dateInput: () =>  cy.get('input[class="date"]'),
    markInput: () => cy.get('input[class="mark"]'),
    commentfield: () => cy.get('textarea[name="comment"]'),
    sendButtonInput: () => cy.get('button'),
    contentCommentsListContainer: () => cy.get('#return')
    };
}

export const landingPage = new LandingPage();