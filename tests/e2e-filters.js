import App from '../page-object-model/App'
import LoginPage from '../page-object-model/pages/LoginPage'
import FiltersPage from '../page-object-model/pages/FiltersPage'
import Navbar from '../page-object-model/components/Navbar'
import InsideNavbar from '../page-object-model/components/InsideNavbar'

describe('E2E Tests - Transaction Filters', () => {
	it('Should log into application', () => {
		App.openLoginPage();
		LoginPage.login('username','password');
		Navbar.insideNavbarIsVisible();
	})

	it('Should filter transactions', () => {
        InsideNavbar.clickAccountActivityTab();
        InsideNavbar.clickFiltersLink();
        FiltersPage.fillDescription('Test');
        FiltersPage.submitFilter();
        FiltersPage.resultsTableIsVisible();
        const message = FiltersPage.message;
        expect(message).toHaveText('No results.');
    })
})