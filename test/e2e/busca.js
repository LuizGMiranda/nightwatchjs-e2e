const config = require('../../nightwatch.conf.js');
const utils = require('../functions/utils');
const gm = '/guia-medico';

module.exports = {
    'Testar busca simples para avançada com a Unimed 25': function (browser) {
        utils(browser).openUrl(gm + '?cdUnimed=25');
        browser.useXpath();
        browser.verify.cssClassPresent('//*[@id="busca_rapida"]', 'bold');
        browser.useCss();
        browser.click('#busca_detalhada');
        browser.useXpath();
        browser.verify.cssClassPresent('//*[@id="busca_detalhada"]', 'bold');
        browser.useCss();
        browser.end();
    },

    'Veficar se aparece campos do busca detalhada com a Unimed 25': function (browser){
        let campos = ['estado','cidade','bairro','planos','redes','especialidade',
        'servico','recurso','qualificacao']
        utils(browser).openUrl(gm + '?cdUnimed=25');
        browser.click('#busca_detalhada');
        browser.pause(2000)
        for (let index = 0; index < campos.length; index++) {
            browser.assert.visible(`div[id=campo_${campos[index]}]`)
        }
        browser.end();       
    }
};
