import { Page }  from "@playwright/test";
export default class SpecialHotPage{

    constructor(public page: Page){}

    async clickOnSpecialHot(){
        await this.page.locator("'Special Hot'")
        .click();
    }
}