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
  cy.contains(answer).click()
 })

 When("the user click on submit answers", () => {
  cy.contains("Submit Answers").click()
 })