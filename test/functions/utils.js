module.exports = function (browser) {
    this.inserirValorInput = function (id, valor) {
        browser.clearValue(`input[id=${id}]`)
        console.log(`Inserindo valor (${valor}) no campo com id: ${id}`)
        for (let index = 0; index < valor.length; index++) {
            browser.setValue(`input[id=${id}]`, valor[index])
        }
    }

    this.apagarValorInput = function (id, loop) {
        console.log(`Apagando valor do campo com id: ${id}`)
        for (let index = 0; index < loop; index++) {
            browser.sendKeys(`input[id=${id}]`, browser.Keys.BACK_SPACE)  
        }
        return browser;
    }

    this.openUrl = function (diretorio) {
        // SEMPRE USAR DIRETORIO COM '/' EX: '/test'
        console.log(`Abrindo url ${browser.launchUrl + diretorio}`)
        browser.url(browser.launchUrl + diretorio)
        browser.waitForElementVisible('body');
    }
    
    this.pesquisar = function (campoBusca, cpf='') {
        browser.inserirValorInput('campo_pesquisa', valor);
        if (cpf.length > 0){
            browser.inserirValorInput('input_cpf', cpf);
        }
        browser.click('button[id=btn_pesquisar]');
        selecionaUnimed();
        browser.click('button[id=btn_pesquisar]');
        return browser;
    }

    this.selecionaUnimed = function (){
        return browser;
    }
    
    return this;
  };
  