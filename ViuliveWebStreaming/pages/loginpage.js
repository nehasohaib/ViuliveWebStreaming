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
         this.incorrect_email_error="//div[@class='ant-notification-notice-message']";
      }
       async sign_in_button(){
        await this.page.click(this.signin_btn)
       }
        async submit_signin(){
          await this.page.click(this.submitbtn)
        }
        async login_incorrect_email_or_password_error() {
         try{
            
         const incorrect_email_error_expected = "Incorrect username or password";
         await this.page.fill(this.email, "incorrect-email@gmail.com");
         await this.page.fill(this.password, "wrongpassword");
         await this.page.fill(this.password, "");
         await this.page.fill(this.password, "wrongpassword");
         await this.page.click(this.submitbtn);
         const incorrect_email_actual = await this.page.locator(this.incorrect_email_error).innerText();
         expect(incorrect_email_actual).toEqual(incorrect_email_error_expected);
         console.log("Actual incorrect username or password error is: " + incorrect_email_actual);
         console.log("Incorrect username or password error message is displayed: Pass");
         await this.page.fill(this.email, "");
         await this.page.fill(this.password, "");
         }
         catch(error){
            console.log("unexpected error:" +error)
         }
     }
     
     async login_email_error(){
      try{

       const email_error_expected="Please enter your email address";
       const email_actual=(await this.page.locator(this.email_error).innerText());
        expect(email_error_expected).toEqual(email_actual);
           console.log("actual email error is: " +email_actual)
      
      console.log("email error message is displayed: Pass");
      await this.page.fill(this.email,"neha@msd-my.com")
      await this.page.fill(this.password,"123123")
      await this.page.fill(this.password, "")
       
      }
      catch(error){
         console.log("Unexpected error:" +error)
         
      }
   }

      
      async login_password_error(){
         try{

       const expected_password_error_message="Please enter a password";
       const password_actual_error=(await this.page.locator(this.password_error).innerText());
        expect(expected_password_error_message).toEqual(password_actual_error);
           console.log("actual password error message is: " +password_actual_error)
      console.log("password error messages has been displayed: pass");
      await this.page.fill(this.password,"12345678")
     
     }
     catch(error){
     console.log("unexpected error:" +error)
     }
   }
     
    }