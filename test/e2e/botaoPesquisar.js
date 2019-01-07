var config = require('../../nightwatch.conf.js');
var gm = "/guia-medico";

module.exports = {

    'Verificar se o botão pesquisar esta ativo': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser
            .expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser.end();
    },

    'Testar o botão pesquisar com valor no input': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser
            .expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser
            .clearValue('input[id=campo_pesquisa]')
            .setValue('input[id=campo_pesquisa]', 'Portal Unimed')
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled
        browser.end();
    },

    'Testar o botão pesquisar com 2 caracteres': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser
            .clearValue('input[id=campo_pesquisa]')
            .setValue('input[id=campo_pesquisa]', 'Portal Unimed')
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled
        for (let index = 0; index < 11; index++) {
            browser.sendKeys('input[id=campo_pesquisa]', browser.Keys.BACK_SPACE)  
        }
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser.end();
    },

    'Testar o botão pesquisar apagando valor do input': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser
            .clearValue('input[id=campo_pesquisa]')
            .setValue('input[id=campo_pesquisa]', 'Portal Unimed')
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled
        for (let index = 0; index < 13; index++) {
            browser.sendKeys('input[id=campo_pesquisa]', browser.Keys.BACK_SPACE)  
        }
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser.end();
    },

    'Testar o botão pesquisar com cpf': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser
            .clearValue('input[id=campo_pesquisa]')
            .setValue('input[id=campo_pesquisa]', 'Portal Unimed')
            .clearValue('input[id=input_cpf]')
            // CPF VALIDO 85621203836 
            .setValue('input[id=input_cpf]', '85621203836')
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled
        browser.end();
    },

    'Testar o botão pesquisar com cpf incompleto': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser
            .clearValue('input[id=campo_pesquisa]')
            .setValue('input[id=campo_pesquisa]', 'Portal Unimed')
            .clearValue('input[id=input_cpf]')
            // CPF VALIDO 85621203836 
            for (let index = 0; index < 13; index++) {
                let cpf= [8,5,6,2,1,2,0,3,8,3,6]
                browser.setValue('input[id=input_cpf]', cpf[index])
            }
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled
        browser.end();
    },

    'Testar o botão pesquisar com apagando valor do cpf e sem valor no campo busca': function (browser) {
        let url = browser.launchUrl + gm;
        browser
            .url(url)
            .waitForElementVisible('body')
        browser.expect.element('button[id=btn_pesquisar]').to.not.be.enabled
        browser
            .clearValue('input[id=campo_pesquisa]')
            .setValue('input[id=campo_pesquisa]', 'Portal Unimed')
            .clearValue('input[id=input_cpf]')
            // CPF VALIDO 85621203836 
            .setValue('input[id=input_cpf]', '85621203836')
            for (let index = 0; index < 14; index++) {
                browser.sendKeys('input[id=input_cpf]', browser.Keys.BACK_SPACE)  
            }
        browser.expect.element('button[id=btn_pesquisar]').to.be.enabled
        browser.end();
    },
};
