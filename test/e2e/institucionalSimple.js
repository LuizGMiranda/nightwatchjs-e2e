var config = require('../../nightwatch.conf.js');
var gm = "/guia-medico";

module.exports = { 
  'Verificar portlet na tela': function(browser) {
    let url = browser.launchUrl + gm
    browser
      .url(url)
      .waitForElementVisible('body')
      .pause(1000)
      .assert.containsText('h3[id=rede_assistencial] span', 'REDE ASSISTENCIAL')
      .end();
  }
};

