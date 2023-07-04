/// <reference types="Cypress" />

import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {landingPage} from "../pages/landingPage";

Given("Que já acessei minha LP", () => {
    cy.visit("https://api.new.mentorama.com.br/storage/media-files/QA1/M3/2/tarefa_2.html");
});

When("Preenchi o campo data", () => {
    landingPage.elements.dateInput().type("19/06/2023");

})

When("Preenchi a pontuação", () => {
    landingPage.elements.markInput().type("10.0");

})

When("Preenchi a minha opnião", () => {
    landingPage.elements.commentfield().type("Excelente academia ");

})

When("Clico no botão enviar", () => {
    landingPage.elements.sendButtonInput().click();

})

Then("Sera enviados meus dados", () => {
    landingPage.elements.contentCommentsListContainer().should('be.visible');

})