class libraryPage{
    elements={
        firstMusicPlayBtn: () => cy.get('ytmusic-play-button-renderer[id="play-button"]').first()
    }

    clickFirstMusic(){
        this.elements.firstMusicPlayBtn().click()
    }

}

module.exports = new libraryPage();