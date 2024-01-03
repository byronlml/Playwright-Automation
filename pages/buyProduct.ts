import { Page, expect }  from "@playwright/test";
import { buyProductLocator } from "../locators/buyProductLocator";
export default class BuyProduct{

    constructor(public page: Page){}

    async clickOnAppleButton(){
        await this.page.hover(buyProductLocator.megaMenuDrop);
        await this.page.locator(buyProductLocator.appleButton)
        .click();
    }

    async verifyApplePage(apple: string): Promise<void>{
        const confirm = this.page.locator(buyProductLocator.appleTitle);
        await confirm.waitFor({ state: 'visible' });
        await expect(confirm).toContainText(apple);
    }

    async clickOnAddCart(){
        await this.page.hover(buyProductLocator.ipodItem);
        await this.page.locator(buyProductLocator.addCartButton)
        .click();
    }

    async clickViewCartButton(){
        await this.page.locator(buyProductLocator.viewCartButton)
        .click();
    }

    async verifyShoppingCart(price: string): Promise<void>{
        const confirm = this.page.locator(buyProductLocator.verifyShoppingCart);
        await confirm.waitFor({ state: 'visible' });
        await expect(confirm).toContainText(price);
    }

    async clickCheckoutButton(){
        await this.page.locator(buyProductLocator.checkoutButton)
        .click();
    }

    async verifyCheckoutPage(billing: string): Promise<void>{
        const confirm = this.page.locator(buyProductLocator.billingAdress);
        await confirm.waitFor({ state: 'visible' });
        await expect(confirm).toContainText(billing);
    }
}