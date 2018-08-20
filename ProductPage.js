const {By, until} = require('selenium-webdriver');
const {jQuery} = require('jQuery');
class ProductPage {

    constructor(driver) {
        this.driver = driver;
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
        ;
    }

    async selectSize() {
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        const size = await this.driver.findElement(By.css('ul[class="picker-list"] button:not([disabled]) span[class="value"]')).getText();
        //await this.driver
          
        console.log(size);
    }
}

module.exports = {
    ProductPage
}