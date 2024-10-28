import { test, expect } from '@playwright/test';

test('API Submitting the form', async ({ page }) => {
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

    const responsePromise = page.waitForResponse(response => 
        response.url() === 'https://automationintesting.online/message/' && response.status() === 201
    );

    await page.click(selectors.submitButton);

    const response = await responsePromise;
    
    expect(response.status()).toBe(201);
});