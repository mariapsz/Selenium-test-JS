const {Builder} = require('selenium-webdriver');
const {expect} = require('chai');

const ProductPage = require('./ProductPage').ProductPage;
const Chrome = require('./Chrome').Chrome;

describe('Test  http://www2.hm.com/pl', async function () {
    this.timeout(0);
    
    let productPage;
    let chrome;
    let i = 0;
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        productPage = new ProductPage(driver);
        chrome = new Chrome(driver);
        ItemsInfo = [];        
    });

    it('compare amount and price of items added to basket ', async function () {

       // const driver = await new Builder().forBrowser('chrome').build();

        this.timeout(0);
        await chrome.loadURL('http://www2.hm.com/pl_pl/ona/produkty/sukienki.html');
        await chrome.closeCookiesWindow();
        await chrome.loadProductPage();
        const a = await driver.findElement(By.css('p[class="pdp-description-text"]')).getText();
        //ItemsInfo[i] = productPage.getItemInfo();
        console.log(a);

        

        // let rzeczyZKoszyka = {};

        
    


        await driver.
        console.log('end of test');        
        })
    })