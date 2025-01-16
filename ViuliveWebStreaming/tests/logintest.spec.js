const { test, expect } = require('@playwright/test');
import { ViuLive } from '../pages/loginpage';
// const ViuLive = require("../tests/loginpage.spec")
//const Zibalogin123 = require("../pages/loginpagefile")


test('logintest1',async({page})=> {
  await page.goto('https://stg-web-v2.viulive.com/?category=all');
  await page.pause();
  const loginpageViuLive = new ViuLive(page);
  await loginpageViuLive.sign_in_button();
  await loginpageViuLive.submit_signin();
  await loginpageViuLive.login_email_error();  
  await loginpageViuLive.submit_signin();
  await loginpageViuLive.login_password_error();
  await loginpageViuLive.submit_signin();
  // delay (3000);
  
  
});