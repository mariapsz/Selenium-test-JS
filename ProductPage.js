const {By, until} = require('selenium-webdriver');

class ProductPage {

    constructor(driver) {
        this.driver = driver;
        console.log('new item added');
    }

    async getItemInfo() {
        const info = {};
        info.IDnumber = await this.driver.findElement(By.css('p[class="pdp-description-text"]')).getText();
        console.log(info.IDnumber);
        info.price = await this.driver.findElement(By.css('span[class="price-value"]')).getText();
        console.log(info.price);
        return info;
    }
}

module.exports = {
    ProductPage
}