import App from '../page-object-model/App'
import LoginPage from '../page-object-model/pages/LoginPage'
import Navbar from '../page-object-model/components/Navbar'

describe('E2E Tests - Transaction Filters', () => {
	it('Should log into application', () => {
		App.openLoginPage();
		LoginPage.login('username','password');
		Navbar.insideNavbarIsVisible();
	})

	it('Should filter transactions', () => {
		$('#account_activity_tab').click();
        $('#tabs > ul > li:nth-child(2) > a').waitForExist();
        $('#tabs > ul > li:nth-child(2) > a').click();
        $('#aa_description').waitForExist();
        $('#aa_description').setValue('Test');
        $('button[type="submit"]').click();
        $('#filtered_transactions_for_account').waitForExist();
        const message = $('.well');
        expect(message).toHaveText('No results.');
    })
})