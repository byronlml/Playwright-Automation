import { Page, expect }  from "@playwright/test";
import { registerLocator } from "../locators/registerLocator";
import { loginLocator } from "../locators/loginLocator";
export default class LoginPage{

    constructor(public page: Page){}

    async clickOnLogin(){
        await this.page.hover(registerLocator.dropDownRegister);
        await this.page.locator(loginLocator.loginButtonAccount)
        .click();
    }

    async enterEmail(email: string): Promise<void>{
        const mail =  this.page.locator(registerLocator.emailInput);
        await mail.clear();
        await mail.fill(email);
    }

    async enterPassword(password: string): Promise<void> {
        const pass = this.page.locator(registerLocator.passwordInput);
        await pass.clear();
        await pass.fill(password);
    }

    async clickLoginButton(){
        await this.page.locator(loginLocator.loginButton)
        .click();
    }

    async logInDone(logIn: string): Promise<void>{
        const confirm = this.page.locator(loginLocator.loginDone);
        await confirm.waitFor({ state: 'visible' });
        await expect(confirm).toContainText(logIn);
    }

}