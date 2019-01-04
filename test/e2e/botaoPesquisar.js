var config = require('../../nightwatch.conf.js');
var gm = "/guia-medico";

module.exports = {
    'Testar botão pesquisar Busca Rápida e Texto': function (browser) {
        let url = browser.launchUrl + gm
        browser
            .url(url)
            .waitForElementVisible('body')
            .pause(2000)
            .clearValue('input[id=campo_pesquisa]')
            .setValue('input[id=campo_pesquisa]', 'Clinica Medico');
        browser.click('button[id=btn_pesquisar]'),
            function (result) {
                this.log("Value: ", result.value);
            }
        browser.end();
    }
};
