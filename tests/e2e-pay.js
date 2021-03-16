import App from '../page-object-model/App'
import LoginPage from '../page-object-model/pages/LoginPage'
import PaymentPage from '../page-object-model/pages/PaymentPage'
import InsideNavbar from '../page-object-model/components/InsideNavbar'
import Navbar from '../page-object-model/components/Navbar'

describe('E2E Tests - Pay', () => {
	it('Should log into application', () => {
		App.openLoginPage();
		LoginPage.login('username','password');
		Navbar.insideNavbarIsVisible();
	})

	it('Should make payment', () => {
		InsideNavbar.clickPayBillsTab()
		const selectPayee = PaymentPage.payeeSelect
		selectPayee.waitForExist()
		selectPayee.selectByAttribute('value', 'apple')
		const selectAccount = PaymentPage.accountSelect
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Loan')
		PaymentPage.fillForm('500', '2020-03-31', 'Test')
		PaymentPage.submitForm()
		const message = PaymentPage.message
		expect(message).toHaveText('The payment was successfully submitted.')
	})

})