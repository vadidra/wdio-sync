import App from '../page-object-model/App'
import LoginPage from '../page-object-model/pages/LoginPage'
import ExchangePage from '../page-object-model/pages/ExchangePage'
import Navbar from '../page-object-model/components/Navbar'
import InsideNavbar from '../page-object-model/components/InsideNavbar'

describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should make currency exchange', () => {
        InsideNavbar.clickPayBillsTab()
        InsideNavbar.clickExchangeLink()
        const currencySelect = ExchangePage.currencySelect
        currencySelect.waitForExist()
        currencySelect.selectByAttribute('value', 'GBP')
        ExchangePage.setAmount('500')
        ExchangePage.selectDollars()
        ExchangePage.submitForm()
        const message = ExchangePage.message
        expect(message).toHaveText(
            'Foreign currency cash was successfully purchased.'
        )
    })

})