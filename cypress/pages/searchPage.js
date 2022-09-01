class searchPage{
    elements={
        
    }

    clickSpecificSong(title){
        cy.contains(title).click()
        cy.url().should('include', '/watch').end()
    }
}

module.exports = new searchPage();