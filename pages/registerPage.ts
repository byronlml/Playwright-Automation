import { Page }  from "@playwright/test";
import { registerLocator } from "../locators/registerLocator";
export default class ResgiterPage{

    constructor(public page: Page){}

    async clickOnRegister(){
        await this.page.hover(registerLocator.dropDownRegister);
        await this.page.locator(registerLocator.registerButton)
        .click();
    }

    async enterFirstName(firstname: string): Promise<void>{
        const name = this.page.locator(registerLocator.firstNameInput);
        await name.clear();
        await name.fill(firstname);
    }

    async enterLastName(lastname: string): Promise<void>{
        const lname = this.page.locator(registerLocator.lastNameInput);
        await lname.clear();
        await lname.fill(lastname);
    }

    async enterEmail(email: string): Promise<void>{
        const mail =  this.page.locator(registerLocator.emailInput);
        await mail.clear();
        await mail.fill(email);
    }

    async enterTelephone(telephone: string): Promise<void>{
        const phone = this.page.locator(registerLocator.telephoneInput);
        await phone.clear();
        await phone.fill(telephone);
    }

    async enterPassword(password: string): Promise<void> {
        const pass = this.page.locator(registerLocator.passwordInput);
        await pass.clear();
        await pass.fill(password);
    }
      

    async enterConfrimPassword(confirmpassword: string): Promise<void>{
        const confirm = this.page.locator(registerLocator.confirmPasswordInput);
        await confirm.clear();
        await confirm.fill(confirmpassword);
    }

    async clickSubscribe(){
        await this.page.locator(registerLocator.subscribeCheckbox)
        .click();
    }

    async clickAgree(){
        await this.page.locator(registerLocator.agreeCheckbox)
        .click();
    }

    async clickContinueButton(){
        await this.page.locator(registerLocator.continueButton)
        .click();
    }
}