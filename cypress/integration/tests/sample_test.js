describe ('Verify that the Author is Nischal Khadka', () =>{
    
    it("should visit the blog", () => {
        cy.visit("/blog/device-fragmentation-during-mobile-testing/")
    })

    it("should scroll to the Author section", () =>{
        cy.get('article > :nth-child(28)').scrollIntoView()
        .should('be.visible')
    })

    it("should verify the author", () =>{
        cy.get('article > :nth-child(29)').contains('Nischal Khadka')
    })

})