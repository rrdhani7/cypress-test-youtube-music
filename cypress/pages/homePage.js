class loginPage{
    elements={
        searchBtn: () => cy.get('.style-scope ytmusic-search-box'),
        searchField: () => cy.get('input[class="style-scope ytmusic-search-box"]'),
        firstMusicPlayBtn: () => cy.get('ytmusic-play-button-renderer[id="play-button"]').first(),
        exploreTabBtn: () => cy.get('ytmusic-pivot-bar-item-renderer[tab-id="FEmusic_explore"]')
    }

    clickSearch(){
        this.elements.searchBtn().click()
    }

    inputKeywordSearchAndEnter(keyword){
        this.elements.searchField().type(keyword + '{enter}')
    }

    clickFirstMusic(){
        this.elements.firstMusicPlayBtn().click()
    }

    clickExploreTab(){
        this.elements.exploreTabBtn().click()
    }

}

module.exports = new loginPage();