# cypress/e2e/feature/LP.feature
Feature: Landing page
    Scenario: Sucesso
        Given Que já acessei minha LP
        When Preenchi o campo data
        When Preenchi a pontuação
        When Preenchi a minha opnião
        When Clico no botão enviar
        Then Sera enviados meus dados