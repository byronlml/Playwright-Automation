import { test, expect } from '@playwright/test';
import ResgiterPage from '../pages/registerPage';
import fs from "fs";
import * as path from "path";

const testData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/registerData.json")).toString()
);

test('Register Form', async ({ page, baseURL }) => {
    const register = new ResgiterPage(page);
    await page.goto(`${baseURL}route=common/home`);

    register.clickOnRegister();

    await register.enterFirstName(testData.registrationData.firstName);
    await register.enterLastName(testData.registrationData.lastName);
    await register.enterEmail(testData.registrationData.email);
    await register.enterTelephone(testData.registrationData.telephone);
    await register.enterPassword(testData.registrationData.password);
    await register.enterConfrimPassword(testData.registrationData.confirmPassword);

    await register.clickSubscribe();
    await register.clickAgree();

    await register.clickContinueButton();

    await register.accountCreated(" Your Account Has Been Created!");
    
  
  });