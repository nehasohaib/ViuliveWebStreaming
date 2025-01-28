import { expect } from '@playwright/test';
import { assert } from 'console';

export class ViuLive {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;

        this.signup_btn = "//button[@class='auth-signup']"
        this.full_name = "//input[@placeholder='Full Name']";
        this.email = "//input[@placeholder='Email Address']";
        this.password = "//input[@placeholder='Password*']";
        this.confirm_password = "//input[@placeholder='Confirm Password*']";
        this.signup_button = "//button[@type='submit']";
        this.fullname_error = "//div[@class='ant-notification-notice-message']";
        this.email_error = "//div[@class='ant-notification-notice-message']";
        this.password_error = "//div[@class='ant-notification-notice-message']";
        this.confirm_password_error = "//div[@class='ant-notification-notice-message']";
        this.password_mismatch_error = "//div[@class='ant-notification-notice-with-icon']";
        this.invalid_email_error = "//div[@class='ant-notification-notice-message']";
        this.terms_and_conditions_checkbox = "//input[@type='checkbox']";
        this.terms_and_conditions_submit = "//button[@type='submit']";
        this.existing_email_error = "//div[@class='ant-notification-notice-message']";
        this.verification_field1 = "//div[@class='ant-modal-root']//input[1]";
        this.verification_field2 = "//body//div//input[2]";
        this.verification_field3 = "//body//div//input[3]";
        this.verification_field4 = "//body//div//input[4]";
        this.verification_field5 = "//body//div//input[5]";
        this.verification_field6 = "//body//div//input[6]";
        this.verification_code_resend = "//div[@class='resend']//span//*[name()='svg']";
        this.verification_code_submit = "//button[@class='agreed-button']";
        this.verification_code_error = "//div[@class='ant-notification-notice-with-icon']";
        this.click_outside = "//div[@role='dialog']";
        this.terms_and_conditions_scroll = "//body/div/div[@class='ant-modal-root']/div[@role='dialog']/div[@role='document']/div[@class='ant-modal-content']/div[@class='ant-modal-body']/div/div[1]";
    }
    async sign_up_button() {
        await this.page.click(this.signup_btn)
    }
    async submit_signup() {
        await this.page.click(this.signup_button)
    }
    async signup_fullname_error() {
        try {
            const fullname_error = "Please enter your full name";
            const fullname_actual = (await this.page.locator(this.fullname_error).innerText());
            expect(fullname_error).toBe(fullname_actual);
            console.log("actual fullname error is: " + fullname_actual);

            console.log("fullname error message is displayed: Pass");
            await this.page.fill(this.full_name, "Nehanew142");
        } catch (error) {
            console.log("unexpected error:" + error);
        }
    }

    async signup_email_error() {
        try {
            const email_error_expected = "Please enter your email address";
            const email_actual = (await this.page.locator(this.email_error).innerText());
            expect(email_error_expected).toBe(email_actual);
            console.log("actual email error is: " + email_actual)

            console.log("email error message is displayed: Pass");
            await this.page.fill(this.email, "invalid-email")
        } catch (error) {
            console.log("unexpected error:" + error);
        }
    }
    async signup_invalid_email_error() {
        try {
            await this.page.click(this.signup_button);
            const invalid_email_error_expected = "Please enter a valid email address";
            const invalid_email_actual = await this.page.locator(this.invalid_email_error).innerText();
            expect(invalid_email_actual).toBe(invalid_email_error_expected);
            console.log("Actual invalid email error is: " + invalid_email_actual);
            console.log("Invalid email error message is displayed: Pass");
            await this.page.fill(this.email, "");
            await this.page.fill(this.email, "nehanew141@yopmail.com");
        } catch (error) {
            console.log("unexpected error:" + error);
        }
    }
    async signup_password_mismatch_error() {
        try {
            const password_mismatch_error_expected = "The password confirmation does not match.";
            await this.page.fill(this.password, "12345678");
            await this.page.fill(this.confirm_password, "87654321");
            await this.page.click(this.signup_button)
            const password_mismatch_actual = await this.page.locator(this.password_mismatch_error).innerText();
            expect(password_mismatch_actual).toBe(password_mismatch_error_expected);
            console.log("Actual password mismatch error is: " + password_mismatch_actual);
            console.log("Password mismatch error message is displayed: Pass");
        } catch (error) {
            console.log("unexpected error:" + error);
        }
    }
    async signup_password_error() {
        try {
            await this.page.fill(this.password, "");
            await this.page.click(this.signup_button);
            const password_error_expected = "Please enter a password";
            const password_actual = (await this.page.locator(this.password_error).innerText());
            expect(password_error_expected).toBe(password_actual);
            console.log("actual password error is: " + password_actual)

            console.log("password error message is displayed: Pass");
            await this.page.fill(this.password, "12345678")
        } catch (error) {
            console.log("unexpected error:" + error);
        }
    }
    async signup_confirm_password_error() {
        try {
            await this.page.fill(this.confirm_password, "");
            await this.page.click(this.signup_button);
            const confirm_password_error_expected = "Please confirm your new password";
            const confirm_password_actual = (await this.page.locator(this.confirm_password_error).innerText());
            expect(confirm_password_error_expected).toBe(confirm_password_actual);
            console.log("actual confirm password error is: " + confirm_password_actual)

            console.log("confirm password error message is displayed: Pass");
            await this.page.fill(this.confirm_password, "12345678")
        } catch (error) {
            console.log("unexpected error:" + error);
        }

    }
    async terms_and_conditions() {

        try {
            console.log("Navigating terms and conditions...");

            // Use the locator to find and scroll the terms container
            const termsContainer = this.page.locator(this.terms_and_conditions_scroll);
            // await this.page.waitForSelector(this.terms_and_conditions_scroll, { timeout: 5000 });
            // Scroll to the bottom of the terms and conditions container
            await termsContainer.evaluate((e) => e.scrollTo(0, e.scrollHeight));
            console.log("Scrolled to the bottom of the terms and conditions.");

            // Wait briefly to ensure scrolling is complete
            await this.page.waitForTimeout(1000);

            // Check the Terms and Conditions checkbox
            await this.page.click(this.terms_and_conditions_checkbox);
            console.log("Checked the Terms and Conditions checkbox.");

            // Submit the form
            await this.page.click(this.terms_and_conditions_submit);
            console.log("Clicked the Submit button for Terms and Conditions.");
        } catch (error) {
            console.log("Unexpected error: " + error);
        }

        // Check for an existing email error
        const existing_email_error = this.page.locator(this.existing_email_error);
        if (await existing_email_error.isVisible()) {
            const existing_email_error_expected = "A user with this email address already exists.";
            const existing_email_actual = await existing_email_error.innerText();
            expect(existing_email_actual).toBe(existing_email_error_expected);
            console.log("Existing email error message is displayed: " + existing_email_actual);

            // Close the modal by clicking outside
            await this.page.click('body', { position: { x: 0, y: 0 } });
            console.log("Clicked outside the modal to close it.");

            // Reattempt signup process
            await this.sign_up_button();
            await this.page.fill(this.full_name, "Neha150");
            await this.page.fill(this.email, "nehanew150@yopmail.com");
            await this.page.fill(this.password, "12345678");
            await this.page.fill(this.confirm_password, "12345678");
            await this.submit_signup();
            await this.terms_and_conditions();
        } else {
            console.log("No existing email error message. Navigating to verification code screen...");

        }
    }

    async verification_code_validation() {
        try {
            await this.page.click(this.verification_code_submit);
            const verification_field_error_expected = "Invalid verification code.";
            const verification_field_actual = (await this.page.locator(this.verification_code_error).innerText());
            expect(verification_field_error_expected).toBe(verification_field_actual);
            console.log("verification error is: " + verification_field_actual)
            console.log("verification error message is displayed: Pass");

            await this.page.fill(this.verification_field1, "123456");
            await this.page.click(this.verification_code_submit);
            const verification_field_actual_2 = (await this.page.locator(this.verification_code_error).innerText());
            expect(verification_field_error_expected).toBe(verification_field_actual_2);
            console.log("verification error is: " + verification_field_actual_2)

            console.log("verification error message is displayed: Pass");
            //await this.page.fill(this.verification_field, "");
        } catch (error) {
            console.log("unexpected error:" + error);
        }
    }

    async fill_verification_code_manual() {
        try {
            console.log("Clearing verification code fields...");

            // Array of all field locators
            const inputs = [
                this.verification_field6,
                this.verification_field5,
                this.verification_field4,
                this.verification_field3,
                this.verification_field2,
                this.verification_field1,
            ];

            // Loop through each input and use `press` to clear them
            for (const input of inputs) {
                const field = this.page.locator(input);

                // Focus the input field
                await field.focus();

                // Get the current value of the field
                const value = await field.inputValue();

                // Clear the field by simulating Backspace keypresses
                for (let i = 0; i < value.length; i++) {
                    await field.press('Backspace');
                }

                console.log(`Cleared field: ${input}`);
            }

            console.log("All fields cleared.");
            await this.verification_field1.focus();
        } catch (error) {
            console.log("Error while clearing fields: " + error);
        }

        // Pause the execution to allow manual interaction
        console.log("Paused for manual entry of the verification code.");
        await this.page.pause();

        await this.page.click(this.verification_code_submit);
        console.log("Clicked the Submit button for verification code.");
        // Check again for error after retry
        const verification_field_error = (await this.page.locator(this.verification_code_error))
        if (await verification_field_error.isVisible()) {
            const verification_field_error_expected = "Invalid verification code.";
            const verification_field_actual = (await this.page.locator(this.verification_code_error).innerText());
            expect(verification_field_actual).toBe(verification_field_error_expected);
            console.log("verification error is: " + verification_field_actual)
            console.log("verification error message is displayed: Pass");
            await this.fill_verification_code_manual();
        } else {
            console.log("Verification code accepted and new account has been created.");
        }

    }

    async verification_code_resend_button() {
        try {
            await this.page.click(this.verification_code_resend);
            console.log("Clicked the Resend Verification Code button.");
        } catch (error) {
            console.log("unexpected error:" + error);
        }
    }
    async positive_signup() {
        try {
            await this.page.fill(this.full_name, "Neha114");
            await this.page.fill(this.email, "neha115@yopmail.com");
            await this.page.fill(this.password, "12345678");
            await this.page.fill(this.confirm_password, "12345678");
            await this.submit_signup();
            await this.terms_and_conditions();
        }
        catch (error) {
            console.log("unexpected error:" + error);
        }
    }

}
