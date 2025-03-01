import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  When("the user visits homepage", () => {
    cy.visit("/quiz.php?id=10723");
    //Aceptar las cookies
    cy.contains("AGREE").click()
  });

 