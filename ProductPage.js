const {By, until} = require('selenium-webdriver');
const util = require('util');
//const {jQuery} = require('jQuery');
class ProductPage {

    constructor(driver, ItemsInfo) {
        this.driver = driver;
        this.ItemsInfo = ItemsInfo;
    }

    async getItemInfo() {
        const info = {};
        await this.driver.wait(until.elementLocated(By.css('div[class="pdp-description-list"] h4[class="art_no"]+ul'), 5000));
        await this.driver.findElement(By.css('div[class="pdp-description-list"] h4[class="art_no"]+ul'));
        info.IDnumber = await this.driver.findElement(By.css('div[class="pdp-description-list"] h4[class="art_no"]+ul')).getText();
        console.log(info.IDnumber);
        info.price = await this.driver.findElement(By.css('span[class="price-value"]')).getText();
        console.log(info.price);
        return info;
    }

    async addToBasket() {
        //if (await this.selectSize() != undefined) {
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]'), 5000));
        console.log('add: 1');
        await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]')).click();

        //}     
    }

    async selectSize() {
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"]'), 5000));
        console.log('select: 1');
        await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]')).click();
        console.log('select: 2');
        //await this.driver.wait(until.elementLocated(By.css('div[class="picker small-picker item loaded"]'), 5000));
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        console.log('select: 3');
        //await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]'), 5000));
        const a = this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]')).getText();
        console.log('select: 3.5 : ' + a);
        // await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]')).click();
        // console.log('select: 4');
        // await this.driver.wait(until.elementLocated(By.css('button[class="item button fluid button-big button-buy"]'), 5000));
        // await this.driver.findElement(By.css('button[class="item button fluid button-big button-buy"]')).click();
        // console.log('select: 5');
        
    }

    async selectSize1() {
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"]'), 5000));
        await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]')).click();
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]'), 5000)); 
        await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]')).click();
        // console.log('select: 1');
        // await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        // console.log('select: 2');
        // await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"]'), 5000));
        // console.log('select: 3');
        // await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]')).click();
        // //await this.driver.findElement(By.css('button[class="item button fluid button-big button-buy"]')).click();
        // console.log(size);
        // return size;
    }
}

module.exports = {
    ProductPage
}