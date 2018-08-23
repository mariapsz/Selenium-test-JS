const {By, until} = require('selenium-webdriver');
const util = require('util');
class ProductPage {

    constructor(driver) {
        this.driver = driver;
    }

    async addToBasket() {

        if (await this.selectSize() != undefined) {
            await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled])')).click();
            const shoppingBagItemCountElement = await this.driver.findElement(By.css('span[class="shoppingbag-item-count"]'));
            const shoppingBagItemCountText = await shoppingBagItemCountElement.getText();
            const expectedShoppingBagCount = await parseInt(shoppingBagItemCountText) + 1;
            await util.promisify(setTimeout)(6000);
            await this.driver.findElement((By.css('span[class="icon icon-shopping-bag-white"]'))).click();
            await this.driver.wait(until.elementTextIs(shoppingBagItemCountElement, expectedShoppingBagCount.toString()),30000);
            return true;
        }
        return false;     
    }
 
    async selectSize() {
        await this.driver.wait(until.elementLocated(By.css('div[class="picker small-picker item loaded"]')));
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"]'), 5000));
        await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]')).click();
        await this.driver.findElement(By.css('div[class="picker small-picker item loaded"]')).click();
        await this.driver.wait(until.elementLocated(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled]) span[class="value"]'), 5000)); 
        const size = await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled])')).getText();
        return size;
    }
    
    async getItemInfo() {
        const info = {};
        await this.driver.wait(until.elementLocated(By.css('div[class="pdp-description-list"] h4[class="art_no"]+ul'), 5000));
        await this.driver.findElement(By.css('div[class="pdp-description-list"] h4[class="art_no"]+ul'));
        info.IDnumber = await this.driver.findElement(By.css('div[class="pdp-description-list"] h4[class="art_no"]+ul')).getText();
        info.price = await this.driver.findElement(By.css('span[class="price-value"]')).getText();
        return info;
    }

}

module.exports = {
    ProductPage
}