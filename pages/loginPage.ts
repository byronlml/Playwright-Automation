import { Page }  from "@playwright/test";
export default class LoginPage{

    constructor(public page: Page){

    }
    async enterEmail(email: string): Promise<void>{
        const mail =  this.page.locator("#input-email");
        mail.clear();
        mail.fill(email);
    }

    async enterPassword(password: string): Promise<void> {
        const pass = this.page.locator("#input-password");
        await pass.clear();
        await pass.fill(password);
    }

    async clickLoginButton(){
        await this.page.locator("input[@value='Login']")
        .click();
    }

}