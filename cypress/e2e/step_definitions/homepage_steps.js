import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("the user visits homepage", () => {
    cy.visit("");
    //Aceptar las cookies
    cy.contains("AGREE").click()
  });

 When("the user select answer {string}", (answer)=> {
  //Buscar el elemento que contenga el elemento exacto
  cy.contains(new RegExp(`^${answer}$`)).click();
 })

 When("the user click on submit answers", () => {
  cy.contains("Submit Answers").click()
 })

 When("user see score {string}", (scoretext) => {
  //Buscamos el elemento que contenga el texto y comprobamos que esta visible 
  cy.contains(scoretext).should('be.visible');
 })

 Then("the user see score letter {string}", (scoreletter) => {
  console.log("Paso 'the user see score letter' ejecutado");
  cy.get(".gigantic").should('have.text', scoreletter);
});

Then("the user see for question {string} correction {string}", (questionnumber, correctiontext) => {
  // Obtenemos el elemento con el texto segun el numero de pregunta (contanis)
  // Obtenemos el padre la caja que contiene la pregunta (parent)
  // Dentro del padre bucamos la palabra Wrong o correct (correctiontext) usando filter y contains
  cy.contains("Question #" + questionnumber).parent().parent().filter(':contains("' + correctiontext + '")').should('be.visible');
});