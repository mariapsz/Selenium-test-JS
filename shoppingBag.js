const {By, until} = require('selenium-webdriver');

class ShoppingBag {    

    constructor(driver) {
        this.driver = driver;
    }

    async getItemsInfo() {        
        let itemsInfoArray = [];
        await this.driver.wait(until.elementLocated(By.css('div[class="product-detail-list-item-details"] dd')));
        const products = await this.driver.findElements(By.css('div[class="product-detail-list-item-details"]'));       
        for (let i = 0; i < products.length; i++) {
            itemsInfoArray[i] = {};
            itemsInfoArray[i].IDnumber = await products[i].findElement(By.css('dd')).getText();
            itemsInfoArray[i].price = await products[i].findElement(By.css('p[class="product-detail-price ng-binding"]')).getText();
        } 
        return itemsInfoArray;
    }   
        
}

module.exports = {
    ShoppingBag
}