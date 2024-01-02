import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import fs from "fs";
import * as path from "path";

const testData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/loginData.json")).toString()
);

test('Login test', async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=common/home`);

    await login.clickOnLogin();

    await login.enterEmail(testData.loginData.email);
    await login.enterPassword(testData.loginData.password);

    await login.clickLoginButton();

    await login.logInDone("My Account");
    
  
  });