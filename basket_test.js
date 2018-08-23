const {Builder} = require('selenium-webdriver');
const {expect} = require('chai');
//const location = require('Location');

const ProductPage = require('./ProductPage').ProductPage;
const Chrome = require('./Chrome').Chrome;
const ShoppingBag = require('./shoppingBag').ShoppingBag;

describe('Test  http://www2.hm.com/pl', async function () {
    this.timeout(0);
    
    let driver;
    let productPage;
    let chrome;
    let shoppingBag;
    let itemsInfo;
    let i = 0; //ItemsInfo index

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        itemsInfo = []; 
        productPage = new ProductPage(driver);
        chrome = new Chrome(driver);
        shoppingBag = new ShoppingBag(driver);
    });

    it('compare product number and price of each item added to shopping bag ', async function () {
        
        this.timeout(0);

        await chrome.loadURL('http://www2.hm.com/pl_pl/index.html');
        await chrome.closeCookiesWindow();
        await chrome.closeSmallCookiesWindow();
       // await location.reload();
        
        await chrome.selectCategory('ONA');
        await chrome.selectSubcategory('Sukienki');
        await chrome.loadFirstProductPage();        
        if (await productPage.addToBasket()) {
            itemsInfo[i] = await productPage.getItemInfo();
            i++;
            console.log('Product added!');
        } else console.log('Product could not be added');
              
        await chrome.selectCategory('ONA');
        await chrome.selectSubcategory('Basics');
        await chrome.loadFirstProductPage();        
        if (await productPage.addToBasket()) {
            itemsInfo[i] = await productPage.getItemInfo();
            i++;
            console.log('Product added!');
        } else console.log('Product could not be added');

        await chrome.selectCategory('ON');
        await chrome.selectSubcategory('Buty');
        await chrome.loadFirstProductPage();        
        if (await productPage.addToBasket()) {
            itemsInfo[i] = await productPage.getItemInfo();
            i++;
            console.log('Product added!');
        } else console.log('Product could not be added');

        await chrome.selectCategory('ON');
        await chrome.selectSubcategory('Bluzy');
        await chrome.loadFirstProductPage();        
        if (await productPage.addToBasket()) {
            itemsInfo[i] = await productPage.getItemInfo();
            i++;
            console.log('Product added!');
        } else console.log('Product could not be added');

        await chrome.goToshopingBag();      
        let shoppingBagItemsInfo = [];
        shoppingBagItemsInfo = await shoppingBag.getItemsInfo();
    
        expect(itemsInfo).to.deep.equal(shoppingBagItemsInfo);
     

        
        console.log('end of test');        
        await driver.close();
        })
    })