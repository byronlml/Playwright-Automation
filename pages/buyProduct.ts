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
        const shopping = this.page.locator(buyProductLocator.verifyShoppingCart);
        await shopping.waitFor({ state: 'visible' });
        await expect(shopping).toContainText(price);
    }

    async clickCheckoutButton(){
        await this.page.locator(buyProductLocator.checkoutButton)
        .click();
    }

    async verifyCheckoutPage(billing: string): Promise<void>{
        const check = this.page.locator(buyProductLocator.billingAdress);
        await check.waitFor({ state: 'visible' });
        await expect(check).toContainText(billing);
    }

    async enterFirstName(firstName: string): Promise<void>{
        const name = this.page.locator(buyProductLocator.firstNamePayment);
        await name.clear();
        await name.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void>{
        const last = this.page.locator(buyProductLocator.lastNamePayment);
        await last.clear();
        await last.fill(lastName);
    }

    async enterCompany(company: string): Promise<void>{
        const business = this.page.locator(buyProductLocator.companyPayment);
        await business.clear();
        await business.fill(company);
    }

    async enterAdress(adressOne: string): Promise<void>{
        const adress = this.page.locator(buyProductLocator.adressPayment);
        await adress.clear();
        await adress.fill(adressOne);
    }

    async enterAdressTwo(adressTwo: string): Promise<void>{
        const adress = this.page.locator(buyProductLocator.adressPaymentTwo);
        await adress.clear();
        await adress.fill(adressTwo);
    }

    async enterCity(city: string): Promise<void>{
        const confirm = this.page.locator(buyProductLocator.cityPayment);
        await confirm.clear();
        await confirm.fill(city);
    }

    async enterPostCode(post: string): Promise<void>{
        const code = this.page.locator(buyProductLocator.postCodePayment);
        await code.clear();
        await code.fill(post);
    }

    async clickOnCountry(country: string): Promise<void>{
        await this.page.locator(buyProductLocator.countryPayment)
        .click();
        const selectHandle = this.page.locator(buyProductLocator.countryPayment);
        await selectHandle.waitFor({state: 'visible'});
        await selectHandle.selectOption({ label: country });
    }

    async clickOnRegion(region: string): Promise<void>{
        await this.page.locator(buyProductLocator.regionStatePayment)
        .click();
        const selectHandle = this.page.locator(buyProductLocator.regionStatePayment);
        await selectHandle.waitFor({state: 'visible'});
        await selectHandle.selectOption({ label: region });
    }

    async clicOnAgreeCondition(){
        await this.page.locator(buyProductLocator.agreeConditions)
        .click();
    }

    async clicOnContinueButton(){
        await this.page.locator(buyProductLocator.saveButton)
        .click();
    }

    async verifyConfirmOrder(order: string): Promise<void>{
        const check = this.page.locator(buyProductLocator.confirmOrderInput);
        await check.waitFor({ state: 'visible' });
        await expect(check).toContainText(order);
    }

    async clicOnConfirmButton(){
        await this.page.locator(buyProductLocator.confirmOrderButton)
        .click();
    }

    async verifySucessfulPurchase(purcharse: string): Promise<void>{
        const check = this.page.locator(buyProductLocator.succesfulPurchase);
        await check.waitFor({ state: 'visible' });
        await expect(check).toContainText(purcharse);
    }

}