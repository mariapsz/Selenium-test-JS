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
        if (await this.selectSize() != undefined) {
            await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled])')).click();
            await this.driver.wait(until.elementLocated(By.css('button[class="item button fluid button-big button-buy"]'), 7000));
            await this.driver.findElement((By.css('button[class="item button fluid button-big button-buy"]'))).click();
        }     
    }

 
    async selectSize() {
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"]'), 5000));
        await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]')).click();
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]'), 5000)); 
        const size = await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled])')).getText();
        return size;
    }
}

module.exports = {
    ProductPage
}