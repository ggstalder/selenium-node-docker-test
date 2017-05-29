'use strict'

const expect = require('chai').expect
const test = require('selenium-webdriver/testing')
const webdriver = require('selenium-webdriver')
const By = webdriver.By

let driver

function configDriver (done) {
  driver = new webdriver.Builder()
      .forBrowser('chrome')
      .usingServer('http://hub:4444/wd/hub')
      .build()
  driver.get('https://montreal.craigslist.ca/')
  driver.findElement(By.css('.apa')).click().then(() => { done() })
}

test.describe('Testing ', function () {
  this.timeout(10000)
  test.before(function (done) {
    setTimeout(configDriver.bind(null, done), 1000)
  })

  test.after(function () {
    driver.quit()
  })

  test.it('Verify craigslist appartment page is loaded', function () {
    driver.getCurrentUrl().then(function (url) {
      expect(url).to.be.equal('https://montreal.craigslist.ca/search/apa')
    })
  })
})
