import { expect } from '@playwright/test';
import { assert } from 'console';

export class ViuLive{
    /**
    * @param {import('@playwright/test').Page} page
    */
        constructor(page)
        {
         this.page=page;
         
         this.signin_btn = "//button[normalize-space()='Sign in']"
         this.email= "//input[@placeholder='Email Address']";
         this.password= "//input[@placeholder='Password']";
         this.submitbtn= "//button[@type='submit']";
         this.email_error= "//div[@class='ant-notification-notice-message']";
         this.password_error="//div[@class='ant-notification ant-notification-topRight']//div[1]//div[1]//div[1]//div[1]";
        }
       async sign_in_button(){
        await this.page.click(this.signin_btn)
       }
        async submit_signin(){
          await this.page.click(this.submitbtn)
        }
    
     async login_email_error(){
        const email_error_expected="Please enter your email address";
       const email_actual=(await this.page.locator(this.email_error).innerText());
        expect(email_error_expected).toEqual(email_actual);
           console.log("actual email error is: " +email_actual)
      
      console.log("email error message is displayed: Pass");
      await this.page.fill(this.email,"neha@msd-my.com")
      await this.page.fill(this.password,"123123")
      await this.page.fill(this.password, "")
       
      }
      
      async login_password_error(){
       const expected_password_error_message="Please enter a password";
       const password_actual_error=(await this.page.locator(this.password_error).innerText());
        expect(expected_password_error_message).toEqual(password_actual_error);
           console.log("actual password error message is: " +password_actual_error)
      console.log("password error messages has been displayed: pass");
      await this.page.fill(this.password,"12345678")

     }
    }