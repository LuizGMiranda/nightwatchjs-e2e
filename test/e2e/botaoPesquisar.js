const config = require('../../nightwatch.conf.js');
const utils = require('../functions/utils');
const gm = '/guia-medico';

module.exports = {
    'Verificar se o botão pesquisar esta ativo': function (browser) {
        utils(browser).openUrl(gm)
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com valor no input': function (browser) {
        utils(browser).openUrl(gm)
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com 2 caracteres': function (browser) {
        utils(browser).openUrl(gm)
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        utils(browser).apagarValorInput('campo_pesquisa', 11);
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar apagando valor do input': function (browser) {
        utils(browser).openUrl(gm)
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        utils(browser).apagarValorInput('campo_pesquisa', 13);
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com cpf': function (browser) {
        utils(browser).openUrl(gm)
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        utils(browser).inserirValorInput('input_cpf', '85621203836');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com cpf incompleto': function (browser) {
        utils(browser).openUrl(gm)
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        utils(browser).inserirValorInput('input_cpf', '8562120');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar apagando valor do cpf e sem valor no campo busca': function (browser) {
        utils(browser).openUrl(gm)
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        utils(browser).inserirValorInput('input_cpf', '85621203836');
        utils(browser).apagarValorInput('input_cpf', 14);
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser.end();
    },

    'Testar botão pesquisar com busca avançada': function (browser) {
        utils(browser).openUrl(gm + '?cdUnimed=25');
        browser.click('#busca_detalhada');
        browser.useXpath();
        browser.verify.cssClassPresent('//*[@id="busca_detalhada"]', 'bold');
        browser.useCss();
        browser.moveToElement('#btn_pesquisar', 20, 10);
        browser.pause(1000);
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        browser.end();
    },

    'Testar clicar no botão pesquisar e trocar pagina': function (browser){
        let msg = 'Selecione o estado e a cidade para localizar a Unimed onde você deseja ser atendido:'
        utils(browser).openUrl(gm);
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        browser.click('#btn_pesquisar');
        browser.pause(1000);
        browser.assert.containsText('#texto_selecione_unimed',msg)
        browser.end();
    }
};
