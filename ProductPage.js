const {By, until} = require('selenium-webdriver');
const util = require('util');
class ProductPage {

    constructor(driver) {
        this.driver = driver;
    }

    async addToBasket() {
        //const Window = new window();

        if (await this.selectSize() != undefined) {
            await this.driver.findElement(By.css('ul[class="picker-list is-inline"] button[class="option"]:not([disabled])')).click();
            const previousShoppingbagItemCount = await parseInt(await this.driver.findElement(By.css('span[class="shoppingbag-item-count"]')).getText());
            await util.promisify(setTimeout)(4000);
            await this.driver.findElement((By.css('span[class="icon icon-shopping-bag-white"]'))).click();
            await util.promisify(setTimeout)(3000);
//            await .location.reload(true);
            await this.driver.wait(until.elementLocated(By.css('span[class="shoppingbag-item-count"]')));
            const currentShoppingbagItemCount = await parseInt(await this.driver.findElement(By.css('span[class="shoppingbag-item-count"]')).getText());
            console.log("previous: " + previousShoppingbagItemCount);
            console.log("current:  " + currentShoppingbagItemCount);
            if (currentShoppingbagItemCount == previousShoppingbagItemCount + 1)
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