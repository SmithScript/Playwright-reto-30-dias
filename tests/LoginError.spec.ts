import {test, expect} from '@playwright/test'

test('Login Error to hrm',async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', {name: 'Username'}).fill('Admin')
    await page.getByRole('textbox', {name: 'Password'}).fill('admin1236')
    await page.getByRole('button', {name: 'Login'}).click()    
    
    await expect(page.getByRole('alert')).toContainText('Invalid credentials')

});