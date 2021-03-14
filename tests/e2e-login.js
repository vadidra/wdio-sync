import App from '../page-object-model/App'
import LoginPage from '../page-object-model/pages/LoginPage'

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomePage();
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        LoginPage.pauseShort();
        LoginPage.formIsVisible();
        LoginPage.fillForm('invalid username','invalid password');
        LoginPage.submitForm();

        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        App.openHomePage();
        $('#signin_button').waitForExist()
        $('#signin_button').click()

        LoginPage.formIsVisible();
        LoginPage.fillForm('username','password');
        LoginPage.submitForm();

        $('.nav-tabs').waitForExist();
    })
    
    it('Should logout from app', () => {
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#pages-nav').waitForExist()
    })

})