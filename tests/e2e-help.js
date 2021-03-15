import App from '../page-object-model/App'
import LoginPage from '../page-object-model/pages/LoginPage'
import HelpPage from '../page-object-model/pages/HelpPage'
import Navbar from '../page-object-model/components/Navbar'

describe('E2E Tests - Help Section', () => {
	it('Should log into application', () => {
		App.openLoginPage();
		LoginPage.login('username','password');
		Navbar.insideNavbarIsVisible();
	})

	it('Should load help content', () => {
        Navbar.clickSettings();
        Navbar.clickHelp();
        const sectionTitle = HelpPage.title;
		expect(sectionTitle).toHaveText('How do I log into my account?');
        HelpPage.clickOnTransferFunds();
        expect(sectionTitle).toHaveText('How do I transfer funds?');
        HelpPage.clickOnPayBills();
        expect(sectionTitle).toHaveText('How do I pay bills?');
	})
})