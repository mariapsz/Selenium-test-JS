const {By, until} = require('selenium-webdriver');

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

    async loadProductPage() {
        await this.driver.findElement(By.css('article[class="product-item "]')).click();
    }
}

module.exports = {
    Chrome
}