const {Builder} = require('selenium-webdriver');
const {expect} = require('chai');

const ProductPage = require('./ProductPage').ProductPage;
const Chrome = require('./Chrome').Chrome;

describe('Test  http://www2.hm.com/pl', async function () {
    this.timeout(0);
    
    let productPage;
    let chrome;
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        ItemsInfo = []; 
        productPage = new ProductPage(driver, ItemsInfo);
        chrome = new Chrome(driver);
    });

    it('compare amount and price of items added to basket ', async function () {

        //const driver = await new Builder().forBrowser('chrome').build();
        
        this.timeout(0);
        await chrome.loadURL('http://www2.hm.com/pl_pl/ona/produkty/sukienki.html');
        await chrome.closeCookiesWindow();
        await chrome.loadProductPage();
        //ItemsInfo[0] = await productPage.getItemInfo();
        await chrome.closeSmallCookiesWindow();
        await productPage.addToBasket();
        
        

        // let rzeczyZKoszyka = {};

        
    


        
        console.log('end of test');        
        })
    })