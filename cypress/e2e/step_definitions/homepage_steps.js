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

 When("user see score letter {string}", (scoreletter) => {
  //Obtenemos el elemento con la clase Gigantic 
  cy.get(".gigantic")

 })


