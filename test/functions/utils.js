module.exports = function (browser) {
    this.inserirValorInput = function (id, valor) {
        browser.clearValue(`input[id=${id}]`)
        for (let index = 0; index < valor.length; index++) {
            browser.setValue(`input[id=${id}]`, valor[index])
        }
    }

    this.apagarValorInput = function (id, loop) {
        for (let index = 0; index < loop; index++) {
            browser.sendKeys(`input[id=${id}]`, browser.Keys.BACK_SPACE)  
        }
        return browser;
    }
    
    return this;
  };
  