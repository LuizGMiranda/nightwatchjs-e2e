var config = require('../../nightwatch.conf.js');
var utils = require('../functions/utils');
var gm = "/guia-medico";

module.exports = {

    'Verificar se o botão pesquisar esta ativo': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com valor no input': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com 2 caracteres': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        utils(browser).apagarValorInput('campo_pesquisa', 11);
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar apagando valor do input': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        utils(browser).apagarValorInput('campo_pesquisa', 13);
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com cpf': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        utils(browser).inserirValorInput('input_cpf', '85621203836');
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar com cpf incompleto': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        utils(browser).inserirValorInput('campo_pesquisa', 'Portal Unimed');
        utils(browser).inserirValorInput('input_cpf', '8562120');
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled;
        browser.end();
    },

    'Testar o botão pesquisar apagando valor do cpf e sem valor no campo busca': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        utils(browser).inserirValorInput('input_cpf', '85621203836');
        utils(browser).apagarValorInput('input_cpf', 14);
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser.end();
    },
};
