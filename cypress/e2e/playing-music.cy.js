import homePage from "../pages/homePage"
import searchPage from "../pages/searchPage"
import nowPlayingPage from "../pages/nowPlayingPage"
import explorePage from "../pages/explorePage"
import libraryPage from "../pages/libraryPage"

describe('Playing Musing Feature', () => {
  it(['test-id=YM-001'],'User can play music through Search', () => {
    var songTitle = "River Flows in You"
    cy.visit('https://music.youtube.com/')
    homePage.clickSearch()
    homePage.inputKeywordSearchAndEnter(songTitle)
    searchPage.clickSpecificSong(songTitle)
    nowPlayingPage.pauseMusic()
  })

  it(['test-id=YM-002'],'User can play music on through homepage', () => {
    cy.visit('https://music.youtube.com/')
    homePage.clickFirstMusic()
    nowPlayingPage.pauseMusic()
  })

  it(['test-id=YM-003'],'User can play music through Explore tab', () => {
    cy.visit('https://music.youtube.com/')
    homePage.clickExploreTab()
    explorePage.clickFirstMusic()
    nowPlayingPage.pauseMusic()
  })

})