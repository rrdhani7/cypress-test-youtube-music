class nowPlayingPage{
    elements={
        pauseBtn: () => cy.get('tp-yt-paper-icon-button[title="Jeda"]')
    }

    verifyMusicIsPlaying(){
        cy.url().should('include', '/watch').end()
    }

    pauseMusic(){
        this.elements.pauseBtn().click()
    }
}

module.exports = new nowPlayingPage();