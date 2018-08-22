const {By, until} = require('selenium-webdriver');
const util = require('util');

class Chrome {

    constructor(driver) {
        this.driver = driver;
    }

    async loadURL(URL) {
        await this.driver.get(URL);
    }

    async closeCookiesWindow() {
        await this.driver.wait(until.elementLocated(By.css('div[class="modaloverlay responsive"]'), 5000));
        await this.driver.findElement(By.css('div[class="modaloverlay responsive"] button[class="modalclose icon-close-black"]')).click();
    }

    async closeSmallCookiesWindow() {
        await this.driver.wait(until.elementLocated(By.css('button[class="close icon-close-white js-close"]')));
        await this.driver.findElement(By.css('button[class="close icon-close-white js-close"]')).click();
    }

    async loadFirstProductPage() {
        await this.driver.findElement(By.css('article[class="product-item "]')).click();
    }

    async goToshopingBag() {
        await util.promisify(setTimeout)(5000);
        await this.driver.findElement(By.css('span[class="minicart parbase"]')).click();
    }

    async selectCategory(categoryName) {
        const categories = await this.driver.findElements(By.css('nav[class="primary-menu"] a'));
        for (let element of categories) {
            if (await element.getText() === categoryName) {
                console.log(await element.getText());
                await this.driver.get(await element.getAttribute('href'));
                return true;
            }
        }
        throw new Error('Category: ' + categoryName + ' not found');
    }

    async selectSubcategory(subcategoryName) {
        const subcategories = await this.driver.findElements(By.css('div[class="section-menu-category"] a'));        
        for (let element of subcategories) {
            if (await element.getText() === subcategoryName) {
                console.log(await element.getText());
                await this.driver.get(await element.getAttribute('href'));
                return true;
            }
        }
        throw new Error('Subcategory: ' + subcategoryName + ' not found');
    }

}


module.exports = {
    Chrome
}