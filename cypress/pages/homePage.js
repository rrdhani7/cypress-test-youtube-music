class loginPage{
    elements={
        searchBtn: () => cy.get('.style-scope ytmusic-search-box'),
        searchField: () => cy.get('input[class="style-scope ytmusic-search-box"]'),
        firstMusicPlayBtn: () => cy.get('ytmusic-play-button-renderer[id="play-button"]').first(),
        exploreTabBtn: () => cy.contains('Eksplorasi'),
        libraryTabBtn: () => cy.contains('Koleksi')
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

    clickLibraryTab(){
        this.elements.libraryTabBtn().click()
    }

}

module.exports = new loginPage();