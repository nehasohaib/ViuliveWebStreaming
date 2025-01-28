const { test, expect } = require('@playwright/test');
import { ViuLive } from '../pages/signup';
// const ViuLive = require("../tests/loginpage.spec")
//const Zibalogin123 = require("../pages/loginpagefile")


test('logintest1', async ({ page }) => {
  await page.goto('https://stg-web-v2.viulive.com/?category=all');
  await page.pause();
  const loginpageViuLive = new ViuLive(page);
  await loginpageViuLive.sign_up_button();
  await loginpageViuLive.submit_signup();
  await loginpageViuLive.signup_fullname_error();
  await loginpageViuLive.submit_signup();
  await loginpageViuLive.signup_email_error();
  await loginpageViuLive.signup_invalid_email_error();
  await loginpageViuLive.submit_signup();
  await loginpageViuLive.signup_password_mismatch_error()
  await loginpageViuLive.submit_signup();
  await loginpageViuLive.signup_password_error();
  await loginpageViuLive.submit_signup();
  await loginpageViuLive.signup_confirm_password_error();
  await loginpageViuLive.submit_signup();
  await loginpageViuLive.terms_and_conditions();
  //await loginpageViuLive.positive_signup();
  await loginpageViuLive.verification_code_resend_button();
  await loginpageViuLive.verification_code_validation();
  await loginpageViuLive.fill_verification_code_manual();
  await page.waitForTimeout(1000);
});