import { test, expect } from '@playwright/test';

test('Submitting the form', async ({ page }) => {
    
    const selectors = {
        nameInputField: '#name',
        mailInputField: '#email',
        phoneInputField: '#phone',
        subjectInputField: '#subject',
        descriptionInputField: '#description',
        submitButton: '#submitContact',
    };

    await page.goto('https://automationintesting.online/');

    await page.fill(selectors.nameInputField, 'TestDonteco');
    await page.fill(selectors.mailInputField, 'fcz-sbg@mail.ru');
    await page.fill(selectors.phoneInputField, '+7 (931) 392-00-90');
    await page.fill(selectors.subjectInputField, 'TestDonteco');
    await page.fill(selectors.descriptionInputField, 'Positive test for company submission form "Donteco" ');
    await page.click(selectors.submitButton);
});