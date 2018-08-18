const { Builder, By, Key, until } = require('selenium-webdriver');
// const { expect } = require('chai');


describe('Test  http://www2.hm.com/pl', async function () {
    this.timeout(0);

    it('compare amount and pice of items added to basket ', async function () {

        this.timeout(0);

        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://www2.hm.com/pl_pl/ona/produkty/sukienki.html');
        await driver.wait(until.elementLocated(By.css('input[class="product-items-content"]'), 5000));
        await driver.findElement(By.css('article[class="product-item "]')).click();
        await driver.wait(until.elementLocated(By.css('div[class="product-items-content"]'), 5000));
        let items = {};
        items.dress1.

        let rzeczy = {};
        rzeczy.sukienka1 = {};
        rzeczy.sukienka2 = {};
        rzeczy.sukienka1.tytul = 'SUKIENKA PIERWSZA';
        rzeczy.sukienka1.cena = '5000000000';
        rzeczy.sukienka2.tytul = 'SUKIENKA DRUGA';
        rzeczy.sukienka2.cena = '99999999999'; 

        let rzeczyZKoszyka = {};

        
    


        await driver.close();
        console.log('end of test');        
        })
    })