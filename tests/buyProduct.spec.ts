import { test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import BuyProduct from '../pages/buyProduct';
import fs from "fs";
import * as path from "path";

const testData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/buyProductData.json")).toString()
);

test('Buy Product test', async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const buyProduct = new BuyProduct(page);
    await page.goto(`${baseURL}route=common/home`);

    await login.clickOnLogin();

    await login.enterEmail(testData.buyProductData.email);
    await login.enterPassword(testData.buyProductData.password);

    await login.clickLoginButton();

    await login.logInDone("My Account");

    await buyProduct.clickOnAppleButton();
    await buyProduct.verifyApplePage("Apple");
    await buyProduct.clickOnAddCart();
    await buyProduct.clickViewCartButton();
    await buyProduct.verifyShoppingCart("What would you like to do next?");
    await buyProduct.clickCheckoutButton();
    await buyProduct.verifyCheckoutPage("Billing Address");
    
  
  });