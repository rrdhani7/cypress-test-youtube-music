# cypress-test-youtube-music
Simple cypress project to test Youtube Music

## Installation

Clone this github project and install with following steps: 
```bash
  cd cypress-test-youtube-music
  npm install
```
    

##  How To Run?

### Run all tests headless
```bash
npm run cypress:run
```

### Run all tests with browser
```bash
npm run cypress:open
```

### Run specific test with test-id headless
```bash
CYPRESS_INCLUDE_TAGS="test-id=YM-001" npx cypress run
```
