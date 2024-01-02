import { test, expect } from '@playwright/test';
import ResgiterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import fs from "fs";
import * as path from "path";

const testData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/registerData.json")).toString()
);

test('Login test', async ({ page, baseURL }) => {
    const register = new ResgiterPage(page);
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=common/home`);

    await login.clickOnLogin();

    await register.enterEmail(testData.registrationData.email);
    await register.enterPassword(testData.registrationData.password);

    await login.clickLoginButton();

    await login.logInDone("My Account");
    
  
  });