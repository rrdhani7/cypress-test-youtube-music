class nowPlayingPage{
    elements={
        pauseBtn: () => cy.get('tp-yt-paper-icon-button[id="play-pause-button"]'),
        pausedIcon: () => cy.get('ytmusic-play-button-renderer[state="paused"]'),
        playingIcon: () => cy.get('ytmusic-play-button-renderer[state="playing"]'),
        forwardBtn: () => cy.get('[class="next-button style-scope ytmusic-player-bar"]'),
        backwardBtn: () => cy.get('[class="previous-button style-scope ytmusic-player-bar"]'),
        muteBtn: () => cy.get('[class="volume style-scope ytmusic-player-bar"]'),
        mutedIcon: () => cy.get('tp-yt-paper-slider[aria-valuenow="0"]'),
        unmutedIcon: () => cy.get('tp-yt-paper-slider[aria-valuenow="100"]')
    }

    verifyMusicIsPlaying(){
        cy.url().should('include', '/watch').end()
    }

    pauseMusic(){
        this.elements.pauseBtn().click()
    }

    unpauseMusic(){
        this.elements.pauseBtn().click()
    }

    verifyMusicIsPaused(){
        this.elements.pausedIcon().last().should('be.visible')
    }

    verifyMusicIsPlaying(){
        this.elements.playingIcon().last().should('be.visible')
    }    

    clickForwardMusic(){
        var initialUrl = cy.url()
        this.elements.forwardBtn().click()
        console.log("initial url: " + initialUrl)
        console.log("final url: " + cy.url())
        cy.url().should('not.equal', initialUrl)
    }

    clickBackwardMusic(){
        var initialUrl = cy.url()
        this.elements.backwardBtn().dblclick()
        cy.log("initial url: " + initialUrl)
        cy.log("final url: " + cy.url())
        cy.url().should('not.equal', initialUrl)
    }

    clickMute(){
        this.elements.muteBtn().click({force: true})
        this.elements.mutedIcon().first().should('not.be.null')
    }

    clickUnmute(){
        this.elements.muteBtn().click({force: true})
        this.elements.unmutedIcon().first().should('not.be.null')
    }

}

module.exports = new nowPlayingPage();