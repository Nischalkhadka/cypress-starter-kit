/// <reference types="cypress" />

describe ('Search for Leapfrog technology ', () =>{
    
    it("should visit Google Homepage", () => {
        cy.visit("")
    })
    
    it("should search for Leapfrog", () => {
        cy.get('.gLFyf').type('Leapfrog technology').type('{enter}')
    })

})
