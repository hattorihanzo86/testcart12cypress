import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://dummyjson.com/products'
Given('Get all products', () => {
  cy.visit(url)
})